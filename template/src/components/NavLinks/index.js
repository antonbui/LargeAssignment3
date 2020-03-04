import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
    <ul className="navlinks">
        <li>
            <NavLink
            exact
            to="/">Home</NavLink>
        </li>
        <li>
        <NavLink
            exact
            to="/bubbles">Products</NavLink>
        </li>
        <li>
        <NavLink
            exact
            to="/bundles">Bundles</NavLink>
        </li>
        <li>
        <NavLink
            exact
            to="/about">About</NavLink>
        </li>
        <li>
        <NavLink
            exact
            to="/Cart">Cart</NavLink>
        </li>
    </ul>
);

export default NavLinks;