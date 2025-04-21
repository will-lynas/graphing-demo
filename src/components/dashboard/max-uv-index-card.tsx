import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/lib/data";

interface MaxUvIndexCardProps {
  data: WeatherData[];
}

export function MaxUvIndexCard({ data }: MaxUvIndexCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Max UV Index</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {Math.max(...data.map((item) => item.uv_index)).toFixed(1)}
        </div>
        <p className="text-xs text-muted-foreground">Highest recorded value</p>
      </CardContent>
    </Card>
  );
}
