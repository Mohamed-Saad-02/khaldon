"use client";

import { useUser } from "@/context/UserContext";
import {
  predictLandPricesSchema,
  predictLandPricesValues,
} from "@/lib/validator";
import ButtonHover from "../buttons/ButtonHover";
import AuthDrawerDialog from "../drawerDialog/AuthDrawerDialog";
import { DynamicForm } from "../form/DynamicForm";
import { RenderInputPredictLandPricesForm } from "../form/renderInputs";
import {
  inputsPredictLandPricesForm,
  defaultValuesPredictLandPricesForm,
} from "@/constants";

function WrapperForm({
  onSubmitAction,
}: {
  onSubmitAction: (data: predictLandPricesValues) => void;
}) {
  const { isUserReady, user } = useUser();

  return (
    <div className="rounded-4xl bg-gradient-to-b from-[#7057FF1F] to-transparent p-[1px]">
      <div className="shadow-land-price rounded-4xl bg-white p-6 md:p-8">
        <DynamicForm
          inputs={inputsPredictLandPricesForm}
          formSchema={predictLandPricesSchema}
          defaultValues={defaultValuesPredictLandPricesForm}
          onSubmitAction={onSubmitAction}
          submitButtonText="Predict Price"
          formClassName="flex items-center gap-4 md:gap-8 space-y-0 flex-wrap"
          renderInput={RenderInputPredictLandPricesForm}
          customSubmit={(form) => (
            <AuthDrawerDialog
              trigger={
                <ButtonHover
                  type={isUserReady && user ? "submit" : "button"}
                  className="mt-4 h-14 w-full max-w-[178px] px-8 max-md:max-w-full max-sm:text-xs md:mt-8"
                  disabled={
                    form.formState.isSubmitting ||
                    !form.formState.isValid ||
                    !isUserReady // User can't click in button when user data start loading
                  }
                  disabledMobile
                >
                  Predict Price
                </ButtonHover>
              }
            />
          )}
        />
      </div>
    </div>
  );
}

export default WrapperForm;
