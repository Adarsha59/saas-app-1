"use client";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";

// Define a more descriptive interface name for props
interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar" // Accessibility improvement
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>
          <span className="text-sm font-medium text-gray-800 dark:text-white bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 rounded-full">
            {/* Mobile view */}
            <span className="md:hidden">Premium Member</span>

            {/* Laptop view */}
            <span className="hidden md:inline">Premium Member - 90% OFF</span>
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search AI templates"
            className="w-64 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
        <div className="flex items-center relative ml-4">
          {/* UserButton wrapper for improved UI */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full  text-white shadow-lg hover:bg-indigo-600 transition duration-200 ease-in-out">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
