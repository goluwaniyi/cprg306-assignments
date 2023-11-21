'use client'

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <button onClick={handleGitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
