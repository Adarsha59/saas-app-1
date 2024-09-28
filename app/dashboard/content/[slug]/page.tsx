"use client";
import React, { useContext, useEffect, useState } from "react";
import Form from "../_components/Form";
import Output from "../_components/Output";
import data from "@/app/(data)/Data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiLeftArrowAlt } from "react-icons/bi";
import { chatSession } from "@/utils/OpenAI";
import { db } from "@/utils/dbconnect";
import { useUser } from "@clerk/nextjs";
import { aiOutput } from "@/utils/Schema";
import { TotalUsageContext } from "@/app/(context)/TotalCredit";
import { useRouter } from "next/navigation";
import { eq } from "drizzle-orm";
import toast from "react-hot-toast";

interface PROPS {
  params: {
    slug: string;
  };
}

const Page = (props: PROPS) => {
  const router = useRouter();
  const { user } = useUser();
  const post = data.find((p) => p.slug === props.params.slug);
  // If post is not found, handle the error
  if (!post) {
    return <div>Post not found.</div>;
  }

  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<string>("");
  const { totalUsage } = useContext(TotalUsageContext); // totalUsage is fetched from context
  const [isPremium, setIsPremium] = useState<string>("no");

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      try {
        // Ensure user email is defined
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) {
          console.error("User email is not defined.");
          return; // Exit if email is undefined
        }

        const premiumStatus = await db
          .select()
          .from(aiOutput)
          .where(eq(aiOutput.createdBy, email)); // Use the email variable here

        // Log the fetched data to check if it's correct

        if (premiumStatus.length > 0) {
          console.log("object is updated", premiumStatus[0].isPremium);
          setIsPremium(premiumStatus[0].isPremium || "no"); // Set the isPremium state based on the fetched value
        } else {
          console.log("No premium status found.");
          setIsPremium("no"); // Set default value if no status found
        }
      } catch (error) {
        console.error("Error fetching premium status:", error);
        setIsPremium("no"); // Set default value in case of an error
      }
    };

    if (user) {
      fetchPremiumStatus();
    }
  }, [user]);

  const usageLimit = isPremium === "yes" ? 80000 : 8000;
  console.log("usahbsdak fj", usageLimit);
  console.log("yo hobaudv", totalUsage);
  const GenerateAIContents = async (userInput: any) => {
    // Redirect if total usage is exceeded
    if (totalUsage >= usageLimit) {
      console.log("Out of credits at", totalUsage);
      router.push("/dashboard/bill");
      return; // Ensure no further code executes
    }

    setLoading(true);

    const initialPrompt = post?.aiPrompts || ""; // Ensure aiPrompts is not undefined
    const finalPrompt = JSON.stringify(userInput) + "," + initialPrompt;

    try {
      // Send the final prompt to the AI for generation
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result?.response.text(); // Await the response text
      setAiData(responseText);
      toast.success("AI generated successfully");

      // Save data only if AI response exists
      if (responseText) {
        await saveData(userInput, post.slug, responseText);
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
      toast.error("Error generating AI content");
    } finally {
      setLoading(false);
    }
  };

  const saveData = async (formData: any, slug: string, aiData: string) => {
    try {
      await db.insert(aiOutput).values({
        formData: formData,
        aiResponse: aiData,
        slug: slug,
        createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown",
        createdAt: new Date().toISOString(),
        isPremium: "no", // Fetch user's premium status if available, otherwise default to 'no'
      });
      // console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <main className="overflow-y-auto pt-16">
        <Link className="px-4" href="/dashboard">
          <Button className="mb-8 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            <BiLeftArrowAlt />
            Back
          </Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
          <div className="md:col-span-1">
            <Form
              post={post}
              loading={loading}
              userInput={(v: any) => GenerateAIContents(v)}
            />
          </div>
          <div className="md:col-span-2">
            <Output aidata={aiData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
