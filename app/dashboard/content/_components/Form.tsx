import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea"; // Importing Shadcn UI Textarea
import { Button } from "@/components/ui/button"; // Importing Shadcn UI Button
import { Input } from "@/components/ui/input";

const Form = ({ post, userInput }: any) => {
  // State to manage input values
  const [formData, setFormData] = useState<any>({});

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userInput(formData);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="w-full dark:bg-yellow-300 max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden backdrop-blur-lg bg-opacity-30 border border-gray-200">
      <div className="flex items-center justify-center min-h-28 bg-gradient-to-r from-blue-500 to-blue-300">
        {" "}
        {/* Adjusted height */}
        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg">
          {" "}
          {/* Adjusted size */}
          <span className="text-5xl text-blue-500">{post.icons}</span>{" "}
          {/* Adjusted icon size */}
        </div>
      </div>
      <div className="p-4 text-center">
        {" "}
        {/* Reduced padding */}
        <h2 className="text-3xl font-bold text-blue-700">{post.name}</h2>{" "}
        {/* Adjusted font size */}
        <p className="text-gray-600 mt-2">{post.description}</p>
        <p className="text-gray-500 mt-1">{post.category}</p>
        <p className="text-gray-500 mt-1 italic">{post.aiPrompts}</p>
        <form onSubmit={handleSubmit} className="mt-4">
          {" "}
          {/* Adjusted margin */}
          {post.form.map((field: any) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <Textarea
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 p-4 placeholder-gray-400 bg-white/70 backdrop-blur-md"
                  rows={4}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              ) : (
                <Input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 p-4 placeholder-gray-400 bg-white/70 backdrop-blur-md"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
          <Button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white rounded-lg py-3 transition duration-200 transform hover:bg-blue-700 hover:scale-105 shadow-lg"
          >
            Generate
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
