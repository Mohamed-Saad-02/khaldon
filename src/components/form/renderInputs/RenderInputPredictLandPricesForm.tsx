import DynamicInput from "@/components/form/DynamicInput";
import InputRange from "@/components/form/InputRange";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import UseSelect from "@/components/UsedShadcn/UseSelect";
import { predictLandPricesValues } from "@/lib/validator";
import { IInput } from "@/types";
import Image from "next/image";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import LocationIcon from "@/assets/icons/location.svg";

export const RenderInputPredictLandPricesForm = (
  input: IInput<predictLandPricesValues>,
  field: ControllerRenderProps<predictLandPricesValues>,
  _index: number,
  _actions?: Record<string, (...args: unknown[]) => unknown>,
  form?: UseFormReturn<predictLandPricesValues>,
) => {
  const inputRangeWatch = form?.watch("year");

  return (
    <FormItem className="max-sm:w-full sm:flex-1">
      <div className="flex items-center justify-between">
        <FormLabel className="text-base font-semibold" htmlFor={input.formName}>
          {input.label}
        </FormLabel>
        {input.type === "range" && (
          <span className="text-primary font-semibold tabular-nums max-md:text-xs">
            {inputRangeWatch}
          </span>
        )}
      </div>
      <FormControl>
        {input.type === "range" ? (
          <InputRange
            step={1}
            min={Number(input.min)}
            max={Number(input.max)}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            id={input.formName}
          />
        ) : input.type === "select" ? (
          <UseSelect
            items={input.selectItems!}
            value={field.value}
            onChange={field.onChange}
            className="w-full ring-0 focus-visible:ring-0"
            icon={
              <Image
                src={LocationIcon}
                alt="Location Icon"
                width={16}
                height={16}
              />
            }
          />
        ) : (
          <DynamicInput input={input} field={field} id={input.formName} />
        )}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
