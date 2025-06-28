import { defaultValuesLoginForm, inputsLoginForm } from "@/constants";
import { loginSchema, loginValues } from "@/lib/validator";
import { ActionsProps } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";
import { RenderInputLogin } from "./renderInputs";

function LoginForm({ actions }: { actions?: ActionsProps }) {
  const onSubmitAction = (
    data: loginValues,
    form: UseFormReturn<loginValues>,
  ) => {
    console.log(data);
    console.log(form);
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
    />
  );
}

export default LoginForm;
