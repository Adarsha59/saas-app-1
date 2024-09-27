import React from 'react';
import { FiSearch, FiPlus } from "react-icons/fi";

const Search = ({onSearchInput}:any) => {
  return (
    <>
    
    <div className="max-w-7xl mx-auto py-6">
        {/* Large Search Box */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              onChange={(event)=>{onSearchInput(event.target.value)}}
              placeholder="Search for AI templates..."
              className="w-full px-6 py-4 text-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FiSearch className="absolute right-6 top-5 text-gray-400 w-6 h-6" />
          </div>
        </div>
        </div>
    </>
  );
}

export default Search;
