"use client"
import { useState } from 'react';
import { FiHome, FiClock, FiCreditCard, FiSettings, FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button for mobile */}
      <button
        className="lg:hidden p-4 text-2xl text-white  focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <AiOutlineClose /> : <FiMenu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64   p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
          <Image className="text-3xl font-bold mb-6" src="/logo.svg" alt='logo' width={50} height={50}>

          </Image>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-4 flex items-center">
              <FiHome className="mr-2" />
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <FiClock className="mr-2" />
              <a href="#" className="hover:text-gray-300">
                History
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <FiCreditCard className="mr-2" />
              <a href="#" className="hover:text-gray-300">
                Billing
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <FiSettings className="mr-2" />
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
