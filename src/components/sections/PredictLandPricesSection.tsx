import { routes } from "@/routes";
import Section from "../ui/Section";
import TitleSection from "../ui/TitleSection";

import WrapperForm from "../predictLandPricesSection/WrapperForm";

function PredictLandPricesSection() {
  return (
    <Section className="space-y-12" id={routes.tryNow}>
      <TitleSection
        title="Predict Land Prices"
        description="Enter  location and preferred year to get an accurate prediction of land prices per square meter."
      />

      <WrapperForm />
    </Section>
  );
}

export default PredictLandPricesSection;
