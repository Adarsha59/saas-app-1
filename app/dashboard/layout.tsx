import React from 'react';
import NavBar from './_components/NavBar';
import SideBar from './_components/SideBar';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-4">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-gray-100 p-6">
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
    