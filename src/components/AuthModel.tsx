"use client";

import { AuthTabType, UseTabsProps } from "@/types";

import { memo } from "react";
import ForgotPasswordForm from "./form/ForgotPasswordForm";
import SignForm from "./form/SignForm";

import ConfirmEmailForm from "./form/ConfirmEmailForm";
import ResetPasswordForm from "./form/ResetPasswordForm";
import UseTabs from "./UsedShadcn/UseTabs";
import Logo from "./Logo";
import AuthCard from "./cards/AuthCard";

import smsNotificationIcon from "@/assets/icons/sms-notification.svg";
import Image from "next/image";

const tabList: UseTabsProps<AuthTabType>["tabList"] = [
  {
    value: "login",
    label: "Login",
    renderContent: (_, handleChange) => (
      <SignForm selectSection={handleChange} defaultTab="login" />
    ),
  },
  {
    value: "signup",
    label: "Create an account",
    renderContent: (_, handleChange) => (
      <SignForm selectSection={handleChange} defaultTab="signup" />
    ),
  },
  {
    value: "forgotPassword",
    label: "Forgot Password",
    renderContent: (_, handleChange) => (
      <AuthCard
        icon={
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        }
        title="Forgot Password"
        subtitle="Enter your email to reset your password"
        currentStepKey="forgotPassword"
      >
        <ForgotPasswordForm selectSection={handleChange} />
      </AuthCard>
    ),
  },
  {
    value: "confirmEmail",
    label: "Confirm Email",
    renderContent: (_, handleChange) => (
      <AuthCard
        icon={
          <Image
            src={smsNotificationIcon}
            alt="sms notification icon"
            className="-mb-4 max-md:size-24 md:-mb-8"
          />
        }
        title="Confirm Email"
        subtitle="Enter the 4-digit OTP sent to"
        currentStepKey="confirmEmail"
      >
        <ConfirmEmailForm
          selectSection={handleChange}
          email="example...@gmail.com"
        />
      </AuthCard>
    ),
  },
  {
    value: "resetPassword",
    label: "Reset Password",
    renderContent: (_, handleChange) => (
      <AuthCard
        icon={
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        }
        title="Reset Password"
        currentStepKey="resetPassword"
      >
        <ResetPasswordForm selectSection={handleChange} />
      </AuthCard>
    ),
  },
];

function AuthModel({ onClose }: { onClose?: () => void }) {
  return (
    <UseTabs<AuthTabType>
      tabList={tabList}
      defaultValue="signup"
      actions={{ onClose: onClose || (() => {}) }}
      activeTabList={false}
    />
  );
}

export default memo(AuthModel);
