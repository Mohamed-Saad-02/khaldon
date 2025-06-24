import StarHoverIcon from "@/assets/icons/starHover.svg";
import Image from "next/image";
import * as motion from "motion/react-client";
import { cn } from "@/lib";

const starDelays = [0.8, 0.6, 0.4];

function StarsEffect() {
  return starDelays.map((delay, index) => (
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
      <Image src={StarHoverIcon} alt="Star Hover Icon" width={20} height={20} />
    </motion.div>
  ));
}

export default StarsEffect;
