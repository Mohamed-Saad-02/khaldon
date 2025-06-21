import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto px-6 md:px-16 xl:px-[160px]", className)}>
      {children}
    </div>
  );
}

export default Container;
