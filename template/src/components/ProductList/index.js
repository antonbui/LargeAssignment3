import React from 'react';

const ProductList = ({ bubbles }) => (
    <div>
    { bubbles.map(n => <div>{ n.name }</div>)}
    </div>
)

export default ProductList;