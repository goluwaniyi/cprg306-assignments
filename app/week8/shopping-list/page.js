'use client'

import React from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { useHistory } from 'react-router-dom';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const history = useHistory();

  // Check if the user is logged in
  if (!user) {
    // Redirect the user to the landing page
    history.push('/landing-page'); // Replace with the actual path to your landing page
    return null; // You can also render a loading indicator or a message here
  }

  // Render the shopping list content
  return (
    <div>
      <h2>Your Shopping List</h2>
      {/* Add your shopping list content here */}
    </div>
  );
};

export default ShoppingListPage;
