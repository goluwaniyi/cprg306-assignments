import React from 'react';
import Item from './item';

function ItemList({ items }) {
  // Render items based on the provided prop
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
