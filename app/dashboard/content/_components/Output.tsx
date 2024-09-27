import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css"; // Importing the styles for the editor
import { Editor } from "@toast-ui/react-editor"; // Importing the Toast UI Editor
import { Button } from "@/components/ui/button"; // Importing Shadcn UI Button
import { CopyIcon } from "@radix-ui/react-icons";
// Import your button component from shadcn

const Output = () => {
  const editorRef: any = useRef(null); // Create a ref for the editor

  // Function to log the current content of the editor
  const logContent = () => {
    const content = editorRef.current.getInstance().getMarkdown(); // Get the content in markdown format
    console.log("Editor Content:", content); // Log the content to the console
  };

  // Function to copy content to clipboard
  const copyToClipboard = async () => {
    const content = editorRef.current.getInstance().getMarkdown(); // Get the content in markdown format
    await navigator.clipboard.writeText(content); // Copy content to clipboard
    alert("Content copied to clipboard!"); // Show an alert or any other notification
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden backdrop-blur-lg bg-opacity-30 border border-gray-200 p-4">
      <div className="flex flex-row justify-between items-center h-full px-4 mb-5">
        <h2 className="text-2xl font-bold text-blue-700 text-left">
          AI GENERATED Output
        </h2>
        <Button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          <CopyIcon />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef} // Set the ref to the editor
        previewStyle="vertical"
        initialValue="# Hello, I'm an AI generated output!"
        placeholder="Start writing your AI prompt here..."
        width="100%"
        minHeight="300px"
        maxH
        height="600px"
        initialEditType="adarsha"
        useCommandShortcut={true}
        onChange={logContent} // Log content on change
      />
      <div className="text-center mt-4">
        <Button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default Output;
