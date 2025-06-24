"use client";

import { routes } from "@/routes";
import Section from "../ui/Section";
import TitleSection from "../ui/TitleSection";

import PredictLandPricesWrapperData from "../predictLandPricesSection/PredictLandPricesWrapperData";
import WrapperForm from "../predictLandPricesSection/WrapperForm";
import { predictLandPricesValues } from "@/lib/validator";
import { Data, predictLandPrices } from "@/service/predictLandPrices";
import { useUser } from "@/context/UserContext";
import { useState, useEffect } from "react";

function PredictLandPricesSection() {
  const { user } = useUser();

  const [dataForm, setDataForm] = useState<predictLandPricesValues | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Data | null>(null);

  const onSubmitAction = (data: predictLandPricesValues) => {
    if (!user) return;

    setDataForm(data);
    setData(null);
  };

  useEffect(() => {
    if (dataForm || user) {
      const getData = async () => {
        try {
          setIsLoading(true);
          const data = await predictLandPrices(dataForm);
          setData(data);
        } catch (error) {
          console.error("Error fetching prediction:", error);
        } finally {
          setIsLoading(false);
        }
      };

      getData();
    }
  }, [dataForm, user]);

  return (
    <Section className="space-y-12" id={routes.tryNow}>
      <TitleSection
        title="Predict Land Prices"
        description="Enter  location and preferred year to get an accurate prediction of land prices per square meter."
      />

      <WrapperForm onSubmitAction={onSubmitAction} />

      {user && (
        <PredictLandPricesWrapperData data={data} isLoading={isLoading} />
      )}
    </Section>
  );
}

export default PredictLandPricesSection;
