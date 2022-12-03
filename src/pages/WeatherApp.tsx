import { useEffect, useState } from "react";
import { callApi } from "../api/callApi";
import * as ENDPOINTS from "../constants/EndpointConstants";
import WeatherCard from "../components/WeatherCard";

function WeatherApp() {
  const [name, setName] = useState<any>("");
  const res = async () => {
    const res = await callApi(
      ENDPOINTS.CURRENT_AND_FORECAST_WEATHER_DATA({ city: "London" })
    );
    setName(res.weather);
  };
  useEffect(() => {
    res();
  }, []);
  console.log("name", name);

  return <WeatherCard text={name[0].main} />;
}

export default WeatherApp;
