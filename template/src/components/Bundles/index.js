import React, { useState, useEffect } from 'react';
import BundleList from '../BundleList';
class Bundles extends React.Component{
    state = {
        bundles: [],
        bubbles: []
    };

    componentDidMount() {
        const { match: { params } } = this.props;
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
        if(localStorage.getItem('idBundleInCart') !== null){
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
            <p>Here comes the subpage for bundles</p>
            <BundleList
                bundles={ bundles } 
                bubbles={ bubbles }
                addToCart={ productId => this.addToCart(productId) }
                />
        </div>
        );

    }
};

export default Bundles;