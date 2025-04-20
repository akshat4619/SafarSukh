import React from 'react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-10">
      <h3 className="text-xl font-semibold text-gray-800">Welcome to the Portal</h3>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">Akshat</span>
        <img
          src="https://ui-avatars.com/api/?name=Akshat+Jain"
          alt="user"
          className="rounded-full w-9 h-9 border border-gray-300"
        />
      </div>
    </div>
  );
};

export default TopBar;
