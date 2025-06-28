"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import NotFoundImage from "@/assets/images/notfound.webp";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-[100px] max-md:py-[50px]">
      <div className="flex-1">
        <Container className="space-y-3 text-center md:space-y-5">
          <h1 className="text-title text-3xl font-semibold md:text-[68px]">
            Something went wrong!
          </h1>
          <p className="text-[#808080] md:text-lg">
            An unexpected error occurred. Please try again or return to the home
            page.
          </p>
        </Container>

        <div className="mt-8 w-full space-y-[60px]">
          <Button asChild className="mx-auto w-fit px-8">
            <Link href="/">Back To Home</Link>
          </Button>

          <Image src={NotFoundImage} alt="Error" className="w-full" priority />
        </div>
      </div>
    </div>
  );
}
