import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemperatureChart } from "@/components/dashboard/temperature-trends/chart";
import { WeatherData } from "@/lib/weather-data";

interface TemperatureTrendsCardProps {
  data: WeatherData[];
}

export function TemperatureTrendsCard({ data }: TemperatureTrendsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperature Trends</CardTitle>
        <CardDescription>Daily temperature readings in Celsius</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <TemperatureChart data={data} showDetails />
      </CardContent>
    </Card>
  );
}
