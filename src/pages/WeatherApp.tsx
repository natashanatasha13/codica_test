import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cities } from "../constants/Cities";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../redux/actions/actions";
import { getWeather } from "../redux/selectors/weatherSelectors";

function WeatherApp() {
  const dispatch = useDispatch();
  const weather = useSelector(getWeather);
  const filteredWeather = Array.from(new Set(weather.map((a) => a.id))).map(
    (id) => {
      return weather.find((a) => a.id === id);
    }
  );
  const text = useEffect(() => {
    cities.forEach((city) => dispatch(fetchWeather.REQUEST({ city: city })));
  }, []);
  console.log("weather", filteredWeather);
  return <WeatherCard weather={filteredWeather} />;
}

export default WeatherApp;
