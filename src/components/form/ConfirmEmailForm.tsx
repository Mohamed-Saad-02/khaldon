import { confirmEmailSchema, confirmEmailValues } from "@/lib/validator";
import { IInput, SectionType } from "@/types";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "../ui/form";
import { DynamicForm } from "./DynamicForm";

import smsIcon from "@/assets/icons/smsIcon.svg";
import Image from "next/image";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const inputs: IInput<confirmEmailValues>[] = [
  {
    formName: "otp",
    label: "OTP",
    type: "number",
    placeholder: "Enter your OTP",
    autoComplete: "email",
  },
];

const defaultValues = { otp: "" };

const RenderInputLogin = (
  _input: IInput<confirmEmailValues>,
  field: ControllerRenderProps<confirmEmailValues>,
  index: number,
) => {
  return (
    <FormItem className="gap-1">
      <FormControl>
        <InputOTP maxLength={4} {...field}>
          <InputOTPGroup className="mx-auto w-fit gap-x-6">
            <InputOTPSlot
              index={0}
              className="h-12 w-12 rounded-[8px] border text-[26px] font-semibold md:h-16 md:w-16"
            />
            <InputOTPSlot
              index={1}
              className="h-12 w-12 rounded-[8px] border text-[26px] font-semibold md:h-16 md:w-16"
            />
            <InputOTPSlot
              index={2}
              className="h-12 w-12 rounded-[8px] border text-[26px] font-semibold md:h-16 md:w-16"
            />
            <InputOTPSlot
              index={3}
              className="h-12 w-12 rounded-[8px] border text-[26px] font-semibold md:h-16 md:w-16"
            />
          </InputOTPGroup>
        </InputOTP>
      </FormControl>
      <FormMessage />

      {index === inputs.length - 1 && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-[#B3B3B3]">Didn&apos;t get the OTP?</p>
          <button type="button" className="text-default">
            Resend OTP via Email
          </button>
        </div>
      )}
    </FormItem>
  );
};

function ConfirmEmailForm({
  selectSection,
  email,
}: {
  selectSection: (section: SectionType) => void;
  email: string;
}) {
  const onSubmitAction = (
    data: confirmEmailValues,
    form: UseFormReturn<confirmEmailValues>,
  ) => {
    console.log(data);
    console.log(form);
    selectSection("resetPassword");
  };

  return (
    <div className="space-y-8 max-md:text-sm">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-[#52565B]">Enter the 4-digit OTP sent to</p>
        <div className="text-default flex items-center justify-center gap-1.5">
          <Image src={smsIcon} alt="sms icon" width={20} height={20} />
          <p>{email}</p>
          <button
            onClick={() => selectSection("forgotPassword")}
            className="bg-secondary text-primary hover:bg-secondary-hover h-6 rounded-4xl px-2 text-sm transition-colors duration-300 hover:text-[#354308]"
          >
            Change
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <DynamicForm
          inputs={inputs}
          formSchema={confirmEmailSchema}
          defaultValues={defaultValues}
          onSubmitAction={onSubmitAction}
          submitButtonText="Confirm OTP"
          buttonClass="w-full max-sm:text-xs mt-8"
          renderInput={RenderInputLogin}
          actions={{ selectSection }}
        />
      </div>
    </div>
  );
}

export default ConfirmEmailForm;
