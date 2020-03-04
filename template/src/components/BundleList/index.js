import React from 'react';
import BundleItem from '../BundleItem';

const BundleList = ({ bundles }) => (
    <div className="bubble-list">
    { bundles.map(b => <BundleItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    items={ b.items }
    />)}
    </div>
)

export default BundleList;