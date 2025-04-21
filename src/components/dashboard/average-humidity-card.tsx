import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/lib/data";

interface AverageHumidityCardProps {
  data: WeatherData[];
}

export function AverageHumidityCard({ data }: AverageHumidityCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Avg. Humidity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {(
            data.reduce((sum, item) => sum + item.humidity_percent, 0) /
            data.length
          ).toFixed(1)}
          %
        </div>
        <p className="text-xs text-muted-foreground">
          Based on {data.length} data points
        </p>
      </CardContent>
    </Card>
  );
}
