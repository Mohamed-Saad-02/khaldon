import { defaultValuesLoginForm, inputsLoginForm } from "@/constants";
import { useUser } from "@/context/UserContext";
import { useLogin } from "@/hooks/useAuth";
import { loginSchema, loginValues } from "@/lib/validator";
import { ActionsProps } from "@/types";
import { DynamicForm } from "./DynamicForm";
import { RenderInputLogin } from "./renderInputs";

function LoginForm({ actions }: { actions: ActionsProps }) {
  const { mutate, isPending } = useLogin();
  const { saveUser } = useUser();

  const onSubmitAction = (data: loginValues) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data.success && data.data.token) {
          saveUser(data.data.token);
          actions.onClose();
        }
      },
    });
  };

  return (
    <DynamicForm
      inputs={inputsLoginForm}
      formSchema={loginSchema}
      defaultValues={defaultValuesLoginForm}
      onSubmitAction={onSubmitAction}
      submitButtonText="Login"
      buttonClass="w-full max-sm:text-xs mt-9"
      renderInput={RenderInputLogin}
      actions={actions}
      isPending={isPending}
    />
  );
}

export default LoginForm;
