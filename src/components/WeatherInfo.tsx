import { styled, Typography, Button } from "@mui/material";
import { WeatherResponse } from "../types/types";
import { useHistory } from "react-router-dom";
import { MORE_WEATHER } from "../constants/Pages";
type Props = {
  weather: WeatherResponse[];
};
const WeatherInfo = ({ weather }: Props) => {
  const history = useHistory();
  const moreInfo = () => {
    history.push(MORE_WEATHER.replace(":id", "123"));
  };
  return <Wrapper>123</Wrapper>;
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

export default WeatherInfo;
