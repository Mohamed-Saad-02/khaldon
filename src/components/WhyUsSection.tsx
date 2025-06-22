import { routes } from "@/routes";
import Section from "./ui/Section";
import TitleSection from "./ui/TitleSection";

import DiagramIcon from "@/assets/icons/diagram.svg";
import DocumentDownload from "@/assets/icons/document-download.svg";
import MapIcon from "@/assets/icons/map.svg";
import TickCircleIcon from "@/assets/icons/tick-circle.svg";
import WhyUsImage from "@/assets/images/whyus.webp";

import Image from "next/image";
import WhyUsCard from "./cards/WhyUsCard";

const WHY_US_CARDS = [
  {
    title: "Accurate AI Estimates",
    description:
      "Visualize how land prices evolved in your selected area over time.",
    src: TickCircleIcon,
    alt: "Tick Circle Icon",
  },
  {
    title: "Historical Price Trends",
    description:
      "Start by identifying the core features of the product. These are the functional...",
    src: DiagramIcon,
    alt: "Diagram Icon",
  },
  // Image in index 2
  {
    isImage: true,
    src: WhyUsImage,
    alt: "Why Us Image",
  },
  {
    title: "Smart Location Analysis",
    description:
      "Understand nearby zones, hotpots, and average prices by region.",
    src: MapIcon,
    alt: "Map Icon",
  },
  {
    title: "Instant Reports",
    description: "Export your predictions as PDFs for investment planning.",
    src: DocumentDownload,
    alt: "Document Download Icon",
  },
];

function WhyUsSection() {
  return (
    <Section className="space-y-12" id={routes.whyUs}>
      <TitleSection
        title="Why Use This Tool?"
        description="AI-driven insights designed for land buyers, developers, and investors."
        className="border-b border-b-[#D6D6D680] pb-6"
      />

      <div className="grid grid-cols-1 grid-rows-2 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US_CARDS.map((card, index) =>
          card.isImage ? (
            <div key={index} className="sm:row-span-2">
              <Image
                src={card.src}
                alt={card.alt}
                className="h-full rounded-[20px] object-cover object-center"
              />
            </div>
          ) : (
            <WhyUsCard
              key={index}
              title={card.title!}
              description={card.description!}
              src={card.src}
              alt={card.alt}
            />
          ),
        )}
      </div>
    </Section>
  );
}

export default WhyUsSection;
