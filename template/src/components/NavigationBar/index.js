import React from 'react';
import NavLinks from '../NavLinks';


const NavigationBar = () => (

    <nav className="navbar navbar-dark bg-dark">
        <div className="nav-container">
        <img id="logo" src="../logo.svg" alt="logo"></img>
        <NavLinks  />
        </div>
    </nav>

);

export default NavigationBar