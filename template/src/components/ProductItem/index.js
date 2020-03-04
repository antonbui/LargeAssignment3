import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, description, price, image }) => (
    <div className="card card-body bg-light news-item">
        <img src={ image } className="img-thumbnail"></img>
        <h3><Link to={`/${id}`}>{ name }</Link></h3>
        <p>{ description }</p>
        <p>{ price }</p>
    </div>
  );
  
  export default ProductItem;
  