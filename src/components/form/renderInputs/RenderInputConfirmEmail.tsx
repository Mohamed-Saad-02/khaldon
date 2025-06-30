import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { inputsConfirmEmailForm } from "@/constants";
import { confirmEmailValues } from "@/lib/validator";
import { IInput } from "@/types";
import { ControllerRenderProps } from "react-hook-form";

export const RenderInputConfirmEmail = (
  _input: IInput<confirmEmailValues>,
  field: ControllerRenderProps<confirmEmailValues>,
  index: number,
  actions?: {
    resendOTP?: () => void;
  },
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

      {index === inputsConfirmEmailForm.length - 1 && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-[#B3B3B3]">Didn&apos;t get the OTP?</p>
          <button
            type="button"
            className="text-default"
            onClick={actions?.resendOTP}
          >
            Resend OTP via Email
          </button>
        </div>
      )}
    </FormItem>
  );
};
