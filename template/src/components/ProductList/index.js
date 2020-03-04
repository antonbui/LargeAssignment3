import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = ({ bubbles }) => (
    <div>
    { bubbles.map(b => <ProductItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    description={ b.description }
    price={ b.price }
    image={ b.image }
    />)}
    </div>
)

export default ProductList;

// import React from 'react';
// import NewsItem from '../NewsItem';

// const NewsList = ({ news, editItem, deleteItem }) => (
//   <div>
//     { news.map(n => <NewsItem
//       key={ n.id }
//       id={ n.id }
//       title={ n.title }
//       shortDescription={ n.shortDescription }
//       onEdit={ editItem }
//       onDelete={ deleteItem }
//       category={ n.category } />) }
//   </div>
// );

// export default NewsList;
