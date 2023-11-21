import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name, quantity, category };

    // Pass the new item to the parent component
    onAddItem(newItem);

    // Clear the form
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields and inputs */}
    </form>
  );
}

export default NewItem;
