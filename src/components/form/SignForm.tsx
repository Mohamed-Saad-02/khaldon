import { cn } from "@/lib";
import { ActionsProps, AuthTabType } from "@/types";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import AuthCard from "../cards/AuthCard";
import Logo from "../Logo";

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
  defaultTab,
  actions,
  selectSection,
}: {
  defaultTab?: "signup" | "login";
  actions: ActionsProps;
  selectSection: (section: AuthTabType) => void;
}) {
  const [tab, setTab] = useState<"signup" | "login">(defaultTab || "signup");

  const tabsComponent = useMemo(
    () => ({
      signup: {
        title: "Welcome! Let's get started",
        content: <SignupForm selectSection={selectSection} />,
      },
      login: {
        title: "Welcome! Let's get started",
        content: <LoginForm actions={{ ...actions, selectSection }} />,
      },
    }),
    [],
  );

  return (
    <AuthCard
      icon={
        <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
      }
      title={tabsComponent[tab].title}
      currentStepKey={tab}
    >
      <div className="flex gap-4 rounded-[8px] border border-[#00000033] p-2">
        <Tab setTab={setTab} currentTab={tab} tab={"login"} />
        <Tab setTab={setTab} currentTab={tab} tab={"signup"} />
      </div>

      <div className="mt-8 space-y-6">{tabsComponent[tab].content}</div>
    </AuthCard>
  );
}

export default SignForm;
