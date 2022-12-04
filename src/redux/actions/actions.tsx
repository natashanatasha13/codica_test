import { createAsyncActions } from "../utils/reduxUtils";
import { WeatherResponse } from "../../types/types";

export const fetchWeather = createAsyncActions<
  { city: string },
  WeatherResponse,
  void,
  "WEATHER_REQUEST"
>("WEATHER_REQUEST");
