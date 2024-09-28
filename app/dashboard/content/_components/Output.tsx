import React, { useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css"; // Importing the styles for the editor
import { Editor } from "@toast-ui/react-editor"; // Importing the Toast UI Editor
import { Button } from "@/components/ui/button"; // Importing Shadcn UI Button
import { CopyIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";

interface PROPS {
  aidata: string;
}

const Output = ({ aidata }: PROPS) => {
  const editorRef = useRef<any>(null); // Create a ref for the editor

  // Set the aidata into the editor when it changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(aidata); // Set the content in Markdown format
    }
  }, [aidata]);

  // Function to copy content to clipboard
  const copyToClipboard = () => {
    // Get the editor content (HTML or Markdown)
    // or use `getHTML()` for HTML output

    // Copy the content to the clipboard
    navigator.clipboard
      .writeText(aidata)
      .then(() => {
        // Show a success message using a library like react-toastify
        toast.success("Editor content copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy content: ", err);
        toast.error("Failed to copy content to clipboard.");
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden  bg-opacity-30 border border-gray-200 p-4">
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
        initialValue={aidata || "No AI output available"}
        placeholder="AI output will appear here..."
        width="100%"
        minHeight="300px"
        height="600px"
        initialEditType="wysiwyg"
        // initialEditType="markdown"
        useCommandShortcut={true}
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
