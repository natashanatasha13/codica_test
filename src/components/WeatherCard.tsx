import { styled, Typography, Button } from "@mui/material";
import { WeatherResponse } from "../types/types";
import { useHistory } from "react-router-dom";
import { MORE_WEATHER } from "../constants/Pages";
type Props = {
  weather: WeatherResponse[];
};
const WeatherCard = ({ weather }: Props) => {
  const history = useHistory();
  const moreInfo = (id: string, city: string) => {
    history.push(MORE_WEATHER.replace(":id", id).replace(":city", city));
  };
  return (
    <Wrapper>
      <CardContainer>
        {weather.map((weatherByCity) => (
          <Card>
            <Typography variant="h5">Weather in:</Typography>

            <CityName variant="h4">{weatherByCity.name}</CityName>
            <WeatherDescriptionWrapper>
              <WeatherDescription>
                <div>{`${weatherByCity.weather[0].main}:${weatherByCity.weather[0].description}`}</div>
                <div>{`Temperature:${weatherByCity.main.temp}`}</div>
                <div>{`Wind speed:${weatherByCity.wind.speed}`}</div>
              </WeatherDescription>
            </WeatherDescriptionWrapper>
            <WeatherButton
              onClick={() =>
                moreInfo(
                  weatherByCity.id.toString(),
                  weatherByCity.name.toString()
                )
              }
              variant="contained"
              color="info"
            >
              More info
            </WeatherButton>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const WeatherButton = styled(Button)`
  margin-top: 10px;
`;
const CityName = styled(Typography)``;
const WeatherDescriptionWrapper = styled("div")``;

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
