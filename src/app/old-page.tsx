"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  date: string;
  temperature_c: number;
  humidity_percent: number;
  uv_index: number;
  precipitation_mm: number;
  wind_speed_kmh: number;
  id: string;
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("https://fake-api.lynas.dev/weather");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Information</h1>

      {loading && <p>Loading weather data...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && weatherData.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Weather Forecast</h2>
          <div className="space-y-4">
            {weatherData.map((item) => (
              <div key={item.id} className="border p-3 rounded shadow-sm">
                <p className="font-medium">
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <p>Temperature: {item.temperature_c}°C</p>
                <p>Humidity: {item.humidity_percent}%</p>
                <p>UV Index: {item.uv_index}</p>
                <p>Precipitation: {item.precipitation_mm} mm</p>
                <p>Wind Speed: {item.wind_speed_kmh} km/h</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
