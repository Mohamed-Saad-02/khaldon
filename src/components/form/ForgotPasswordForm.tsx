import {
  defaultValuesForgotPasswordForm,
  inputsForgotPasswordForm,
} from "@/constants";
import { forgotPasswordSchema, forgotPasswordValues } from "@/lib/validator";
import { SectionType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";

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
    <DynamicForm
      inputs={inputsForgotPasswordForm}
      formSchema={forgotPasswordSchema}
      defaultValues={defaultValuesForgotPasswordForm}
      onSubmitAction={onSubmitAction}
      submitButtonText="Send OTP"
      buttonClass="w-full md:mt-9"
    />
  );
}

export default ForgotPasswordForm;
