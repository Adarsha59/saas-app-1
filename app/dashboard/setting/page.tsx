import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <main className="flex-1 overflow-y-auto pt-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <UserProfile />
    </main>
  );
};

export default page;
