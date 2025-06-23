"use client";

import {
  predictLandPricesSchema,
  predictLandPricesValues,
} from "@/lib/validator";
import { routes } from "@/routes";
import { IInput } from "@/types";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import AuthModel from "./AuthModel";
import { DynamicForm } from "./form/DynamicForm";
import DynamicInput from "./form/DynamicInput";
import InputRange from "./form/InputRange";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import Section from "./ui/Section";
import TitleSection from "./ui/TitleSection";

import LocationIcon from "@/assets/icons/location.svg";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import ButtonHover from "./buttons/ButtonHover";
import AuthDrawerDialog from "./drawerDialog/AuthDrawerDialog";
import UseSelect from "./UsedShadcn/UseSelect";

const inputs: IInput<predictLandPricesValues>[] = [
  {
    formName: "location",
    label: "Location",
    type: "select",
    placeholder: "Enter location",
    autoComplete: "location",
    selectItems: [
      { value: "location1", label: "Location 1" },
      { value: "location2", label: "Location 2" },
      { value: "location3", label: "Location 3" },
    ],
  },
  {
    formName: "year",
    label: "Select Year",
    type: "range",
    placeholder: "Select year",
    autoComplete: "year",
    min: 2014,
    max: 2030,
  },
];

const defaultValues = {
  location: "location1",
  year: "2014",
};

const RenderInput = (
  input: IInput<predictLandPricesValues>,
  field: ControllerRenderProps<predictLandPricesValues>,
  index: number,
  _actions?: Record<string, (...args: unknown[]) => unknown>,
  form?: UseFormReturn<predictLandPricesValues>,
) => {
  const inputRangeWatch = form?.watch("year");

  return (
    <FormItem className="max-sm:w-full sm:flex-1">
      <div className="flex items-center justify-between">
        <FormLabel className="text-base font-semibold" htmlFor={input.formName}>
          {input.label}
        </FormLabel>
        {input.type === "range" && (
          <span className="text-primary font-semibold tabular-nums max-md:text-xs">
            {inputRangeWatch}
          </span>
        )}
      </div>
      <FormControl>
        {input.type === "range" ? (
          <InputRange
            step={1}
            min={Number(input.min)}
            max={Number(input.max)}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
        ) : input.type === "select" ? (
          <UseSelect
            items={input.selectItems!}
            value={field.value}
            onChange={field.onChange}
            className="w-full ring-0 focus-visible:ring-0"
            icon={
              <Image
                src={LocationIcon}
                alt="Location Icon"
                width={16}
                height={16}
              />
            }
          />
        ) : (
          <DynamicInput input={input} field={field} id={input.formName} />
        )}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

function PredictLandPricesSection() {
  const { isUserReady } = useUser();

  const onSubmitAction = (data: predictLandPricesValues) => {
    console.log(data);
  };

  return (
    <Section className="space-y-12" id={routes.tryNow}>
      <TitleSection
        title="Predict Land Prices"
        description="Enter  location and preferred year to get an accurate prediction of land prices per square meter."
      />

      <div className="relative rounded-4xl bg-gradient-to-b from-[#7057FF1F] to-transparent p-[1px]">
        <div className="shadow-land-price rounded-4xl bg-white p-6 md:p-8">
          <DynamicForm
            inputs={inputs}
            formSchema={predictLandPricesSchema}
            defaultValues={defaultValues}
            onSubmitAction={onSubmitAction}
            submitButtonText="Predict Price"
            formClassName="flex items-center gap-4 md:gap-8 space-y-0 flex-wrap"
            renderInput={RenderInput}
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
                content={<AuthModel />}
              />
            )}
          />
        </div>
      </div>
    </Section>
  );
}

export default PredictLandPricesSection;
