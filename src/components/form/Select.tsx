"use client";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { ReactNode } from "react";

interface SelectProps {
  items: { value: string; label: string }[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  icon?: ReactNode;
}

function Select({ items, value, onChange, className, icon }: SelectProps) {
  return (
    <div className="border-input flex h-14 items-center gap-2 rounded-[8px] border p-3">
      {icon && icon}
      <ShadcnSelect value={value} onValueChange={(v) => onChange(v as string)}>
        <SelectTrigger
          className={cn(
            "text-default min-h-12 border-none shadow-none",
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

export default Select;
