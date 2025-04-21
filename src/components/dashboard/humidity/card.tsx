import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HumidityChart } from "@/components/dashboard/humidity/chart";
import { WeatherData } from "@/lib/weather-data";

interface HumidityLevelsCardProps {
  data: WeatherData[];
}

export function HumidityLevelsCard({ data }: HumidityLevelsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Humidity Levels</CardTitle>
        <CardDescription>Daily humidity percentage</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <HumidityChart data={data} showDetails />
      </CardContent>
    </Card>
  );
}
