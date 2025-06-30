import {
  defaultValuesForgotPasswordForm,
  inputsForgotPasswordForm,
} from "@/constants";
import { forgotPasswordSchema, forgotPasswordValues } from "@/lib/validator";
import { AuthTabType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";
import { useForgotPassword } from "@/hooks/useAuth";

function ForgotPasswordForm({
  selectSection,
}: {
  selectSection: (section: AuthTabType) => void;
}) {
  const { mutate, isPending } = useForgotPassword();

  const onSubmitAction = (
    data: forgotPasswordValues,
    form: UseFormReturn<forgotPasswordValues>,
  ) => {
    mutate(data, {
      onSuccess: () => {
        sessionStorage.setItem("email", data.email);
        selectSection("confirmEmail");
      },
      onError: () => form.reset(),
    });
  };

  return (
    <DynamicForm
      inputs={inputsForgotPasswordForm}
      formSchema={forgotPasswordSchema}
      defaultValues={defaultValuesForgotPasswordForm}
      onSubmitAction={onSubmitAction}
      submitButtonText="Send OTP"
      buttonClass="w-full md:mt-9"
      isPending={isPending}
    />
  );
}

export default ForgotPasswordForm;
