"use client";

import { ComponentProps, useState } from "react";
import { Button } from "../ui/Button";
import { AnimatePresence, motion } from "motion/react";
import StarHoverIcon from "@/assets/icons/starHover.svg";
import { cn } from "@/lib";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ButtonHoverProps extends ComponentProps<"button"> {
  disabledMobile?: boolean;
  containerClassName?: string;
  yAnimation?: number;
  onClick?: () => void;
}

const starDelays = [0.8, 0.6, 0.4]; // التأخيرات الخاصة بكل نجمة

function ButtonHover({
  containerClassName,
  className,
  disabledMobile = false,
  yAnimation = -55,
  onClick,
  ...props
}: ButtonHoverProps) {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={cn("relative", containerClassName)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      role="button"
      onClick={onClick}
    >
      {disabledMobile && isMobile ? null : (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 cursor-pointer">
          <AnimatePresence>
            {isHover && (
              <motion.div
                key="hover-stars"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: yAnimation }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-2"
              >
                {starDelays.map((delay, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.2, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0.2, scale: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay,
                    }}
                    className={cn({
                      "-ml-4": index === 1,
                      "ps-2": index === 2,
                    })}
                  >
                    <Image
                      src={StarHoverIcon}
                      alt="Star Hover Icon"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <Button className={cn(className, "w-full")} {...props} />
    </div>
  );
}

export default ButtonHover;
