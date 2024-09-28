import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>hey</h1>
      <Link href="/dashboard">
        <Button>hey there </Button>
      </Link>
    </>
  );
}
