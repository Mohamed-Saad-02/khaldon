"use client";

import { AnimatePresence, motion } from "motion/react";
import { ComponentProps, useState } from "react";
import { Button } from "../ui/Button";

import StarsEffect from "@/anim/StarsEffect";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib";

interface ButtonHoverProps extends ComponentProps<"button"> {
  disabledMobile?: boolean;
}

function ButtonHover({
  className,
  disabledMobile = false,
  ...props
}: ButtonHoverProps) {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Button
      className={cn("relative", className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {disabledMobile && isMobile ? null : (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 cursor-pointer">
          <AnimatePresence>
            {isHover && (
              <motion.div
                key="hover-stars"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -55 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-2"
              >
                <StarsEffect />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {props.children}
    </Button>
  );
}

export default ButtonHover;
