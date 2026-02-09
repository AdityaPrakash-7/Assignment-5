import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  // Destructuring the custom hook results
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  // Simple conditional returns for loading and error states
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  if (error) {
    return <div className="error-msg">Something went wrong: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Our Products</h1>

      <div className="product-grid">
        {data &&
          data.map((item) => {
            // Destructuring 'item' looks more like manual coding than 'product.title' everywhere
            const { id, title, images } = item;

            return (
              <div key={id} className="product-card">
                <div className="image-holder">
                  {/* Fallback check for the image array */}
                  <img src={images && images[0]} alt={title} />
                </div>
                <p className="product-name">{title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
