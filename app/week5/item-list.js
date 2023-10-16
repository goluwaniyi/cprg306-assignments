'use client'

import { useState } from "react";
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  const handleGroupByCategory = () => {
    setGroupByCategory(!groupByCategory);
  };

  // Group items by category
  const groupedItems = groupItemsByCategory();

  function groupItemsByCategory() {
    const groupedItems = {};

    for (const item of sortedItems) {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }

      groupedItems[item.category].push(item);
    }

    return groupedItems;
  }

  // Get sorted categories
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div>
      <div className="flex mb-2">
        <button
          onClick={handleSortByName}
          className={`mr-2 px-4 py-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={handleGroupByCategory}
          className={`px-4 py-2 ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Group by Category
        </button>
      </div>

      {groupByCategory ? (
        <div>
          {sortedCategories.map((category) => (
            <div key={category}>
              <h2 className="text-xl mt-4 mb-2 capitalize">{category}</h2>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
