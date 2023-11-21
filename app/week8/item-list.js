// week7/item-list.js
import React from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
