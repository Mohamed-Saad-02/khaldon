import { confirmEmailSchema, confirmEmailValues } from "@/lib/validator";
import { AuthTabType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";

import smsIcon from "@/assets/icons/smsIcon.svg";
import {
  defaultValuesConfirmEmailForm,
  inputsConfirmEmailForm,
  OTP_TYPE,
} from "@/constants";
import Image from "next/image";
import { RenderInputConfirmEmail } from "./renderInputs";
import { useCheckOTP, useConfirmEmail } from "@/hooks/useAuth";
import useResendOTP from "@/hooks/service/auth/useResendOTP";

function ConfirmEmailForm({
  selectSection,
}: {
  selectSection: (section: AuthTabType) => void;
}) {
  const otpType: OTP_TYPE =
    (sessionStorage.getItem("OTP_TYPE") as OTP_TYPE) || OTP_TYPE.CONFIRM_EMAIL;
  const email = sessionStorage.getItem("email") || "";

  const { mutate: mutateConfirmEmail, isPending: isPendingConfirmEmail } =
    useConfirmEmail();
  const { mutate: mutateCheckOTP, isPending: isPendingCheckOTP } =
    useCheckOTP();
  const { mutate: mutateResendOTP, isPending: isPendingResendOTP } =
    useResendOTP();

  const onSubmitAction = (
    data: confirmEmailValues,
    form: UseFormReturn<confirmEmailValues>,
  ) => {
    if (otpType === OTP_TYPE.CONFIRM_EMAIL) {
      mutateConfirmEmail(
        {
          ...data,
          email,
        },
        {
          onSuccess: () => selectSection("login"),
          onError: () => form.reset(),
        },
      );
    } else if (otpType === OTP_TYPE.FORGOT_PASSWORD) {
      mutateCheckOTP(
        {
          email,
          otp: data.otp,
          type: OTP_TYPE.FORGOT_PASSWORD,
        },
        {
          onSuccess: () => {
            sessionStorage.setItem("otp", data.otp);
            selectSection("resetPassword");
          },
          onError: () => form.reset(),
        },
      );
    }
  };

  const resendOTP = () => {
    mutateResendOTP({
      email,
      type: otpType,
    });
  };

  return (
    <div className="space-y-8 max-md:text-sm">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-[#52565B]">Enter the 4-digit OTP sent to</p>
        <div className="text-default flex items-center justify-center gap-1.5">
          <Image src={smsIcon} alt="sms icon" width={20} height={20} />
          <p>{email}</p>
          <button
            onClick={() =>
              selectSection(
                otpType === OTP_TYPE.CONFIRM_EMAIL
                  ? "signup"
                  : "forgotPassword",
              )
            }
            className="bg-secondary text-primary hover:bg-secondary-hover h-6 rounded-4xl px-2 text-sm transition-colors duration-300 hover:text-[#354308]"
          >
            Change
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <DynamicForm
          inputs={inputsConfirmEmailForm}
          formSchema={confirmEmailSchema}
          defaultValues={defaultValuesConfirmEmailForm}
          onSubmitAction={onSubmitAction}
          submitButtonText="Confirm OTP"
          buttonClass="w-full max-sm:text-xs mt-8"
          renderInput={RenderInputConfirmEmail}
          actions={{ selectSection, resendOTP }}
          isPending={
            isPendingConfirmEmail || isPendingCheckOTP || isPendingResendOTP
          }
        />
      </div>
    </div>
  );
}

export default ConfirmEmailForm;
