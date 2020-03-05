import React from 'react';
import CartList from '../CartList';
import { NavLink } from 'react-router-dom';
class Cart extends React.Component{
    state = {
        allBubbles: [],
        bubbles: [],
        bundles: [],
        total: 0
    };

    componentDidMount() {
        this.setBubblesInCart();
        this.setBundlesInCart();
    }

    setBubblesInCart(){
        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ allBubbles: res });
                const { total } = this.state;
                let bubblesId = [];
                if(localStorage.getItem('idItemInCart') !== null){
                    bubblesId = JSON.parse(localStorage.getItem('idItemInCart'));
                }
                let totalP = total;
                bubblesId.forEach(id => {
                    if(res[id - 1].hasOwnProperty("inCart")){
                        res[id - 1].inCart += 1;
                    } else{
                        res[id - 1].inCart = 1;
                    }
                    totalP += res[id - 1].price;
                });
                localStorage.setItem('total', totalP);
                this.setState({total: totalP});
                res = res.filter(bubble => bubble.hasOwnProperty('inCart'));
                this.setState({bubbles: res});
            }
        );
    }

    setBundlesInCart(){
        fetch("http://localhost:3500/api/bundles")
            .then((res) => res.json())
            .then((res) => {
                let bundlesId = [];
                const { total, allBubbles } = this.state;
                if(localStorage.getItem('idBundleInCart') !== null){
                    bundlesId = JSON.parse(localStorage.getItem('idBundleInCart'));
                }
                let totalP = total;
                bundlesId.forEach(id => {
                    if(!(res[id - 1].hasOwnProperty("bundlePrice"))){
                        res[id - 1].bundlePrice = 0;
                        res[id - 1].items.forEach(bubbleId => {
                            res[id - 1].bundlePrice += allBubbles[bubbleId - 1].price;
                        })
                    }
                    if(res[id - 1].hasOwnProperty("inCart")){
                        res[id - 1].inCart += 1;
                    } else{
                        res[id - 1].inCart = 1;
                    }
                    totalP += res[id - 1].bundlePrice;
                });
                localStorage.setItem('total', totalP);
                this.setState({total: totalP});
                res = res.filter(bundle => bundle.hasOwnProperty('inCart'));
                this.setState({bundles: res});
            });
    }
    
    render() {
        const { bubbles, total, bundles } = this.state;
        return (
            <div className="bubble-container">
                <h1>Your shopping cart:</h1>
                <button
                type="button"
                className="btn btn-primary">
                    <NavLink
                    exact
                    to="/checkout">Proceed to checkout</NavLink>
                </button>
                <CartList
                    bubbles={ bubbles }
                    total={ total }
                    bundles={ bundles }
                />
                
            </div>
        );
    };
};

export default Cart;