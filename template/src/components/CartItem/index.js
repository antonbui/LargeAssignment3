import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ id, name, price, image, numInCart }) => (
    <div className="card card-product">
        <div className="img-wrap"><img src={ image } className="list-img"></img></div>
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{numInCart}x { name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Price: ${ price }</span>
            </div>
            
            <div className="price-wrap h5">
                <span className="price">Price of all bubbles: ${ price * numInCart}</span>
            </div>
        </div>
    </div>
  );
  
  export default CartItem;
  