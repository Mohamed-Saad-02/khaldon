import CalculatorIcon from "@/assets/icons/calculator.svg";
import StarIcon from "@/assets/icons/star.svg";
import LandingImage from "@/assets/images/landing.webp";
import { routes } from "@/routes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Section from "../ui/Section";
import TryNow from "../buttons/TryNow";

const IconBadge = ({ src, alt }: { src: StaticImport; alt: string }) => (
  <span className="bg-primary/15 inline-flex h-12 w-12 items-center justify-center rounded-full align-middle md:h-20 md:w-[116px]">
    <Image src={src} alt={alt} width={36} height={40} className="max-md:w-6" />
  </span>
);

function HeroSection() {
  return (
    <Section className="space-y-5" id={routes.whoWeAre}>
      <h1 className="text-title space-x-2 text-[32px] font-semibold md:text-[48px] lg:text-[68px]">
        <span>Predict Land Prices</span>
        <span className="max-sm:hidden">
          <IconBadge src={CalculatorIcon} alt="Calculator Icon" />
        </span>
        <span>per Meter with AI</span>
        <IconBadge src={StarIcon} alt="Star Icon" />
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm md:basis-1/2 md:text-base lg:text-lg">
          Discover accurate, data-driven land price estimates in seconds. Just
          select a location and year — we’ll handle the rest.
        </p>

        <TryNow />
      </div>

      <Image
        src={LandingImage}
        alt="Landing Image"
        height={610}
        width={610}
        className="mx-auto w-full rounded-4xl object-cover sm:mt-14 md:h-[610px]"
        priority
      />
    </Section>
  );
}

export default HeroSection;
