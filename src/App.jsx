import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const products =  [
  { id: 1, name: 'Spaghetti Bolognese', price: 5000, inStock: true},
  { id: 2, title: 'Chicken', price: 40000, inStock: false},
   { id: 3, name: 'Pizza', price: 3000, inStock: true }
  
];
  return (
    <div>
      <h1>Product Store</h1>
      
     <ProductList products ={products}/>
    
    </div>
  );
};

export default App;
