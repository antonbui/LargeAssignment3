import React from 'react';
import BubbleItem from '../BubbleItem';

const BubblesList = ({ bubbles, editItem, deleteItem }) => (
  <div>
    { bubbles.map(n => <BubbleItem
      key={ n.id }
      id={ n.id }
      title={ n.name }
    //   shortDescription={ n.shortDescription }
    //   onEdit={ editItem }
    //   onDelete={ deleteItem }
    //   category={ n.category } 

      />) }
  </div>
);

export default BubblesList;