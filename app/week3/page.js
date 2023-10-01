import React from 'react';
import ItemList from './item-list';
import MyComponent from '../Studentinfo';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
        <MyComponent />
        <Link href="/">Home</Link>
        <ItemList />
      </div>
    </main>
  );
}
