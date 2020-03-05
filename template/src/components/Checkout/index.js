import React from 'react';
import { Link } from 'react-router-dom';


class Checkout extends React.Component {

    render(){
        return(
        <div className="checkout">
            <h1>Checkout</h1>
            <p id="checkout-msg">Do you want a delivery or an in-store pick-up?</p>
            <div className="cheoutn-btns">
                <button className="btn btn-primary btn-checkout">
                    <Link id="link-text" to="/delivery">Delivery</Link>
                </button>
                <button className="btn btn-primary btn-checkout">
                    <Link id="link-text" to="/pickup">Pickup</Link>
                </button>
            </div>
        </div>
    )};
};

export default Checkout;