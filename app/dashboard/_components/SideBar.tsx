"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaHistory } from "react-icons/fa";
import { FiHome, FiInfo, FiSettings, FiDollarSign } from "react-icons/fi";
import TotalUsage from "./TotalUsage";
interface SidebarProps {
  toggleDarkMode: () => void;
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleDarkMode, sidebarOpen }) => {
  const navItems = [
    { icon: FiHome, text: "Home", path: "/dashboard" },
    { icon: FiInfo, text: "About", path: "/dashboard/about" },
    { icon: FaHistory, text: "History", path: "/dashboard/history" },
    { icon: FiSettings, text: "Settings", path: "/dashboard/setting" },
    { icon: FiDollarSign, text: "Pricing", path: "/dashboard/bill" },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 bg-white dark:bg-gray-800 shadow-lg`}
    >
      <div className="flex flex-col h-full px-4 py-8">
        <div className="flex justify-center mb-8 ">
          <Image src="/logo.svg" alt="logo " width={80} height={80}></Image>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-150 ease-in-out
                    ${path == item.path && `bg-lime-300 text-slate-50`}
                    `}
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <br />
          <TotalUsage />
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
