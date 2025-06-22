import { useUser } from "@/context/UserContext";
import { cn } from "@/lib";
import {
  loginSchema,
  loginValues,
  signupSchema,
  signupValues,
} from "@/lib/validator";
import { IInput, SectionType } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { DynamicForm } from "./DynamicForm";
import DynamicInput from "./DynamicInput";

type TabType = {
  setTab: Dispatch<SetStateAction<"signup" | "login">>;
  currentTab: "signup" | "login";
  tab: "signup" | "login";
};

const Tab = ({ setTab, currentTab, tab }: TabType) => (
  <button
    onClick={() => setTab(tab)}
    className={cn(
      "flex h-12 flex-1 items-center justify-center rounded border font-medium transition-colors duration-300 max-md:text-sm",
      currentTab === tab
        ? "bg-primary/10 border-primary/20 text-[#334107]"
        : "border-transparent text-[#52565B]",
    )}
  >
    {tab === "login" ? "Login" : "Create an account"}
  </button>
);

const inputs: IInput<signupValues | loginValues>[] = [
  {
    formName: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
  {
    formName: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "current-password",
  },
];

const defaultValues = { email: "", password: "" };

const RenderInputLogin = (
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

      {index === inputs.length - 1 && (
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

function SignForm({
  selectSection,
}: {
  selectSection: (section: SectionType) => void;
}) {
  const { saveUser } = useUser();

  const [tab, setTab] = useState<"signup" | "login">("signup");

  const onSubmitAction = (
    data: signupValues | loginValues,
    // form: UseFormReturn<signupValues | loginValues>,
  ) => {
    console.log(data);

    saveUser({
      name: "Mohamed Saad",
      id: "1",
      email: data.email,
    });
  };

  return (
    <div>
      <div className="flex gap-4 rounded-[8px] border border-[#00000033] p-2">
        <Tab setTab={setTab} currentTab={tab} tab={"login"} />
        <Tab setTab={setTab} currentTab={tab} tab={"signup"} />
      </div>

      <div className="mt-8 space-y-6">
        {tab === "login" ? (
          <DynamicForm
            key={tab}
            inputs={inputs}
            formSchema={loginSchema}
            defaultValues={defaultValues}
            onSubmitAction={onSubmitAction}
            submitButtonText="Login"
            buttonClass="w-full max-sm:text-xs mt-9"
            renderInput={RenderInputLogin}
            actions={{ selectSection }}
          />
        ) : (
          <DynamicForm
            key={tab}
            inputs={inputs}
            formSchema={signupSchema}
            defaultValues={defaultValues}
            onSubmitAction={onSubmitAction}
            submitButtonText="Signup"
            buttonClass="mt-6 md:mt-[68px]"
          />
        )}
      </div>
    </div>
  );
}

export default SignForm;
