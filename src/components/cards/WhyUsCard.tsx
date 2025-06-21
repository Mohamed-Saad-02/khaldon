import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type CardType = {
  title: string;
  description: string;
  src: StaticImport;
  alt: string;
};

const WhyUsCard = ({ title, description, src, alt }: CardType) => (
  <div className="hover:bg-secondary space-y-2 rounded-[20px] border border-[#EBECF0] bg-[#7B9B100D] p-6 transition-colors sm:space-y-3">
    <Image src={src} alt={alt} width={22} height={22} />
    <h3 className="text-title text-xl font-medium sm:text-2xl">{title}</h3>
    <p className="text-sm sm:mt-4 sm:text-base">{description}</p>
  </div>
);

export default WhyUsCard;
