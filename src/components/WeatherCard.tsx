import {
  styled,
  Typography,
  Button,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { citiesForSelect } from "../constants/Cities";
import { WeatherResponse } from "../types/types";
import { useHistory } from "react-router-dom";
import { MORE_WEATHER } from "../constants/Pages";

import { useState } from "react";
type Props = {
  weather: WeatherResponse[];
  refreshfData: () => void;
  addCity: (city: string) => void;
  deleteCity: (city: string) => void;
};
const WeatherCard = ({ weather, refreshfData, addCity, deleteCity }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    addCity(event.target.value);
  };

  const history = useHistory();
  const moreInfo = (id: string, city: string) => {
    history.push(MORE_WEATHER.replace(":id", id).replace(":city", city));
  };
  const refreshWeather = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    refreshfData();
    event.stopPropagation();
  };
  const handleRemoveCity = (
    cityToRemove: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deleteCity(cityToRemove);
    console.log(cityToRemove);
    event.stopPropagation();
  };

  return (
    <Wrapper>
      <SelectnWrapper>
        <Typography variant="h5">Add another city</Typography>
        <FormControl fullWidth>
          <Select
            defaultValue={value}
            value={value}
            placeholder="Choose weather to add"
            onChange={handleChange}
          >
            {citiesForSelect.map((city) => (
              <MenuItem value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectnWrapper>

      <CardContainer>
        {weather.map((weatherByCity) => (
          <Tooltip title="More info" placement="bottom" arrow={true}>
            <Card
              onClick={() =>
                moreInfo(
                  weatherByCity.id.toString(),
                  weatherByCity.name.toString()
                )
              }
            >
              <InfoContainer>
                <Typography variant="h5">Weather in:</Typography>

                <CityName variant="h4">{weatherByCity.name}</CityName>
                <WeatherDescriptionWrapper>
                  <WeatherDescription>
                    <div>{`Clouds:${weatherByCity.weather[0].main}:${weatherByCity.weather[0].description}`}</div>
                    <div>{`Temperature:${weatherByCity.main.temp}`}</div>
                    <div>{`Wind speed:${weatherByCity.wind.speed}`}</div>
                  </WeatherDescription>
                </WeatherDescriptionWrapper>
              </InfoContainer>
              <ButtonContainer>
                <WeatherButton
                  size="small"
                  onClick={(event) => refreshWeather(event)}
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(21, 133, 167)",
                    width: 200,
                    height: 50,
                  }}
                >
                  Refresh weather
                </WeatherButton>
                <RemoveButton
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(133, 169, 236)",
                    width: 200,
                    height: 50,
                    color: "error",
                  }}
                  onClick={(event) =>
                    handleRemoveCity(weatherByCity.name, event)
                  }
                >
                  Remove City
                </RemoveButton>
              </ButtonContainer>
            </Card>
          </Tooltip>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const ButtonContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;
const InfoContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;
const WeatherButton = styled(Button)`
  margin-top: 10px;
`;
const RemoveButton = styled(Button)`
  margin-top: 10px;
`;
const CityName = styled(Typography)``;
const WeatherDescriptionWrapper = styled("div")``;
const SelectnWrapper = styled("div")`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const WeatherDescription = styled(Typography)``;

const Wrapper = styled("div")``;
const CardContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;
const Card = styled("div")`
  cursor: pointer;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export default WeatherCard;
