import React from "react";

class ProductItemDetails extends React.Component {
    state = {
        productItem: {
            name: '',
            description: '',
            price: 0,
            image: '',
        }
    };
  
    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`http://localhost:3500/api/bubbles/${params.productItemId}`)
            .then((res) => res.json())
            .then((res) => this.setState({productItem: res}));
    }
  
    render() {
        const { name, description, price, image } = this.state.productItem;
        return (
            <div>
                <div className="img-wrap img-container"><img src={ image } className="details-img"></img></div>
                <h3>{name}</h3>
                <p>{ description }</p>
                <span className="price">Price: ${ price }</span>
            </div>
        );
    };
};

export default ProductItemDetails;