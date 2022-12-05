import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { representedCities } from "../constants/Cities";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather, removeCity } from "../redux/actions/actions";
import { getWeather } from "../redux/selectors/weatherSelectors";
import { WeatherResponse } from "../types/types";

const WeatherCards = () => {
  const dispatch = useDispatch();
  const weather = useSelector(getWeather);

  const getLocalStorageValue = () => {
    let localStorageValues: WeatherResponse[] = [];
    Object.keys(localStorage).forEach((key) => {
      //@ts-ignore
      localStorageValues.push(JSON.parse(localStorage.getItem(key)));
    });
    return localStorageValues;
  };
  const savedWeather: WeatherResponse[] = getLocalStorageValue();

  const [currentWeaher, setCurrentWeaher] = useState<WeatherResponse[]>(
    savedWeather.length !== 0 ? savedWeather : weather
  );

  const [cities, setCities] = useState<string[]>(
    savedWeather.length !== 0
      ? savedWeather.map((el) => el.name)
      : representedCities
  );

  const refreshfData = () =>
    cities.forEach((city) => dispatch(fetchWeather.REQUEST({ city: city })));

  const addCity = (city: string) => {
    dispatch(fetchWeather.REQUEST({ city: city }));
  };

  const deleteCity = (cityToRemove: string) => {
    dispatch(removeCity(cityToRemove));
    localStorage.removeItem(cityToRemove);
  };

  useEffect(() => {
    cities.forEach((city) => dispatch(fetchWeather.REQUEST({ city: city })));
  }, []);

  useEffect(() => {
    setCities(currentWeaher.map((weath) => weath.name));
    currentWeaher.forEach((weather) => {
      localStorage.setItem(weather.name, JSON.stringify(weather));
    });
  }, [currentWeaher]);

  useEffect(() => {
    setCurrentWeaher(
      Array.from(new Set(weather.map((a) => a.id))).map((id) => {
        return weather.find((a) => a.id === id);
      })
    );
  }, [weather]);
  return (
    <WeatherCard
      addCity={addCity}
      refreshfData={refreshfData}
      weather={savedWeather}
      deleteCity={deleteCity}
    />
  );
};

export default WeatherCards;
