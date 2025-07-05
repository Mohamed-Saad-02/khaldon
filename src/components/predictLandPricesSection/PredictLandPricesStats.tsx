import { cn, formattedPrice } from "@/lib";
import StateSkelton from "../skeleton/predictLandPricesSection/StateSkelton";
import { StatType } from "@/types";

interface StatProps {
  stat: {
    title: string;
    price: string;
    description: string;
    index: number;
  };
  isLoading: boolean;
}

function Stat({ stat, isLoading }: StatProps) {
  const { title, price, description, index } = stat || {};

  if (isLoading) return <StateSkelton state={stat} index={index} />;

  return (
    <div
      className={cn(
        "bg-primary/10 grid place-items-center space-y-3 rounded-2xl px-8 py-12 text-center xl:px-21 xl:py-14",
      )}
    >
      <div className="text-default text-lg font-bold">{title}</div>
      {index === 1 ? (
        <div className="bg-primary/20 h-4 w-full overflow-hidden rounded-full">
          <div
            style={{ width: `${Number(price)}%` }}
            className="bg-primary h-full rounded-full"
          />
        </div>
      ) : (
        <div
          className={cn(
            "text-2xl font-bold text-[#1F2937]",
            index === 0 && "text-primary text-4xl font-extrabold",
          )}
        >
          {price}
        </div>
      )}
      <p className="font-bold text-[#757575]">{description}</p>
    </div>
  );
}

function PredictLandPricesStats({
  stat,
  isLoading,
}: {
  stat: StatType;
  isLoading: boolean;
}) {
  const currentData = [
    {
      title: "Predicted Price",
      description: "per square meter",
      price: isLoading ? "" : formattedPrice(stat.predictPrice),
      index: 0,
    },
    {
      title: "Confidence Level",
      description: `${Math.round(stat.confidenceLevel) * 100}% confidence`,
      price: isLoading ? "" : String(stat.confidenceLevel * 100),
      index: 1,
    },
    {
      title: "Price Range",
      description: "estimated range",
      price: isLoading
        ? ""
        : `${formattedPrice(stat.priceRange[0])} - ${formattedPrice(stat.priceRange[1])}`,
      index: 2,
    },
  ];

  if (!isLoading && !stat) return;

  return (
    <div className="shadow-secondary grid gap-x-8 gap-y-4 rounded-4xl border border-[#D9D9D980] p-8 md:grid-cols-2 lg:grid-cols-3">
      {currentData.map((stat, index) => (
        <Stat key={index} stat={stat} isLoading={isLoading} />
      ))}
    </div>
  );
}

export default PredictLandPricesStats;
