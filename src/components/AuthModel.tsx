"use client";

import { SectionType } from "@/types";

import { memo, ReactNode, useMemo, useState } from "react";
import AuthCard from "./cards/AuthCard";
import SignForm from "./form/SignForm";
import Logo from "./Logo";
import ForgotPasswordForm from "./form/ForgotPasswordForm";

import smsNotificationIcon from "@/assets/icons/sms-notification.svg";
import Image from "next/image";
import ConfirmEmailForm from "./form/ConfirmEmailForm";
import ResetPasswordForm from "./form/ResetPasswordForm";

function AuthModel({ onClose }: { onClose?: () => void }) {
  const [section, setSection] = useState<SectionType>("signup");

  const handleSectionChange = (section: SectionType) => {
    setSection(section);
  };

  const AuthCardData: Record<
    SectionType,
    { icon: ReactNode; title: string; subtitle?: string; children: ReactNode }
  > = useMemo(() => {
    return {
      login: {
        icon: (
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        ),
        title: "Welcome! Let's get started",
        children: <SignForm selectSection={handleSectionChange} />,
      },
      signup: {
        icon: (
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        ),
        title: "Welcome! Let's get started",
        children: <SignForm selectSection={handleSectionChange} />,
      },
      forgotPassword: {
        icon: (
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        ),
        title: "Forgot Password!",
        subtitle: "Enter your mail to get a 4 digit otp to confirm your mail",
        children: <ForgotPasswordForm selectSection={handleSectionChange} />,
      },
      confirmEmail: {
        icon: (
          <Image
            src={smsNotificationIcon}
            alt="sms notification icon"
            className="-mb-4 max-md:size-24 md:-mb-8"
          />
        ),
        title: "Confirm your mail!",
        children: (
          <ConfirmEmailForm
            selectSection={handleSectionChange}
            email="example...@gmail.com"
          />
        ),
      },
      resetPassword: {
        icon: (
          <Logo className="xl:h-[72px] xl:w-[230px]" width={230} height={72} />
        ),
        title: "Reset Password",
        children: (
          <ResetPasswordForm
            selectSection={handleSectionChange}
            closeDialog={onClose}
          />
        ),
      },
    };
  }, []);

  return <AuthCard {...AuthCardData[section]} currentStepKey={section} />;
}

export default memo(AuthModel);
