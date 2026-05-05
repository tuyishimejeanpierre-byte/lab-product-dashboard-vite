import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  return (
   <Card className={styles.card}>
  <CardContent>
    
    {/* ✅ Add wrapper div HERE */}
    <div className={!product.inStock ? "outOfStockClass" : ""}>
      
      <Typography variant="h5">
        {product.name}
      </Typography>

      <Typography variant="body1">
        Price: {product.price}
      </Typography>

      <Typography variant="body2">
        Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
      </Typography>

      <Button
        variant="contained"
        disabled={!product.inStock}
      >
        Buy Now
      </Button>

      <Button onClick={() => onRemove(product.id)}>
        Remove
      </Button>

    </div>
  </CardContent>
</Card>
  );
};

export default ProductCard;