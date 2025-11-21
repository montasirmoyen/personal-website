"use client";

import React, { useEffect, useState } from "react";
import { Cloud, Sun, CloudSnow, CloudSun } from "lucide-react";
import { fetchWeatherApi } from "openmeteo";

interface WeatherData {
  temperature: number;
  icon: React.ReactNode;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const params = {
          latitude: 42.3584,
          longitude: -71.0598,
          hourly: "temperature_2m",
          timezone: "America/New_York",
        };

        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly()!;

        // Get current temperature (first value in the array)
        const temperatureArray = hourly.variables(0)!.valuesArray()!;
        const currentTempCelsius = temperatureArray[0];

        // Convert to Fahrenheit
        const tempFahrenheit = Math.round((currentTempCelsius * 9) / 5 + 32);

        // Choose icon based on temperature (simple heuristic)
        let icon: React.ReactNode;
        if (tempFahrenheit >= 70) {
          icon = <Sun className="w-5 h-5 sm:w-6 sm:h-6" />;
        } else if (tempFahrenheit >= 50) {
          icon = <CloudSun className="w-5 h-5 sm:w-6 sm:h-6" />;
        } else if (tempFahrenheit >= 32) {
          icon = <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />;
        } else {
          icon = <CloudSnow className="w-5 h-5 sm:w-6 sm:h-6" />;
        }

        setWeather({ temperature: tempFahrenheit, icon });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        // Fallback icon on error
        setWeather({ temperature: 0, icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" /> });
      } finally {
        setLoading(false);
      }
    };

    // fetchWeather();
  }, []);

  if (loading) {
    return null;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="text-white transition hover:opacity-70">
      {weather.icon}
      </div>
      <div className="flex flex-col">
      <div className="text-xs text-white">{weather.temperature}°F</div>
      <div className="text-xs text-white opacity-70">Boston, MA</div>
      </div>
    </div>
  );
}

