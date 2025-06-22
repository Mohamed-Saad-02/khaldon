import { checkPasswordRules, cn } from "@/lib";
import { resetPasswordSchema, resetPasswordValues } from "@/lib/validator";
import { IInput, SectionType } from "@/types";
import { Check } from "lucide-react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { DynamicForm } from "./DynamicForm";
import DynamicInput from "./DynamicInput";

const inputs: IInput<resetPasswordValues>[] = [
  {
    formName: "password",
    label: "New Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "password",
  },
  {
    formName: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "current-password",
  },
];

const defaultValues = { password: "", confirmPassword: "" };

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

const RenderInputLogin = (
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

      {index === inputs.length - 1 && (
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

function ResetPasswordForm({
  selectSection,
  closeDialog,
}: {
  selectSection: (section: SectionType) => void;
  closeDialog: (() => void) | undefined;
}) {
  const onSubmitAction = (
    data: resetPasswordValues,
    form: UseFormReturn<resetPasswordValues>,
  ) => {
    console.log(data);
    console.log(form);
    closeDialog?.();
  };

  return (
    <div>
      <div className="mt-8 space-y-6">
        <DynamicForm
          inputs={inputs}
          formSchema={resetPasswordSchema}
          defaultValues={defaultValues}
          onSubmitAction={onSubmitAction}
          submitButtonText="Reset Password"
          buttonClass="w-full max-sm:text-xs mt-6 md:-mb-4"
          renderInput={RenderInputLogin}
          actions={{ selectSection }}
        />
      </div>
    </div>
  );
}

export default ResetPasswordForm;
