import React, { useEffect, useState } from 'react';
import data from "@/app/(data)/Data";
import Card from './Card';
interface Template {
  id: number;                     // Unique identifier for the template
  name: string;                   // Name of the template
  description: string;            // Description of the template
  category: string;               // Category of the template
  icons: string;                  // Icons associated with the template
  aiPrompts: string;              // AI prompts related to the template
  image: string;                  // URL of the template image
  slug: string;                   // URL-friendly identifier for the template
}
const Main = ({ SearchInput }: any) => {
  const [dataStore,setdataStore] = useState(data);
  useEffect(() => {
    if(SearchInput){
      const filteredData = data.filter((item:Template) => item.name.toLowerCase().includes(SearchInput.toLowerCase()));
      setdataStore(filteredData);
    } else {
      setdataStore(data);
    }
  }, [SearchInput]);

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Explore Our Collection</h1>
        <p className="text-xl text-gray-600">Discover AI prompts, tools, and more with just a click.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3   h-screen">
        {dataStore.map((item:Template) => (
          <div key={item.id} className="aspect-square bg-transparent bg-opacity-2 backdrop-opacity-1  border border-white  max-w-sm shadow-md rounded-lg p-1    ">
            <Card
              name={item.name}
              description={item.description}
              category={item.category}
              icons={item.icons}
              aiPrompts={item.aiPrompts}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
