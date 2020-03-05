import React from 'react';
import { Link } from 'react-router-dom';

const CartBundle = ({ id, name, bundlePrice, numInCart }) => (
    <div className="card card-product">
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{numInCart}x { name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Price: ${ bundlePrice }</span>
            </div>
            
            <div className="price-wrap h5">
                <span className="price">Price of all bundles: ${ bundlePrice * numInCart}</span>
            </div>
        </div>
    </div>
);
  
export default CartBundle;
  