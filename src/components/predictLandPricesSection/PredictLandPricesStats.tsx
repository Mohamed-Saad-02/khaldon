import { cn } from "@/lib";
import StateSkelton from "../skeleton/predictLandPricesSection/StateSkelton";
import { StatType } from "@/types";

interface StatProps {
  stat: StatType;
  index: number;
  isLoading: boolean;
}

function Stat({ stat, index, isLoading }: StatProps) {
  const { title, price, description } = stat || {};

  if (isLoading) return <StateSkelton state={stat} index={index} />;

  return (
    <div
      className={cn(
        "bg-primary/10 grid place-items-center space-y-3 rounded-2xl px-21 py-8 text-center xl:py-14",
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
  stats,
  isLoading,
}: {
  stats: StatType[];
  isLoading: boolean;
}) {
  const currentData = isLoading
    ? [
        {
          title: "Predicted Price",
          description: "per square meter",
          price: "",
          index: 0,
        },
        {
          title: "Confidence Level",
          description: "",
          price: "",
          index: 1,
        },
        {
          title: "Price Range",
          description: "estimated range",
          price: "",
          index: 2,
        },
      ]
    : stats;

  if (!isLoading && !stats.length) return;

  return (
    <div className="shadow-secondary grid grid-cols-3 gap-x-8 gap-y-4 rounded-4xl border border-[#D9D9D980] p-8">
      {currentData.map((stat, index) => (
        <Stat
          key={index}
          stat={stat}
          index={index}
          isLoading={isLoading || !stats.length}
        />
      ))}
    </div>
  );
}

export default PredictLandPricesStats;
