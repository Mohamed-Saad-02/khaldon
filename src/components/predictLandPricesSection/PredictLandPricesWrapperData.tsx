import { ChartData, LocationPrices } from "@/types";
import PriceLineChar from "./PriceLineChar";
import PredictLandPricesStats from "./PredictLandPricesStats";

function PredictLandPricesWrapperData({
  data,
  isLoading,
}: {
  data: LocationPrices[] | null;
  isLoading: boolean;
}) {
  // Stats
  // Extract arrays
  const predictedPrices = data?.map((d) => d.predictedPrice) || [];
  const percentages = data?.map((d) => d.percentage) || [];
  const actualPrices = data?.map((d) => d.actualPrice) || [];

  // Calculations
  const avg = (arr: number[]) =>
    arr.reduce((sum, val) => sum + val, 0) / arr.length;

  const averagePredictedPrice = Math.round(avg(predictedPrices));
  const averagePercentage = +avg(percentages).toFixed(3);
  const priceRange = [Math.min(...actualPrices), Math.max(...actualPrices)];

  // Char
  const priceTrend = new Set(data?.map((item) => item.year)).size;

  const chartData: ChartData[] =
    data?.map((item) => {
      return {
        name: `${item.year} ${item.half === "H1" ? "(1)" : item.half === "H2" ? "(2)" : ""}`,
        actualPrice: item.actualPrice,
        predictPrice: item.predictedPrice,
      };
    }) || [];

  return (
    <div className="space-y-8">
      <PredictLandPricesStats
        stat={{
          predictPrice: averagePredictedPrice,
          confidenceLevel: averagePercentage,
          priceRange: priceRange,
        }}
        isLoading={isLoading}
      />
      <PriceLineChar
        chartData={chartData}
        isLoading={isLoading}
        priceTrend={priceTrend}
      />
    </div>
  );
}

export default PredictLandPricesWrapperData;
