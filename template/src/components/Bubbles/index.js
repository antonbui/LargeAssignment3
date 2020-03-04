import React from 'react';
import ProductList from '../ProductList';
class Bubbles extends React.Component{
    state = {
        bubbles: []
    };

    componentDidMount() {
        const { match: { params } } = this.props;
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
        // console.log("temp = " + JSON.stringify(temp));
        localStorage.setItem('idItemInCart', JSON.stringify(temp));
        // console.log("im in local storage id = " + JSON.parse(localStorage.getItem('idItemInCart')));
        // alert(productId);
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
            </div>
        );
    };
};

export default Bubbles;