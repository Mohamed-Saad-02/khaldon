import { Data } from "@/service/predictLandPrices";
import PredictLandPricesStats from "./PredictLandPricesStats";
import PriceLineChar from "./PriceLineChar";

function PredictLandPricesWrapperData({
  data,
  isLoading,
}: {
  data: Data | null;
  isLoading: boolean;
}) {
  return (
    <div className="space-y-8">
      <PredictLandPricesStats stats={data?.stats || []} isLoading={isLoading} />
      <PriceLineChar chartData={data?.chartData || []} isLoading={isLoading} />
    </div>
  );
}

export default PredictLandPricesWrapperData;
