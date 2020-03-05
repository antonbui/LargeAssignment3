import React from 'react';
import ProductList from '../ProductList';
import { NavLink } from 'react-router-dom';
class Bubbles extends React.Component{
    state = {
        bubbles: []
    };

    componentDidMount() {
        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((res) => this.setState({bubbles: res}));
    }

    addToCart(productId) {
        let temp = [];
        if(localStorage.getItem('idItemInCart') !== null){
            temp = JSON.parse(localStorage.getItem('idItemInCart'));
        }
        temp.push(productId);
        localStorage.setItem('idItemInCart', JSON.stringify(temp));
    }

    render() {
        const { bubbles } = this.state;
        return (
            <div className="bubble-container">
                <h1>Bubbles</h1>
                <ProductList
                    bubbles={ bubbles }
                    addToCart={ productId => this.addToCart(productId) }
                />
                <button
                type="button"
                className="btn btn-primary">
                    <NavLink
                    exact
                    to="/checkout">Checkout</NavLink>
                </button>
            </div>
        );
    };
};

export default Bubbles;