"use client";
import React, { useState } from "react";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { db } from "@/utils/dbconnect";
import { aiOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm"; // Ensure eq is imported for equality checks

interface UnlockPremiumProps {
  onUnlockPremium: (status: string) => void; // Callback to notify parent of premium status
}

const UnlockPremiumContent = ({ onUnlockPremium }: UnlockPremiumProps) => {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);

  const updateIsPremium = async (userEmail: string) => {
    try {
      const re = await db
        .update(aiOutput)
        .set({ isPremium: "yes" }) // Set isPremium to 'yes'
        .where(eq(aiOutput.createdBy, userEmail)); // Use the eq function for the condition
      console.log("isPremium updated to 'yes'!", re);
    } catch (error) {
      console.error("Error updating isPremium:", error);
    }
  };

  const handleUnlock = async (option: any) => {
    setError("");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    setTimeout(async () => {
      clearInterval(interval);

      if (option === "youtube") {
        window.open("https://www.youtube.com/channel/UCxxxxxxxx", "_blank");
        await updateIsPremium(
          user?.primaryEmailAddress?.emailAddress || "Unknown"
        ); // Call the update function
      } else if (option === "github") {
        window.open("https://github.com/yourusername/yourrepo", "_blank");
        await updateIsPremium(
          user?.primaryEmailAddress?.emailAddress || "Unknown"
        ); // Call the update function
      } else {
        setError("An error occurred. Please try again.");
      }
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
          🚀 Unlock Premium Content for Free! 🎉
        </h1>
        <p className="text-xl text-center mb-8 text-gray-700">
          Support us and gain access to exclusive content with just one click!
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
          <UnlockOption
            icon={<FaYoutube className="text-red-600" />}
            title="Subscribe to YouTube"
            description="Get the latest tutorials and tech insights!"
            buttonText="Subscribe Now"
            onClick={() => handleUnlock("youtube")}
          />
          <UnlockOption
            icon={<FaGithub className="text-gray-800" />}
            title="Star GitHub Repo"
            description="Support our open-source projects!"
            buttonText="Star My Repo"
            onClick={() => handleUnlock("github")}
          />
        </div>

        {progress > 0 && progress < 100 && (
          <div className="mt-8">
            <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-indigo-700 font-semibold">
              Unlocking... {progress}%
            </p>
          </div>
        )}

        {progress === 100 && premiumUnlocked && (
          <div className="mt-8 text-center text-green-600 font-semibold">
            <IoMdUnlock className="inline-block mr-2 text-2xl" />
            Content unlocked! Enjoy your premium access.
          </div>
        )}

        {error && (
          <div className="mt-8 text-center text-red-600 font-semibold border border-red-300 rounded p-3">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

const UnlockOption = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}: any) => (
  <div className="flex flex-col items-center text-center w-full md:w-64">
    <div className="text-5xl mb-4">{icon}</div>
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="mb-4 text-gray-600">{description}</p>
    <button
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  </div>
);

export default UnlockPremiumContent;
