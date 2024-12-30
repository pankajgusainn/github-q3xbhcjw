import React from 'react';

export function MainNavigation() {
  return (
    <nav className="bg-white py-4 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <div className="text-[#D81E1E] text-3xl font-bold mr-auto pl-32">
          Vanilla gift
        </div>
        <div className="flex gap-8">
          <button className="font-medium">Buy Now</button>
          <button className="font-medium">Help</button>
        </div>
      </div>
    </nav>
  );
}