"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const page = () => {
    const path= usePathname(); 
  return (
    <main className="flex-1 overflow-y-auto pt-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">



<div>
      this is hai ta 
      <button>{path}</button>
    </div>
    </main>

   
  );
}

export default page;
