import React from 'react';
import Search from './_components/Search';
import MainContent from './_components/Main';

const page = () => {
  return (
    <main className="flex-1 overflow-y-auto pt-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
        <Search/>
        <MainContent/>
   </main>
  );
}

export default page;
