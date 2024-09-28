"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const { user }: any = useUser();
  // const user: any = "ram";

  const [loading, setloading] = useState(false);
  const [auth, setauth] = useState(null);
  useEffect(() => {
    setauth(user);
    setloading(true);
    console.log("hey this is ", user);
  }, [user]);

  return (
    <>
      <main className="flex mx-auto p-10 justify-center align-middle ">
        {loading ? (
          <div>
            {auth ? (
              <>
                <Link href="/dashboard">
                  <Button>hello {auth} wanna go to dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button>hello Guest wanna go to dashboard</Button>
                </Link>
              </>
            )}
          </div>
        ) : (
          <>loading</>
        )}
      </main>
    </>
  );
}
