import React from 'react';
import CartList from '../CartList';
class Cart extends React.Component{
    state = {
        bubbles: [],
        total: 0
    };

    componentDidMount() {
        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((res) => {
                let bubblesId = [];
                // console.log("bubbles = " + this.state.bubbles);
                // console.log("im in local storage id = " + JSON.parse(localStorage.getItem('idItemInCart')));
                if(localStorage.getItem('idItemInCart') !== null){
                    bubblesId = JSON.parse(localStorage.getItem('idItemInCart'));
                }
                let total = 0;
                bubblesId.forEach(id => {
                    if(res[id - 1].hasOwnProperty("inCart")){
                        res[id - 1].inCart += 1;
                    } else{
                        res[id - 1].inCart = 1;
                    }
                    total += res[id - 1].price;
                });
                localStorage.setItem('total', total);
                this.setState({total: total});
                res = res.filter(bubble => bubble.hasOwnProperty('inCart'));
                this.setState({bubbles: res});
            });

    }

    render() {
        const { bubbles, total } = this.state;
        return (
            <div className="bubble-container">
                <h1>Bubbles</h1>
                <CartList
                    bubbles={ bubbles }
                    total= { total }
                />
            </div>
        );
    };
};

export default Cart;