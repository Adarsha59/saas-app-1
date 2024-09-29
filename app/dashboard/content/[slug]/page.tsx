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

// Define the interface for your props
interface PROPS {
  params: {
    slug: string;
  };
}

interface FormField {
  label: string;
  field: string;
  name: string;
  required: boolean;
}

interface Form {
  id: number;
  name: string;
  description: string;
  category: string;
  icons: string;
  aiPrompts: string;
  image: string;
  slug: string;
  form: FormField[];
}

// Define the expected structure of user input
interface UserInput {
  [key: string]: string | number | boolean; // Adjust based on the expected input structure
}

// Add the TotalUsageContextType interface
interface TotalUsageContextType {
  totalUsage: number;
}

const Page = (props: PROPS) => {
  const router = useRouter();
  const { user } = useUser();
  const post: Form | undefined = data.find((p) => p.slug === props.params.slug);

  // Define state variables before using them in conditions
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<string>("");
  const { totalUsage } = useContext(TotalUsageContext) as TotalUsageContextType; // Assert context type
  const [isPremium, setIsPremium] = useState<string>("no");

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      if (!user) return;

      try {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) {
          console.error("User email is not defined.");
          return;
        }

        const premiumStatus = await db
          .select()
          .from(aiOutput)
          .where(eq(aiOutput.createdBy, email));

        if (premiumStatus.length > 0) {
          setIsPremium(premiumStatus[0].isPremium || "no");
        } else {
          setIsPremium("no");
        }
      } catch (error) {
        console.error("Error fetching premium status:", error);
        setIsPremium("no");
      }
    };

    fetchPremiumStatus();
  }, [user]);

  // Usage limit based on premium status
  const usageLimit = isPremium === "yes" ? 80000 : 8000;

  const GenerateAIContents = async (userInput: UserInput) => {
    if (totalUsage >= usageLimit) {
      console.log("Out of credits at", totalUsage);
      router.push("/dashboard/bill");
      return;
    }

    setLoading(true);
    const initialPrompt = post?.aiPrompts || "";
    const finalPrompt = JSON.stringify(userInput) + "," + initialPrompt;
    const postt = post?.slug || "";

    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result?.response.text();
      setAiData(responseText);
      toast.success("AI generated successfully");

      if (responseText) {
        await saveData(userInput, postt, responseText);
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
      toast.error("Error generating AI content");
    } finally {
      setLoading(false);
    }
  };

  const saveData = async (
    formData: UserInput,
    slug: string,
    aiData: string
  ) => {
    try {
      await db.insert(aiOutput).values({
        formData: JSON.stringify(formData), // Ensure formData is serialized as a string
        aiResponse: aiData,
        slug: slug,
        createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown",
        createdAt: new Date().toISOString(),
        isPremium: isPremium,
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Early return if post is not found
  if (!post) {
    return <div>Post not found.</div>;
  }

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
              userInput={(v: UserInput) => GenerateAIContents(v)}
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
