import React from 'react';
import CartItem from '../CartItem';

const ProductList = ({ bubbles, total }) => (
    <div className="bubble-list">
    { bubbles.map(b => 
            <CartItem 
                key={ b.id }
                id={ b.id }
                name={ b.name }
                price={ b.price }
                image={ b.image }
                numInCart={ b.inCart }
            />
    )}
        <div>
            <p>
                Total is: { total }
            </p>
            <button
            type="button"
            className="btn btn-primary">Checkout</button>
        </div>
    </div>
)

export default ProductList;