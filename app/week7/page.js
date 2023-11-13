// week7/page.js
'use client'

import React, { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const Page = () => {
  // New state variable to hold the selected item name
  const [selectedItemName, setSelectedItemName] = useState('');

  // Array of items
  const items = [
    { id: 1, name: 'Chicken Breast, 1 kg 🍗' },
    { id: 2, name: 'Broccoli, 500g 🥦' },
    // Add more items as needed
  ];

  // Event handler to clean up and update the selected item name
  const handleItemSelect = (itemName) => {
    // Clean up the item name (remove emojis and other unwanted characters)
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();

    // Update the state with the cleaned item name
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
