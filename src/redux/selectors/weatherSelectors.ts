import { RootState } from "../reducers";

export const getWeather = (state: RootState) => state.WeatherReducer.weather;
