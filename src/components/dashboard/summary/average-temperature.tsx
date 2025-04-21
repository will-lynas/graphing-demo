import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/lib/weather-data";

interface AverageTemperatureCardProps {
  data: WeatherData[];
}

export function AverageTemperatureCard({ data }: AverageTemperatureCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Avg. Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {(
            data.reduce((sum, item) => sum + item.temperature_c, 0) /
            data.length
          ).toFixed(1)}
          °C
        </div>
        <p className="text-xs text-muted-foreground">
          Based on {data.length} data points
        </p>
      </CardContent>
    </Card>
  );
}
