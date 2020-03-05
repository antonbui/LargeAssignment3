import React, { useState, useEffect } from 'react';
import BundleList from '../BundleList';
import { NavLink } from 'react-router-dom';
class Bundles extends React.Component{
    state = {
        bundles: [],
        bubbles: []
    };

    componentDidMount() {
        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((res) => this.setState({bubbles: res}));
        fetch("http://localhost:3500/api/bundles")
            .then((res) => res.json())
            .then((res) => {
                const { bubbles } = this.state;
                res.forEach(bundle => {
                    if(!(bundle.hasOwnProperty("bundlePrice"))){
                        bundle.bundlePrice = 0;
                        bundle.items.forEach(bubbleId => {
                            bundle.bundlePrice += bubbles[bubbleId - 1].price;
                        })
                    }
                });
                this.setState({bundles: res});
            });
    }

    addToCart(productId) {
        let temp = [];
        console.log(JSON.parse(localStorage.getItem('idBundleInCart')))
        if(JSON.parse(localStorage.getItem('idBundleInCart')) !== null){
            temp = JSON.parse(localStorage.getItem('idBundleInCart'));
        }
        temp.push(productId);
        localStorage.setItem('idBundleInCart', JSON.stringify(temp));
    }
    

    render() {
        const { bundles, bubbles } = this.state;
        return (
        <div>
            <h1>Bundles</h1>
            <BundleList
                bundles={ bundles } 
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

    }
};

export default Bundles;