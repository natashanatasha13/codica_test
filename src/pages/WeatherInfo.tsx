import { WeatherResponse } from "../types/types";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const WeatherInfo = () => {
  const params = useParams<{
    id: string;
  }>();
  const getLocalStorageValue = () => {
    let localStorageValues: WeatherResponse[] = [];
    Object.keys(localStorage).forEach((key) => {
      localStorageValues.push(JSON.parse(localStorage.getItem(key) ?? ""));
    });
    return localStorageValues;
  };
  const savedWeather: WeatherResponse[] = getLocalStorageValue();
  const cityWeather = savedWeather.find((el) => el.id.toString() === params.id);

  return (
    <Wrapper>
      <WeatherContainer>
        <Title variant="h3">{`Weather in ${cityWeather?.name}`}</Title>
        <WeatherDescription variant="h5">
          {`Average temperature:${cityWeather?.main.temp},feels like ${cityWeather?.main.feels_like}`}
        </WeatherDescription>
        <WeatherDescription variant="h5">
          {`Lowest temperature:${cityWeather?.main.temp_min}`}
        </WeatherDescription>
        <WeatherDescription variant="h5">
          {`Highest temperature:${cityWeather?.main.temp_max}`}
        </WeatherDescription>
        <WeatherDescription variant="h5">
          {`Humidity:${cityWeather?.main.humidity}`}
        </WeatherDescription>
        <WeatherDescription variant="h5">
          {`Pressure:${cityWeather?.main.pressure}`}
        </WeatherDescription>
        <WeatherDescription variant="h5">
          {`Visibility:${cityWeather?.visibility}`}
        </WeatherDescription>
      </WeatherContainer>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const WeatherContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  padding: 30px;
  height: 50%;
  border: 1px solid white;
  border-radius: 20px;
  background-color: rgb(135, 160, 184);
  cursor: default;
`;
const Title = styled(Typography)`
  margin-bottom: 10px;
  color: white;
`;

const WeatherDescription = styled(Typography)`
  color: white;
`;

export default WeatherInfo;
