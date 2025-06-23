import Container from "@/components/ui/Container";

import PredictLandPricesSection from "@/components/sections/PredictLandPricesSection";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

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
