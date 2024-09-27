"use client";
import React from "react";
import Form from "../_components/Form";
import Output from "../_components/Output";
import data from "@/app/(data)/Data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
interface PROPS {
  params: {
    slug: string;
  };
}
const page = (props: PROPS) => {
  const post = data.find((p) => p.slug === props.params.slug);
  return (
    <>
      <main className="overflow-y-auto pt-16 ">
        <Link className="px-4" href="/dashboard">
          <Button className=" mb-8 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            <BiLeftArrowAlt />
            Back
          </Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3  mx-auto">
          <div className="md:col-span-1">
            <Form
              post={post}
              userInput={(v: any) => console.log("yeta ko ho yo", v)}
            />
          </div>
          <div className="md:col-span-2">
            <Output />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
