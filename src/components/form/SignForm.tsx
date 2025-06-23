import { defaultValuesSignForm, inputsSignForm } from "@/constants";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib";
import {
  loginSchema,
  loginValues,
  signupSchema,
  signupValues,
} from "@/lib/validator";
import { SectionType } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { DynamicForm } from "./DynamicForm";
import { RenderInputLogin } from "./renderInputs/RenderInputSign";

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
            inputs={inputsSignForm}
            formSchema={loginSchema}
            defaultValues={defaultValuesSignForm}
            onSubmitAction={onSubmitAction}
            submitButtonText="Login"
            buttonClass="w-full max-sm:text-xs mt-9"
            renderInput={RenderInputLogin}
            actions={{ selectSection }}
          />
        ) : (
          <DynamicForm
            key={tab}
            inputs={inputsSignForm}
            formSchema={signupSchema}
            defaultValues={defaultValuesSignForm}
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
