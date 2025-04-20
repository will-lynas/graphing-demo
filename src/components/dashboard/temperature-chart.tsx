"use client"

import { format } from "date-fns"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface WeatherData {
  date: string
  temperature_c: number
  humidity_percent: number
  uv_index: number
  precipitation_mm: number
  wind_speed_kmh: number
  id: string
}

interface TemperatureChartProps {
  data: WeatherData[]
  showDetails?: boolean
}

export function TemperatureChart({ data, showDetails = false }: TemperatureChartProps) {
  const chartData = data
    .map((item) => ({
      date: format(new Date(item.date), "MMM dd"),
      value: item.temperature_c,
      rawDate: item.date,
    }))
    .sort((a, b) => new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime())

  return (
    <ChartContainer
      config={{
        temperature: {
          label: "Temperature (°C)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={10} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            domain={["auto", "auto"]}
            label={showDetails ? { value: "Temperature (°C)", angle: -90, position: "insideLeft" } : undefined}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="value"
            name="temperature"
            stroke="var(--color-temperature)"
            strokeWidth={2}
            dot={showDetails ? { r: 4 } : false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
