import React, { useEffect } from 'react';
import {push} from "next/navigation"
import Link from 'next/link';
interface CardProps {
  name: string;
  description: string;
  category: string;
  icons: string; // You might want to use an SVG or an icon library here for better visuals
  aiPrompts: string;
  slug: string;
}
const Card = ({ name, description, category, icons, aiPrompts,slug }: CardProps) => {
  


  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl m-4">
      {/* Icon Section */}
      <div className="flex justify-center items-center h-36 bg-gray-100 rounded-t-lg p-4">
        <span className="text-6xl text-blue-500">{icons}</span>
      </div>

      {/* Content Section */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl text-gray-800 mb-2 text-center">{name}</h2>
        <p className="text-gray-600 text-base mb-4 text-center">{description}</p>

        {/* AI Prompts */}
        <div className="text-gray-500 text-sm mb-4 text-center">
          <p><strong>AI Prompts:</strong> {aiPrompts}</p>
        </div>
        {/* Category Button */}
        <div className="flex justify-center">
<Link href={`dashboard/${slug}`}><button  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            {category}
          </button></Link>

          
        </div>
      </div>
    </div>
  );
};

export default Card;
