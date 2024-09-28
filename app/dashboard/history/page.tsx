"use client";
import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbconnect"; // Ensure this is your database connection utility
import { aiOutput } from "@/utils/Schema"; // Your schema for AI outputs
import { eq } from "drizzle-orm"; // For querying the database

type AiOutputData = {
  id: number;
  formData: string;
  aiResponse: string | null;
  slug: string;
  createdBy: string;
  createdAt: string | null;
  isPremium: string | null;
};

const HistoryPage = () => {
  const { user } = useUser();
  const [aiData, setAiData] = useState<AiOutputData[]>([]); // State to store fetched AI data

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      try {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) {
          console.error("User email is not defined.");
          return; // Exit if email is undefined
        }

        const data = await db
          .select()
          .from(aiOutput)
          .where(eq(aiOutput.createdBy, email));

        setAiData(data);
        console.log("object updated", data);
      } catch (error) {
        console.error("Error fetching premium status:", error);
      }
    };

    fetchPremiumStatus();
  }, [user]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="flex-1 overflow-y-auto pt-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        AI Response History
      </h1>
      <div className="max-w-2xl mx-auto">
        {aiData.length > 0 ? (
          aiData.map((item) => (
            <div
              key={item.id}
              className="mb-6 p-4 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">You:</h2>
                <p className="text-gray-700">{item.formData}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">AI:</h2>
                <div className="flex items-start">
                  <p className="text-gray-700 flex-grow mr-4">
                    {item.aiResponse}
                  </p>
                  <button
                    onClick={() => copyToClipboard(item.aiResponse || "")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out"
                  >
                    <FiCopy className="mr-2" />
                    Copy
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-700">
                  Slug: {item.slug}
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-700">
                  Created At: {new Date(item.createdAt || "").toLocaleString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No AI data found.</p>
        )}
      </div>
    </main>
  );
};

export default HistoryPage;
