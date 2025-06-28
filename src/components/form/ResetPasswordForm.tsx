import {
  defaultValuesResetPasswordForm,
  inputsResetPasswordForm,
} from "@/constants";
import { resetPasswordSchema, resetPasswordValues } from "@/lib/validator";
import { AuthTabType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";
import { RenderInputResetPassword } from "./renderInputs";

function ResetPasswordForm({
  selectSection,
}: {
  selectSection: (section: AuthTabType) => void;
}) {
  const onSubmitAction = (
    data: resetPasswordValues,
    form: UseFormReturn<resetPasswordValues>,
  ) => {
    console.log(data);
    console.log(form);
    selectSection("login");
  };

  return (
    <div className="mt-8 space-y-6">
      <DynamicForm
        inputs={inputsResetPasswordForm}
        formSchema={resetPasswordSchema}
        defaultValues={defaultValuesResetPasswordForm}
        onSubmitAction={onSubmitAction}
        submitButtonText="Reset Password"
        buttonClass="w-full max-sm:text-xs mt-6 md:-mb-4"
        renderInput={RenderInputResetPassword}
      />
    </div>
  );
}

export default ResetPasswordForm;
