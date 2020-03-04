import React from 'react';
import { Link } from 'react-router-dom';


class Checkout extends React.Component {

    render(){
        return(
        <div>
            <h1>Checkout</h1>
            <button className="btn btn-primary">
                <Link id="link-text" to="/delivery">Delivery</Link>
            </button>
            <p> or </p>
            <button className="btn btn-primary">
                <Link id="link-text" to="/pickup">Pickup</Link>
            </button>
        </div>
    )};
};

export default Checkout;