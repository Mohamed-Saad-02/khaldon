"use client";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { UseSelectProps } from "@/types";

function UseSelect({
  items,
  value,
  onChange,
  className,
  icon,
}: UseSelectProps) {
  return (
    <div className="border-input flex h-12 items-center gap-2 rounded-[8px] border p-3 md:h-14">
      {icon && icon}
      <ShadcnSelect value={value} onValueChange={(v) => onChange(v as string)}>
        <SelectTrigger
          className={cn(
            "text-default min-h-12 border-none text-sm shadow-none md:text-base",
            className,
          )}
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    </div>
  );
}

export default UseSelect;
