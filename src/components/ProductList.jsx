import React from 'react';
import ProductCard from './ProductCard';

 const ProductList = ({ products }) => {
  
  const hasInStock = products.some(product => product.inStock);

  return (
    <>

      {!hasInStock && <p>No products currently in stock.</p>}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;