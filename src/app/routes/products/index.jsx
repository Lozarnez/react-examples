import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../server/products';
import useAsync from '../../../hooks/useAsync';

const Products = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const { loading, error, value: products = [] } = useAsync(() =>
    getProducts({
      select: 'thumbnail,title,description,price,rating,stock',
      limit: itemsPerPage,
      skip: (page - 1) * itemsPerPage
    }),
    [page]
  );

  const handleNextPage = () => setPage(prevPage => prevPage + 1);
  const handlePreviousPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

  const handleCreateProduct = () => {
    navigate('crear')
  }

  const handleViewDetails = (id) => {
    navigate(`/detalle/${id}`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Ocurrió un error inesperado</p>;

  return (
    <div>
      <div>
        <button onClick={handleCreateProduct}>Crear nuevo</button>
      </div>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={products.length < itemsPerPage}>Next</button>
      </div>

      {products.length ? (
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating} / 5</p>
              <p>Stock: {product.stock}</p>
              <button onClick={() => handleViewDetails(product.id)}>View Details</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={products.length < itemsPerPage}>Next</button>
      </div>
    </div>
  );
};

export default Products;
