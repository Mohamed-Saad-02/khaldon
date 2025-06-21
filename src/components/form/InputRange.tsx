import { InputHTMLAttributes } from "react";

interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
}

function InputRange({ min, max, ...rest }: InputRangeProps) {
  return (
    <div className="border-input flex w-full items-center gap-3 rounded-[8px] border px-3 py-1">
      <span className="text-[#757575]">{min}</span>
      <input
        type="range"
        className="custom-range h-12 w-full"
        min={min}
        max={max}
        {...rest}
      />
      <span className="text-[#757575]">{max}</span>
    </div>
  );
}

export default InputRange;
