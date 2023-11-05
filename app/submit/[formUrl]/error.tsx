"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error;
};

export default function ErrorPage({ error }: ErrorPageProps) {
  useEffect(() => console.error(error), [error]);
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h2 className="text-destructive text-4xl">Something went wrong!</h2>
      <Button asChild>
        <Link href={"/"}>Go back to home</Link>
      </Button>
    </div>
  );
}
