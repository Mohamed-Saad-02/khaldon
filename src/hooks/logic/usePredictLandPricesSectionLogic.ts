import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { predictLandPricesValues } from "@/lib/validator";
import useLocationSummary from "@/hooks/service/locations/useLocationSummary";
import useLocationPrices from "@/hooks/service/locations/useLocationPrices";

type dataFormType = {
  location: string;
  startYear: string;
  endYear: string;
};

export function usePredictLandPricesSectionLogic() {
  const { user } = useUser();
  const [dataForm, setDataForm] = useState<dataFormType | null>(null);

  const { data: locationSummary, isLoading: isLoadingLocationSummary } =
    useLocationSummary();

  useEffect(() => {
    if (locationSummary?.success) {
      setDataForm({
        location: locationSummary.data.regions[0]._id,
        startYear: locationSummary.data.years[0].toString(),
        endYear: locationSummary.data.years[0].toString(),
      });
    }
  }, [isLoadingLocationSummary]);

  const firstRegion = dataForm?.location;
  const [minYear, maxYear] =
    dataForm?.startYear && dataForm?.endYear
      ? [dataForm.startYear, dataForm.endYear]
      : [2020, 2030];

  const {
    data: locationPrices,
    isLoading: isLoadingLocationPrices,
    refetch: refetchLocationPrices,
  } = useLocationPrices(
    firstRegion || "",
    minYear.toString(),
    maxYear.toString(),
  );

  const onSubmitAction = (data: predictLandPricesValues) => {
    if (!user) return;
    const startYear =
      (locationSummary?.success && locationSummary.data.years[0].toString()) ||
      "";

    setDataForm({
      location: data.location,
      startYear,
      endYear: data.year,
    });
    refetchLocationPrices();
  };

  return {
    user,
    locationPrices: locationPrices?.success ? locationPrices?.data : null,
    isLoadingLocationPrices,
    onSubmitAction,
  };
}
