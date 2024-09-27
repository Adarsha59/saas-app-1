"use client";
import React from "react";
import { FiHome, FiInfo, FiSettings, FiDollarSign } from "react-icons/fi";

interface SidebarProps {
  toggleDarkMode: () => void;
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleDarkMode, sidebarOpen }) => {
  const navItems = [
    { icon: FiHome, text: "Home" },
    { icon: FiInfo, text: "About" },
    { icon: FiSettings, text: "Settings" },
    { icon: FiDollarSign, text: "Pricing" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 bg-white dark:bg-gray-800 shadow-lg`}
    >
      <div className="flex flex-col h-full px-4 py-8">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Dashboard
        </h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-150 ease-in-out"
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button
          onClick={toggleDarkMode}
          className="mt-auto p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-150 ease-in-out"
        >
          Toggle Dark Mode
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
