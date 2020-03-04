import React, { useState, useEffect } from 'react';
import BundleList from '../BundleList';
const Bundles = () => {
    const [bundles, setData] = useState([]);

    function fetchData(){
        const res = fetch("http://localhost:3500/api/bundles").then((res) => res.json()).then((res) => setData(res));
    };

    fetchData();
    
    return (
    <div>
        <h1>Bundles</h1>
        <p>Here comes the subpage for bundles</p>
        {/* <h3>{bundles}</h3> */}
        <BundleList
        bundles={ bundles } />
    </div>
    );
};

export default Bundles;