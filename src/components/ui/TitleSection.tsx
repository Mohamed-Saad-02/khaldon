import { cn } from "@/lib";

function TitleSection({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-x-5 gap-y-2 flex-wrap",
        className
      )}
    >
      <h2 className="md:text-5xl text-3xl font-medium text-title">{title}</h2>
      <p className="sm:text-lg text-sm md:basis-1/2">{description}</p>
    </div>
  );
}

export default TitleSection;
