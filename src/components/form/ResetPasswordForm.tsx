import {
  defaultValuesResetPasswordForm,
  inputsResetPasswordForm,
} from "@/constants";
import { resetPasswordSchema, resetPasswordValues } from "@/lib/validator";
import { AuthTabType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";
import { RenderInputResetPassword } from "./renderInputs";
import { useResetPassword } from "@/hooks/useAuth";

function ResetPasswordForm({
  selectSection,
}: {
  selectSection: (section: AuthTabType) => void;
}) {
  const { isPending, mutate } = useResetPassword();

  const onSubmitAction = (
    data: resetPasswordValues,
    form: UseFormReturn<resetPasswordValues>,
  ) => {
    mutate(data, {
      onSuccess: () => selectSection("login"),
      onError: () => form.reset(),
    });
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
        isPending={isPending}
      />
    </div>
  );
}

export default ResetPasswordForm;
