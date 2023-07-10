import React from 'react';
import { Link } from 'react-router-dom';

// Footer component
export const Footer = () => {
  return (
    // Footer container
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        {/* Copyright text */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <Link to="https://github.com/JAYANT-CS50" className="hover:underline">Jayant™</Link>. All Rights Reserved.
        </span>
        {/* Additional links or items */}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* Add your list items or additional links here */}
        </ul>
      </div>
    </footer>
  );
};
