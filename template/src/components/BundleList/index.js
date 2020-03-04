import React from 'react';
import BundleItem from '../BundleItem';

function sumPrice(items, bubbles) {
    var sum = 0;
    console.log(items);
    let result = items.map(i => { 
        return bubbles.map(b => { 
            if (b.id==i) {
                return b.price
            }
        })
    })
        
    console.log("Result: " + result);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (typeof result[i][j] != "undefined"){
                sum = sum + result[i][j]
            }
        }
    }
    result = result.filter(word => word.length > 1);
    return sum;
};

const BundleList = ({ bundles, bubbles, addToCart }) => (
    <div className="bubble-list">
    { bundles.map(b => <BundleItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    items={ b.items }
    sum={ sumPrice(b.items, bubbles) }
    addToCart={ addToCart }

    />)}
    </div>
)

export default BundleList;