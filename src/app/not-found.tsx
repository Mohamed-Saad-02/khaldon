import Container from "@/components/ui/Container";
import Link from "next/link";

import NotFoundImage from "@/assets/images/notfound.webp";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-[100px] max-md:py-[50px]">
      <div className="flex-1">
        <Container className="space-y-3 text-center md:space-y-5">
          <h1 className="text-title text-3xl font-semibold md:text-[68px]">
            Page not found
          </h1>
          <p className="text-[#808080] md:text-lg">
            Uh oh, we can&apos;t seem to find the page you&apos;re looking
            for.{" "}
          </p>
        </Container>

        <div className="mt-8 w-full space-y-[60px]">
          <Button asChild className="mx-auto w-fit px-8">
            <Link href="/">Back To Home</Link>
          </Button>

          <Image
            src={NotFoundImage}
            alt="Not Found Image"
            className="w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
