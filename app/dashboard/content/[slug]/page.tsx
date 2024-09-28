"use client";
import React, { useState } from "react";
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

interface PROPS {
  params: {
    slug: string;
  };
}

const Page = (props: PROPS) => {
  const { user } = useUser();
  const post = data.find((p) => p.slug === props.params.slug);

  // If post is not found, handle the error
  if (!post) {
    return <div>Post not found.</div>;
  }

  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<string>("");

  const GenerateAIContents = async (userInput: any) => {
    setLoading(true);
    const initialPrompt = post?.aiPrompts || ""; // Make sure aiPrompts is not undefined
    const finalPrompt = JSON.stringify(userInput) + "," + initialPrompt;

    try {
      // Send the final prompt to the AI for generation
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = result?.response.text();
      setAiData(responseText);

      // Save data only if AI response exists
      if (responseText) {
        await saveData(userInput, post.slug, responseText);
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    setLoading(false);
  };

  const saveData = async (formData: any, slug: string, aiData: string) => {
    try {
      const result = await db.insert(aiOutput).values({
        formData: formData,
        aiResponse: aiData,
        slug: slug,
        createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown",
        createdAt: new Date().toISOString(),
      });
      console.log("Data saved successfully!", result);
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
