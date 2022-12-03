import { styled } from "@mui/material";

type Props = {
  text: string;
};
const WeatherCard = ({ text }: Props) => {
  return <CardContainer>{text}</CardContainer>;
};

const CardContainer = styled("div")`
  background-color: red;
`;

export default WeatherCard;
