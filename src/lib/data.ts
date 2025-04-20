export interface WeatherData {
  date: string
  temperature_c: number
  humidity_percent: number
  uv_index: number
  precipitation_mm: number
  wind_speed_kmh: number
  id: string
}

// Sample data based on the provided JSON structure
export const weatherData: WeatherData[] = [
  {
    date: "2025-01-01T12:00:00Z",
    temperature_c: 4.5,
    humidity_percent: 82,
    uv_index: 1.8,
    precipitation_mm: 0.8,
    wind_speed_kmh: 12,
    id: "2f64",
  },
  {
    date: "2025-01-02T12:00:00Z",
    temperature_c: 3.2,
    humidity_percent: 78,
    uv_index: 1.5,
    precipitation_mm: 1.2,
    wind_speed_kmh: 15,
    id: "3a72",
  },
  {
    date: "2025-01-03T12:00:00Z",
    temperature_c: 2.8,
    humidity_percent: 85,
    uv_index: 1.2,
    precipitation_mm: 2.5,
    wind_speed_kmh: 18,
    id: "4b81",
  },
  {
    date: "2025-01-04T12:00:00Z",
    temperature_c: 5.1,
    humidity_percent: 75,
    uv_index: 2.0,
    precipitation_mm: 0.3,
    wind_speed_kmh: 10,
    id: "5c90",
  },
  {
    date: "2025-01-05T12:00:00Z",
    temperature_c: 6.3,
    humidity_percent: 70,
    uv_index: 2.2,
    precipitation_mm: 0.0,
    wind_speed_kmh: 8,
    id: "6d01",
  },
  {
    date: "2025-01-06T12:00:00Z",
    temperature_c: 7.0,
    humidity_percent: 68,
    uv_index: 2.5,
    precipitation_mm: 0.0,
    wind_speed_kmh: 7,
    id: "7e12",
  },
  {
    date: "2025-01-07T12:00:00Z",
    temperature_c: 6.8,
    humidity_percent: 72,
    uv_index: 2.3,
    precipitation_mm: 0.2,
    wind_speed_kmh: 9,
    id: "8f23",
  },
  {
    date: "2025-01-08T12:00:00Z",
    temperature_c: 5.5,
    humidity_percent: 76,
    uv_index: 2.1,
    precipitation_mm: 0.5,
    wind_speed_kmh: 11,
    id: "9g34",
  },
  {
    date: "2025-01-09T12:00:00Z",
    temperature_c: 4.2,
    humidity_percent: 80,
    uv_index: 1.9,
    precipitation_mm: 1.0,
    wind_speed_kmh: 14,
    id: "0h45",
  },
  {
    date: "2025-01-10T12:00:00Z",
    temperature_c: 3.0,
    humidity_percent: 83,
    uv_index: 1.6,
    precipitation_mm: 1.8,
    wind_speed_kmh: 16,
    id: "1i56",
  },
]
