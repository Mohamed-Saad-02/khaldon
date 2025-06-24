import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib";

type StatType = {
  title: string;
  description: string;
};

function StateSkelton({ state, index }: { state: StatType; index: number }) {
  const { title, description } = state || {};

  return (
    <div
      className={cn(
        "grid place-items-center space-y-3 rounded-2xl bg-[#5656561A] px-21 py-8 text-center xl:py-14",
        "shimmer-effect",
      )}
    >
      <div className="text-default text-lg font-bold">{title}</div>
      {index === 1 ? (
        <>
          <Skeleton className="h-4 w-full rounded-full bg-[#dedede]" />
          <div className="mx-auto flex w-1/2 items-center gap-2">
            <Skeleton className="h-2.5 flex-grow basis-1/4 rounded-full bg-[#757575]" />
            <Skeleton className="h-2.5 w-full rounded-full bg-[#757575]" />
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full items-center gap-2">
            <Skeleton className="h-4 flex-1 rounded-[8px] bg-[#e3e4e6]" />
            <Skeleton className="h-4 basis-1/12 rounded-[8px] bg-[#e3e4e6]" />
            <Skeleton className="h-4 flex-1 rounded-[8px] bg-[#e3e4e6]" />
          </div>
          <p className="font-bold text-[#757575]">{description}</p>
        </>
      )}
    </div>
  );
}

export default StateSkelton;
