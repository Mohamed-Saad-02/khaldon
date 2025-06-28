"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";
// Fix: Use the correct casing for the Button import
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
import { defaultValuesSignupForm } from "@/constants";
import { signupSchema, signupValues } from "@/lib/validator";
import { UseTabsProps } from "@/types";
import UseTabs from "../UsedShadcn/UseTabs";

function SignupForm() {
  const form = useForm<signupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: defaultValuesSignupForm,
    mode: "onChange",
  });

  const onSubmit = (data: signupValues) => {
    console.log("Form submitted:", data);
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
        <div className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
            className="w-full"
          >
            Continue
          </Button>
        </div>
      ),
    },
    {
      value: "nameInfo",
      label: "Personal Info",
      renderContent: (currentTab, setTab) => (
        <div className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
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
