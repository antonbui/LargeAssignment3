import React from 'react';
import { getNewsById } from '../../services/newsService';

class ProductItemDetails extends React.Component {
  state = {
    productItem: {
      name: '',
      description: '',
      price: '',
      image: '',
    }
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ productItem: getNewsById(params.productItemId) });
  }

  render() {
    const { name, description, price, image } = this.state.newsItem;
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ description }</p>
        <p>{ price }</p>
        <p>{ image }</p>
      </div>
    );
  };
};

export default ProductItemDetails;



////////////////////
// import React from 'react';
// import { getNewsById } from '../../services/newsService';

// class NewsItemDetails extends React.Component {
//   state = {
//     newsItem: {
//       title: '',
//       longDescription: '',
//       category: '',
//     }
//   };

//   componentDidMount() {
//     const { match: { params } } = this.props;
//     this.setState({ newsItem: getNewsById(params.newsItemId) });
//   }

//   render() {
//     const { title, longDescription, category } = this.state.newsItem;
//     return (
//       <div>
//         <h1>{ title }</h1>
//         <p>{ longDescription }</p>
//         <div className="category">{ category.slice(0, 1).toUpperCase() + category.slice(1) }</div>
//       </div>
//     );
//   };
// };

// export default NewsItemDetails;
