import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { checkPasswordRules, cn } from "@/lib";
import { resetPasswordValues } from "@/lib/validator";
import { IInput } from "@/types";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import DynamicInput from "../DynamicInput";
import { inputsResetPasswordForm } from "@/constants";
import { Check } from "lucide-react";

export const RenderInputResetPassword = (
  input: IInput<resetPasswordValues>,
  field: ControllerRenderProps<resetPasswordValues>,
  index: number,
  _actions?: Record<string, (...args: unknown[]) => unknown>,
  form?: UseFormReturn<resetPasswordValues>,
) => {
  const password = form?.watch("password");

  const { minLength, hasUppercase, hasLowercase, hasNumber, hasSpecialChar } =
    checkPasswordRules(String(password));

  return (
    <FormItem className="gap-1">
      <FormLabel htmlFor={input.formName}>{input.label}</FormLabel>
      <FormControl>
        <DynamicInput input={input} field={field} id={input.formName} />
      </FormControl>
      <FormMessage />

      {index === inputsResetPasswordForm.length - 1 && (
        <ul className="mt-4 space-y-3 text-xs md:space-y-4 md:text-sm">
          <li className="font-semibold">Your Password must have at least:</li>
          <Rule check={minLength} text="8 characters" />
          <Rule
            check={hasSpecialChar}
            text="1 special character (Example* S @ & ? )"
          />
          <Rule
            check={hasUppercase && hasLowercase}
            text="1 uppercase & 1 lowercase letter"
          />
          <Rule check={hasNumber} text="1 numerical digit" />
        </ul>
      )}
    </FormItem>
  );
};

const Rule = ({ check, text }: { check: boolean; text: string }) => (
  <li
    className={cn(
      "flex items-center gap-2",
      check ? "text-default" : "text-[#9FA4A9]",
    )}
  >
    <Check size={16} className={cn(check && "text-primary")} />
    {text}
  </li>
);
