import { cn } from "@/lib";
import { ComponentProps } from "react";

function Section({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("py-5 sm:py-[50px] lg:py-[100px]", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
