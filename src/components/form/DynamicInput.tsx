"use client";

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Input } from "../ui/input";

interface DynamicInputProps<T extends Record<string, string | number | Date>> {
  input: InputHTMLAttributes<HTMLInputElement>;
  field: ControllerRenderProps<T>;
  id: string;
}

function DynamicInput<T extends Record<string, string | number | Date>>({
  input,
  field,
  id,
}: DynamicInputProps<T>) {
  const [togglePassword, setTogglePassword] = useState(false);

  const isFile = input.type === "file";
  const isPassword = input.type === "password";

  if (isFile)
    return (
      <Input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) field.onChange(file);
        }}
        accept={input.accept}
        id={id}
      />
    );

  return (
    <div className="relative">
      <Input
        type={isPassword && togglePassword ? "text" : input.type}
        placeholder={input.placeholder || ""}
        {...field}
        value={
          field.value instanceof Date
            ? field.value.toISOString().split("T")[0]
            : (field.value ?? "")
        }
        id={id}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setTogglePassword(!togglePassword)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-[#8F99A3]"
        >
          {!togglePassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
}

export default DynamicInput;
