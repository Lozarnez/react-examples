import React from 'react';
import { useForm } from 'react-hook-form';
import useAsync from '../../../hooks/useAsync';
import { createProduct } from '../../../server/products';
import { useEffect } from 'react';

const CreateProductForm = () => {
  const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
  const { loading, error, value, execute } = useAsync(createProduct);
  const cField = watch('rating')

  useEffect(() => {
    if (cField) console.log('Country', cField)

    return () => {
      console.log('End')
    }
  }, [cField])

  return (
    <form onSubmit={handleSubmit(execute)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          {...register('description')}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          {...register('price', { required: 'Price is required', valueAsNumber: true })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          {...register('rating', { required: 'Rating is required', valueAsNumber: true })}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
        {errors.rating && <p>{errors.rating.message}</p>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Create Product'}
      </button>

      {error && <p>Error: {error.message}</p>}
      {value && <p>Product created successfully: {JSON.stringify(value)}</p>}
    </form>
  );
};

export default CreateProductForm;
