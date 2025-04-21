import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrecipitationChart } from "@/components/dashboard/precipitation/chart";
import { WeatherData } from "@/lib/weather-data";

interface PrecipitationCardProps {
  data: WeatherData[];
}

export function PrecipitationCard({ data }: PrecipitationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Precipitation</CardTitle>
        <CardDescription>Daily rainfall in millimeters</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <PrecipitationChart data={data} showDetails />
      </CardContent>
    </Card>
  );
}
