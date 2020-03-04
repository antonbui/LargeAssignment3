import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
const Bubbles = () => {
    const [bubbles, setData] = useState([]);

    function fetchData(){
        const res = fetch("http://localhost:3500/api/bubbles").then((res) => res.json()).then((res) => setData(res));
    };

    fetchData();

    return (
    <div>
        <h1>Bubbles</h1>
        <p>Here comes the subpage for bubbles</p>
        <ProductList
        bubbles={ bubbles } />
    </div>
    );
};

export default Bubbles;