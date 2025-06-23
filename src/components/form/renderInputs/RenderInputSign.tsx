import { IInput } from "@/types";
import { ControllerRenderProps } from "react-hook-form";
import { signupValues, loginValues } from "@/lib/validator";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DynamicInput from "../DynamicInput";
import { inputsSignForm } from "@/constants";

export const RenderInputLogin = (
  input: IInput<signupValues | loginValues>,
  field: ControllerRenderProps<signupValues | loginValues>,
  index: number,
  actions?: Record<string, (...args: unknown[]) => unknown>,
) => {
  return (
    <FormItem className="gap-1">
      <FormLabel htmlFor={input.formName}>{input.label}</FormLabel>
      <FormControl>
        <DynamicInput input={input} field={field} id={input.formName} />
      </FormControl>
      <FormMessage />

      {index === inputsSignForm.length - 1 && (
        <button
          type="button"
          className="text-default ms-auto mt-2 w-fit text-sm"
          onClick={() => actions?.selectSection("forgotPassword")}
        >
          Forgot Password?
        </button>
      )}
    </FormItem>
  );
};
