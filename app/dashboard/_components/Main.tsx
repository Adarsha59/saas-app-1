"use client";
import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import Card from "./Card";

interface Template {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface MainContentProps {
  templates?: Template[]; // Make this optional
}

const MainContent: React.FC<MainContentProps> = ({ templates = [] }) => { // Provide a default empty array
  const [newTemplate, setNewTemplate] = useState<Template>({
    id: 0,
    name: "hello world",
    description: "hfsifsifsnfisghs",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [templateList, setTemplateList] = useState<Template[]>([
    {
      id: 1,
      name: "Template One",
      description: "This is a description for Template One.",
      image: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s", // Placeholder image
    },
    {
      id: 2,
      name: "Template Two",
      description: "This is a description for Template Two.",
      image: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s", // Placeholder image
    },
    {
      id: 3,
      name: "Template Three",
      description: "This is a description for Template Three.",
      image: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s", // Placeholder image
    },
    {
      id: 4,
      name: "Template Four",
      description: "This is a description for Template Four.",
      image: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s", // Placeholder image
    },
    {
      id: 5,
      name: "Template Five",
      description: "This is a description for Template Five.",
      image: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzxYUFM4iotg3_s_k5TrSfw6ULChkv_8_rQ&s", // Placeholder image
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTemplate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTemplate = () => {
    const newId = templateList.length ? templateList[templateList.length - 1].id + 1 : 1; // Increment ID
    const templateToAdd = { ...newTemplate, id: newId };
    setTemplateList((prev) => [...prev, templateToAdd]);
    setNewTemplate({ id: 0, name: "", description: "", image: "" });
    setShowForm(false); // Close the form after adding
  };

  return (
     <>

        {/* Browse AI Templates Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Browse AI Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateList.length > 0 ? (
              templateList.map((template) => (
                <Card key={template.id} template={template} />
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300">No templates available.</p>
            )}
          </div>
        </section>

        {/* Add New Template Button */}
        <button 
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => setShowForm((prev) => !prev)} // Toggle form visibility
        >
          <FiPlus className="w-6 h-6" />
        </button>

        {/* Add Template Form */}
        {showForm && (
          <div className="fixed bottom-20 right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Add New Template</h3>
            <input
              type="text"
              name="name"
              value={newTemplate.name}
              placeholder="Template Name"
              onChange={handleInputChange}
              className="w-full px-4 py-2 mb-2 border rounded-lg"
            />
            <input
              type="text"
              name="description"
              value={newTemplate.description}
              placeholder="Template Description"
              onChange={handleInputChange}
              className="w-full px-4 py-2 mb-2 border rounded-lg"
            />
            <input
              type="text"
              name="image"
              value={newTemplate.image}
              placeholder="Image URL"
              onChange={handleInputChange}
              className="w-full px-4 py-2 mb-2 border rounded-lg"
            />
            <button
              onClick={handleAddTemplate}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-150 ease-in-out"
            >
              Add Template
            </button>
          </div>
          
        )}
     </>

  );
};

export default MainContent;
