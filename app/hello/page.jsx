"use client";
import React, { useState } from "react";
import {
  FiHome,
  FiInfo,
  FiSettings,
  FiDollarSign,
  FiSearch,
  FiPlus,
} from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { icon: FiHome, text: "Home" },
    { icon: FiInfo, text: "About" },
    { icon: FiSettings, text: "Settings" },
    { icon: FiDollarSign, text: "Pricing" },
  ];

  const templates = [
    {
      id: 1,
      name: "AI Chatbot",
      description: "Intelligent conversational AI for customer support",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "AI Image Generator",
      description: "Create stunning images with AI technology",
      image:
        "https://images.unsplash.com/photo-1664575198308-3959904fa430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "AI Text Summarizer",
      description: "Instantly summarize long texts with AI",
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
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
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Navbar */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white dark:bg-gray-800 shadow-md">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <HiMenuAlt3 className="w-6 h-6" />
              </button>
              <span className="ml-4 text-sm font-medium text-gray-800 dark:text-white bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 rounded-full">
                Premium Member - 90% OFF
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
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pt-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-6">
            {/* Large Search Box */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for AI templates..."
                  className="w-full px-6 py-4 text-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FiSearch className="absolute right-6 top-5 text-gray-400 w-6 h-6" />
              </div>
            </div>

            {/* Browse AI Templates Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Browse AI Templates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                        {template.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {template.description}
                      </p>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                        Add Yourself
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Add New Template Button */}
            <button className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <FiPlus className="w-6 h-6" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
