import React from 'react';
import styles from '../styles/ProductCard.module.css';

import { Card, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card
      className={`${styles.card} ${
        product.inStock ?
        styles.outOfStock:''
      }`}
    >
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
export default ProductCard;

