import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import { getProducts } from '../../services/productService';


class Bubbles extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        products: [],
        selectedItem: null,
      };
    }
    componentDidMount() {
      this.setState({
        products: getProducts(),
      });
    }


    
    // renderModal() {
    //     const { selectedItem } = this.state;
    //     if (selectedItem) {
    //     return (
    //         <EditModal
    //         title="Edit news item"
    //         isOpen={ this.state.isModalOpen }
    //         onSubmit={ newsItem => this.editItem(newsItem) }
    //         newsItem={ selectedItem }
    //         close={ () => this.setState({ isModalOpen: false, selectedItem: null }) } />
    //     )
    //     }
    //     return (
    //     <EditModal
    //         title="Add news item"
    //         isOpen={ this.state.isModalOpen }
    //         onSubmit={ newsItem => this.addItem(newsItem) }
    //         close={ () => this.setState({ isModalOpen: false }) } />
    //     )
    // }

    
  render() {
    return (
        // <h1>TEST</h1>
      <div>
        <h1>Bubbles</h1>
        <p>Here comes the subpage for bubbles</p>
        <ProductList
          news={ products } />
      </div>
    );
  }

}
export default Bubbles;


// const Bubbles = () => {
//     const [bubbles, setData] = useState([]);

//     function fetchData(){
//         const res = fetch("http://localhost:3500/api/bubbles").then((res) => res.json()).then((res) => setData(res));
//     };

//     fetchData();

//     return (
//     <div>
//         <h1>Bubbles</h1>
//         <p>Here comes the subpage for bubbles</p>
//         <ProductList
//         bubbles={ bubbles } />
//     </div>
//     );
// };

// export default Bubbles;