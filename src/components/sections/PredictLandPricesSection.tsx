"use client";

import { routes } from "@/routes";
import Section from "../ui/Section";
import TitleSection from "../ui/TitleSection";

import { usePredictLandPricesSectionLogic } from "@/hooks/logic/usePredictLandPricesSectionLogic";
import PredictLandPricesWrapperData from "../predictLandPricesSection/PredictLandPricesWrapperData";
import WrapperForm from "../predictLandPricesSection/WrapperForm";

function PredictLandPricesSection() {
  const { user, locationPrices, isLoadingLocationPrices, onSubmitAction } =
    usePredictLandPricesSectionLogic();

  return (
    <Section className="space-y-12" id={routes.tryNow}>
      <TitleSection
        title="Predict Land Prices"
        description="Enter  location and preferred year to get an accurate prediction of land prices per square meter."
      />

      <WrapperForm onSubmitAction={onSubmitAction} />

      {user && (
        <PredictLandPricesWrapperData
          data={locationPrices}
          isLoading={isLoadingLocationPrices}
        />
      )}
    </Section>
  );
}

export default PredictLandPricesSection;
