import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/lib/weather-data";

interface TotalPrecipitationCardProps {
  data: WeatherData[];
}

export function TotalPrecipitationCard({ data }: TotalPrecipitationCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Precipitation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {data
            .reduce((sum, item) => sum + item.precipitation_mm, 0)
            .toFixed(1)}{" "}
          mm
        </div>
        <p className="text-xs text-muted-foreground">Cumulative rainfall</p>
      </CardContent>
    </Card>
  );
}
