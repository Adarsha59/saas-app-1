import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea"; // Importing Shadcn UI Textarea
import { Button } from "@/components/ui/button"; // Importing Shadcn UI Button
import { Input } from "@/components/ui/input";
import { LoaderPinwheel } from "lucide-react";
import toast from "react-hot-toast";
import { Post, FormField } from "@/app/dashboard/content/_components/types"; // Importing types

// Define a type for form data based on the form fields
type FormData = {
  [key: string]: string | number; // Adjust this based on your actual field types
};

interface FormProps {
  post: Post;
  userInput: (data: FormData) => void; // Use the defined FormData type
  loading: boolean;
}

const Form: React.FC<FormProps> = ({ post, userInput, loading }) => {
  // State to manage input values
  const [formData, setFormData] = useState<FormData>({});

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userInput(formData);
    toast.success("Form submitted successfully!"); // Optional: add toast notification
  };

  return (
    <div className="w-full dark:bg-yellow-300 max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="flex items-center justify-center min-h-28 bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg">
          <span className="text-5xl text-blue-500">{post.icons}</span>
        </div>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700">{post.name}</h2>
        <p className="text-gray-600 mt-2">{post.description}</p>
        <p className="text-gray-500 mt-1">{post.category}</p>
        <p className="text-gray-500 mt-1 italic">{post.aiPrompts}</p>
        <form onSubmit={handleSubmit} className="mt-4">
          {post.form.map((field: FormField) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              {field.field === "textarea" ? (
                <Textarea
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 p-4 placeholder-gray-400 bg-white/70"
                  rows={4}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              ) : (
                <Input
                  type={field.field}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 p-4 placeholder-gray-400 bg-white/70"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-blue-600 text-white rounded-lg py-3 transition duration-200 transform hover:bg-blue-700 hover:scale-105 shadow-lg"
          >
            {loading && (
              <div className="flex justify-center items-center space-x-2">
                <LoaderPinwheel className="animate-spin h-6 w-6 text-white" />
                <span>Generating...</span>
              </div>
            )}
            {!loading && <span>Generate</span>}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
