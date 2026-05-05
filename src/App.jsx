import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const sampleProducts = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 40000, inStock: false },
    { id: 3, name: "Tablet", price: 30000, inStock: true },
  ];

  // ✅ Create state
  const [products, setProducts] = useState(sampleProducts);

  // ✅ Remove handler
  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* ✅ Pass both products and remove function */}
      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;