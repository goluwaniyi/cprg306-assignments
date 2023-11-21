'use client'

import React, { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const Page = () => {
  
  const [selectedItemName, setSelectedItemName] = useState('');


  const items = [
    { id: 1, name: 'Chicken Breast, 1 kg 🍗' },
    { id: 2, name: 'Broccoli, 500g 🥦' },
  ];

  const handleItemSelect = (itemName) => {

    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();

    setSelectedItemName(cleanedItemName);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {/* Pass the onItemSelect prop to ItemList */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        {/* Pass selectedItemName as the ingredient prop to MealIdeas */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
