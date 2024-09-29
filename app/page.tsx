"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs"; // Remove UserResource import
import Link from "next/link";
import { useEffect, useState } from "react";

// Define a type that reflects the user structure you need
interface AuthUser {
  firstName: string;
  // Add other properties you may need
}

export default function Home() {
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<AuthUser | null>(null); // Use your defined AuthUser type

  useEffect(() => {
    if (user) {
      setAuth({
        firstName: user.firstName || "", // Ensure to provide a fallback
        // Add other properties here if needed
      });
    }
    setLoading(false);
  }, [user]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-blue-500 to-purple-600">
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-white"></div> // Loading spinner
      ) : (
        <div className="text-center">
          <h1 className="text-5xl text-white font-bold mb-6">
            {auth
              ? `Welcome, ${auth.firstName}`
              : "AI-Powered Content Creation Tools"}
          </h1>

          <p className="text-lg text-white mb-8">
            Unlock the power of AI to generate high-quality content, improve
            your workflows, and boost creativity. Explore tools designed to
            simplify text generation, enhance productivity, and streamline your
            projects.
          </p>

          <Link href={auth ? "/dashboard" : "/sign-in"}>
            <Button className="transition-transform transform hover:scale-105 bg-white text-purple-600 font-semibold py-3 px-6 rounded shadow-lg">
              {auth ? "Go to Dashboard" : "Get Started"}
            </Button>
          </Link>
        </div>
      )}
    </main>
  );
}
