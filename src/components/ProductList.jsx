import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      <h1 className="title">Photos</h1>
      <div className="product-grid">
        {data && data.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {/* Using a placeholder if image fails, similar to your video */}
              <img src={product.images[0]} alt={product.title} />
              <div className="overlay-text">600 x 600</div>
            </div>
            <p className="product-title">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;