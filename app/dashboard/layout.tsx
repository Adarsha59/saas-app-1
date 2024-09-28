"use client";
import React, { useState } from "react";
import NavBar from "./_components/NavBar";
import SideBar from "./_components/SideBar";
import { Rowdies } from "next/font/google";
import { TotalUsageContext } from "../(context)/TotalCredit";

// Use the correct variable for the font you imported
const londrinaOutline = Rowdies({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [totalUsage, settotalUsage] = useState<Number>(0);
  return (
    <TotalUsageContext.Provider value={{ totalUsage, settotalUsage }}>
      <div
        className={`flex ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } min-h-screen`}
      >
        {/* Sidebar */}
        <div
          className={`hidden lg:block w-64 bg-gray-800 text-white p-4 ${londrinaOutline.className}`}
        >
          <SideBar toggleDarkMode={toggleDarkMode} sidebarOpen={sidebarOpen} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <NavBar toggleSidebar={toggleSidebar} />

          <main
            className={`flex-1 bg-gray-100 p-6 ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            {children}
          </main>

          <button
            className="lg:hidden fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? "Close Menu" : ""}
          </button>
          <SideBar toggleDarkMode={toggleDarkMode} sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </TotalUsageContext.Provider>
  );
};

export default Layout;
