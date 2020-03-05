import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = ({ bubbles, addToCart, cart }) => (
    <div className="bubble-list">
    { bubbles.map(b => <ProductItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    description={ b.description }
    price={ b.price }
    image={ b.image }
    addToCart={ addToCart }
    />)}
    </div>
)

export default ProductList;