import React from 'react';
import { Link } from 'react-router-dom';

const BundleItem = ({ id, name, items}) => (
    <div className="card card-product">
        <figcaption className="info-wrap">
            <h3><Link to={`/bundle/${id}`}>{ name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Total price: ${ items }</span>
            </div>
        </div>
    </div>
  );
  
  export default BundleItem;
  