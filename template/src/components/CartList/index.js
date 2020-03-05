import React from 'react';
import CartItem from '../CartItem';
import CartBundle from '../CartBundle';
import { NavLink } from 'react-router-dom';

const ProductList = ({ bubbles, total, bundles }) => (
    <div>
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
        </div>
        <div className="bubble-list">
        { bundles.map(b => 
                <CartBundle 
                    key={ b.id }
                    id={ b.id }
                    name={ b.name }
                    bundlePrice={ b.bundlePrice }
                    numInCart={ b.inCart }
                />
        )}
        </div>
        <div>
            <p>
                Total is: { total }
            </p>
            <button
          type="button"
          className="btn btn-primary">
            <NavLink
            exact
            to="/checkout">Checkout</NavLink>
            </button>
        </div>
    </div>
)

export default ProductList;