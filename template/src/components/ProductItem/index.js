import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, description, price, image, addToCart }) => (
    <div className="card card-product">
        <div className="img-wrap"><img src={ image } className="list-img"></img></div>
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{ name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                {/* <p>{ description }</p> */}
                <span className="price">Price: ${ price }</span>
            </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => addToCart(id) }>Add to cart</button>
    </div>
  );
  
  export default ProductItem;
  