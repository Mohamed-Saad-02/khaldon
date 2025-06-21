import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

function Button({
  className,
  asChild,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "bg-primary hover:bg-primary-hover flex h-14 items-center justify-center rounded-[99px] font-semibold text-white transition-colors duration-300",
        "disabled",
        "max-md:h-12 max-sm:h-10",
        className,
      )}
      {...props}
    />
  );
}

export { Button };
