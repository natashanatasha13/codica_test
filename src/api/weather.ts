import { callApi } from "./callApi";
import * as ENDPOINTS from "../constants/EndpointConstants";

export const fetchWeather = (city: string) =>
  callApi(ENDPOINTS.CURRENT_AND_FORECAST_WEATHER_DATA({ city: city }));
