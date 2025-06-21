import { forgotPasswordSchema, forgotPasswordValues } from "@/lib/validator";
import { IInput, SectionType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";

const inputs: IInput<forgotPasswordValues>[] = [
  {
    formName: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
];

const defaultValues = { email: "" };

function ForgotPasswordForm({
  selectSection,
}: {
  selectSection: (section: SectionType) => void;
}) {
  const onSubmitAction = (
    data: forgotPasswordValues,
    form: UseFormReturn<forgotPasswordValues>,
  ) => {
    selectSection("confirmEmail");
    console.log(data);
    console.log(form);
  };

  return (
    <div>
      <DynamicForm
        inputs={inputs}
        formSchema={forgotPasswordSchema}
        defaultValues={defaultValues}
        onSubmitAction={onSubmitAction}
        submitButtonText="Send OTP"
        buttonClass="w-full max-sm:text-xs mt-9"
      />
    </div>
  );
}

export default ForgotPasswordForm;
