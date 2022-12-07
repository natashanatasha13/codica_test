import { WeatherResponse } from "../types/types";

export const weather: WeatherResponse[] = [
  {
    base: "stations",
    clouds: { all: 6 },
    cod: 200,
    coord: { lon: 36.25, lat: 50 },
    dt: 1670321589,
    id: 706483,
    main: {
      feels_like: 34,
      humidity: 34,
      pressure: 455,
      temp: 32,
      temp_max: 23,
      temp_min: 23,
    },
    name: "Kharkiv",
    sys: {
      type: 2,
      id: 3,
      country: "UA",
      sunrise: 5,
      sunset: 5,
    },
    timezone: 7200,
    visibility: 10000,
    weather: [{ id: 1, main: "", description: "", icon: "" }],
    wind: { speed: 4.78, deg: 126, gust: 9 },
  },
];
