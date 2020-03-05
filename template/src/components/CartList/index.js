import React from 'react';
import CartItem from '../CartItem';
import CartBundle from '../CartBundle';

const ProductList = ({ bubbles, total, bundles }) => (
    <div>
        <div className="bubble-list">
        { bubbles.map(b => 
                <CartItem 
                    key={ b.id }
                    id={ b.id }
                    name={ b.name }
                    price={ b.price }
                    image={ b.image }
                    numInCart={ b.inCart }
                />
        )}
        </div>
        <div className="bubble-list">
        { bundles.map(b => 
                <CartBundle 
                    key={ b.id }
                    id={ b.id }
                    name={ b.name }
                    bundlePrice={ b.bundlePrice }
                    numInCart={ b.inCart }
                />
        )}
        </div>
        <div>
            <p>
                Total is: { total }
            </p>
        </div>
    </div>
)

export default ProductList;