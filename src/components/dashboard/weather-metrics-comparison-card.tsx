import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeatherComparison } from "@/components/dashboard/weather-comparison";
import { WeatherData } from "@/lib/weather-data";

interface WeatherMetricsComparisonCardProps {
  data: WeatherData[];
}

export function WeatherMetricsComparisonCard({
  data,
}: WeatherMetricsComparisonCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Metrics Comparison</CardTitle>
        <CardDescription>
          Radar chart comparing all weather metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <WeatherComparison data={data} />
      </CardContent>
    </Card>
  );
}
