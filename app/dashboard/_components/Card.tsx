"use client";
import React from "react";

interface CardProps {
  template: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ template }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
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
  );
};

export default Card;
