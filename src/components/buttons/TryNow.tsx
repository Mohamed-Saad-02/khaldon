"use client";

import { navToSection } from "@/lib";
import { routes } from "@/routes";
import ButtonHover from "./ButtonHover";

function TryNow() {
  return (
    <ButtonHover
      disabledMobile
      onClick={() => navToSection(routes.tryNow)}
      containerClassName="w-full md:max-w-[150px]"
      className="w-full"
    >
      Try Now
    </ButtonHover>
  );
}

export default TryNow;
