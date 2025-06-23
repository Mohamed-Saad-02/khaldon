import { confirmEmailSchema, confirmEmailValues } from "@/lib/validator";
import { SectionType } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { DynamicForm } from "./DynamicForm";

import smsIcon from "@/assets/icons/smsIcon.svg";
import {
  defaultValuesConfirmEmailForm,
  inputsConfirmEmailForm,
} from "@/constants";
import Image from "next/image";
import { RenderInputConfirmEmail } from "./renderInputs";

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
          inputs={inputsConfirmEmailForm}
          formSchema={confirmEmailSchema}
          defaultValues={defaultValuesConfirmEmailForm}
          onSubmitAction={onSubmitAction}
          submitButtonText="Confirm OTP"
          buttonClass="w-full max-sm:text-xs mt-8"
          renderInput={RenderInputConfirmEmail}
          actions={{ selectSection }}
        />
      </div>
    </div>
  );
}

export default ConfirmEmailForm;
