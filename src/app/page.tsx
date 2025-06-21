import Container from "@/components/ui/Container";

import HeroSection from "@/components/HeroSection";
import PredictLandPricesSection from "@/components/PredictLandPricesSection";
import WhyUsSection from "@/components/WhyUsSection";

function Home() {
  return (
    <Container>
      <HeroSection />
      <PredictLandPricesSection />
      <WhyUsSection />
    </Container>
  );
}

export default Home;
