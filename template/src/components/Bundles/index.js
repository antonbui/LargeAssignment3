import React, { useState, useEffect } from 'react';
import BundleList from '../BundleList';
class Bundles extends React.Component{
    state = {
        bundles: [],
        bubbles: []
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch("http://localhost:3500/api/bundles")
            .then((res) => res.json())
            .then((res) => this.setState({bundles: res}));

        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((res) => this.setState({bubbles: res}));
    }
    

    render() {
        const { bundles, bubbles } = this.state;
        return (
        <div>
            <h1>Bundles</h1>
            <p>Here comes the subpage for bundles</p>
            <BundleList
                bundles={ bundles } 
                bubbles={ bubbles }
                />
        </div>
        );

    }
};

export default Bundles;