"use client";
import { db } from "@/utils/dbconnect";
import { aiOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalCredit";

const TotalUsage = () => {
  const totalCredits = 8000; // This can be dynamic based on your plan
  const { user } = useUser();
  const { totalUsage, settotalUsage } = useContext(TotalUsageContext);
  const [usedCredits, setUsedCredits] = useState(0); // Initialize usedCredits with 0
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsageData = async () => {
      if (user && user.primaryEmailAddress?.emailAddress) {
        try {
          // Log user email to ensure it's available
          //   console.log("User email:", user.primaryEmailAddress.emailAddress);

          const data = await db
            .select()
            .from(aiOutput)
            .where(
              eq(aiOutput.createdBy, user.primaryEmailAddress.emailAddress)
            );

          // Log the fetched data to check if it's correct
          //   console.log("Fetched data:", data);

          const totalUsed = data.reduce((total, response) => {
            if (response.aiResponse) {
              const wordCount = response.aiResponse.split(/\s+/).length;
              return total + wordCount;
            }
            return total;
          }, 0);

          //   console.log("Total used credits (word count):", totalUsed);
          setUsedCredits(totalUsed);
          settotalUsage(totalUsed);
        } catch (error) {
          console.error("Error fetching usage data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUsageData();
  }, [user]);

  const usagePercentage = (usedCredits / totalCredits) * 100;

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
        Credit Usage
      </h1>
      {loading ? (
        <p className="mt-2 text-gray-500 dark:text-gray-400">Loading...</p>
      ) : (
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {usedCredits}/{totalCredits} Credits Used
        </p>
      )}

      <div className="relative pt-2 mt-4">
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
          <div
            style={{ width: `${usagePercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-600"
          ></div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {usagePercentage.toFixed(1)}% Used
        </p>
      </div>

      {/* Upgrade Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Need More Credits?
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Upgrade your plan to get more usage.
        </p>
        <button className="mt-4 px-6 py-3 text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 rounded-full transition duration-300 transform hover:scale-105">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default TotalUsage;
