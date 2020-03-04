import React, { useState, useEffect } from 'react';

const Bubbles = () => {
    const [bubbles, setData] = useState([]);
    
    // useEffect(() => {
    //     fetchData();
    // });
    
    // async function fetchData(){
    //     const res = await fetch("http://localhost:3500/api/bubbles");
    //     res
    //       .json()
    //       .then(res => setData(res))
    //   };

    return (
    <div>
        <h1>Bubbles</h1>
        <p>Here comes the subpage for bubbles</p>
    </div>
    );
};

export default Bubbles;