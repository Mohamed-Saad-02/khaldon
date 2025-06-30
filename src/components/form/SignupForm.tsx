"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { defaultValuesSignupForm, OTP_TYPE } from "@/constants";
import { signupSchema, signupValues } from "@/lib/validator";
import { AuthTabType, UseTabsProps } from "@/types";
import UseTabs from "../UsedShadcn/UseTabs";
import { useRegister } from "@/hooks/useAuth";

function SignupForm({
  selectSection,
}: {
  selectSection: (section: AuthTabType) => void;
}) {
  const { mutate, isPending } = useRegister();

  const form = useForm<signupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: defaultValuesSignupForm,
    mode: "onChange",
  });

  const onSubmit = (data: signupValues) => {
    mutate(data, {
      onSuccess: () => {
        selectSection("confirmEmail");
        sessionStorage.setItem("email", data.email);
      },
      onError: (err: string) => {
        if (err === "Please verify your email first") {
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("OTP_TYPE", OTP_TYPE.CONFIRM_EMAIL);
          selectSection("confirmEmail");
        }
      },
    });
  };

  const handleNext = (
    currentTab: "emailPassword" | "nameInfo",
    setTab: (tab: "emailPassword" | "nameInfo") => void,
  ) => {
    // Trigger validation for current tab fields
    const fields: Path<signupValues>[] =
      currentTab === "emailPassword"
        ? ["email", "password"]
        : ["firstName", "lastName"];

    form.trigger(fields).then((isValid) => {
      if (isValid) {
        setTab("nameInfo");
      }
    });
  };

  const tabList: UseTabsProps<"emailPassword" | "nameInfo">["tabList"] = [
    {
      value: "emailPassword",
      label: "Account",
      renderContent: (currentTab, setTab) => (
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            onClick={() => handleNext(currentTab, setTab)}
            className="mt-17 w-full max-sm:text-xs"
          >
            Continue
          </Button>
        </div>
      ),
    },
    {
      value: "nameInfo",
      label: "Personal Info",
      renderContent: () => (
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-17 w-full max-sm:text-xs"
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <UseTabs
          tabList={tabList}
          defaultValue="emailPassword"
          activeTabList={false}
        />
      </form>
    </Form>
  );
}

export default SignupForm;
