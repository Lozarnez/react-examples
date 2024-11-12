import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../server/products';
import useAsync from '../../../hooks/useAsync';

const Detail = () => {
  const { id } = useParams();
  const { loading, error, value: product } = useAsync(() =>
    getProductById(id)
  )

  if (loading) return <p>Loading product details...</p>;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Rating:</strong> {product.rating} / 5</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
      <p><strong>Shipping Info:</strong> {product.shippingInformation}</p>
      <p><strong>Availability:</strong> {product.availabilityStatus}</p>
      <div>
        <h3>Reviews:</h3>
        {product.reviews && product.reviews.length ? (
          product.reviews.map((review, index) => (
            <div key={index}>
              <p><strong>Reviewer:</strong> {review.reviewerName}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p>{review.comment}</p>
              <p><small>{new Date(review.date).toLocaleDateString()}</small></p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
