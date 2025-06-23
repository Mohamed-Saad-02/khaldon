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

function WrapperForm() {
  const { isUserReady } = useUser();

  const onSubmitAction = (data: predictLandPricesValues) => {
    console.log(data);
  };

  return (
    <div className="relative rounded-4xl bg-gradient-to-b from-[#7057FF1F] to-transparent p-[1px]">
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
                  type={"submit"}
                  containerClassName="max-w-[178px] max-md:max-w-full md:mt-8 mt-4 w-full"
                  className="h-14 px-8 max-sm:text-xs"
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
