'use client'

import React, { useEffect, useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Load items on component mount
  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    };

    loadItems();
  }, [user]);

  // Handle adding an item to the shopping list
  const handleAddItem = async () => {
    if (user) {
      // Add item to Firestore
      const newItemId = await addItem(user.uid, { name: newItem });

      // Update state with the new item
      setItems(prevItems => [...prevItems, { id: newItemId, data: { name: newItem } }]);
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Your Shopping List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.data.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ShoppingListPage;
