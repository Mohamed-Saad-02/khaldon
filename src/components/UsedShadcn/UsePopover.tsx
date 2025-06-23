"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UsePopoverProps } from "@/types";

function UsePopover({
  trigger,
  content,
  popover,
  popoverTrigger,
  popoverContent,
}: UsePopoverProps) {
  return (
    <Popover {...popover}>
      <PopoverTrigger {...popoverTrigger}>{trigger}</PopoverTrigger>
      <PopoverContent {...popoverContent}>{content}</PopoverContent>
    </Popover>
  );
}

export default UsePopover;
