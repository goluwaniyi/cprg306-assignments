// week7/item.js
import React from 'react';

const Item = ({ name, onSelect }) => {
  return (
    <div onClick={() => onSelect(name)} style={{ cursor: 'pointer' }}>
      {name}
    </div>
  );
};

export default Item;
