import { cn } from "@/lib";
import Image, { ImageProps } from "next/image";

interface LogoType extends Omit<ImageProps, "src" | "alt"> {
  white?: boolean;
  priority?: boolean;
}

function Logo({
  white = false,
  priority = true,
  width = 150,
  height = 48,
  className,
  ...props
}: LogoType) {
  return (
    <Image
      src={white ? "/logoWhite.svg" : "/logo.svg"}
      alt="Logo of page"
      width={width}
      height={height}
      className={cn("w-[120px] md:h-[48px] md:w-[150px]", className)}
      priority={priority}
      {...props}
    />
  );
}

export default Logo;
