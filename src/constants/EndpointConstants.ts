type ForecastProps = {
  city: string;
};

export const CURRENT_AND_FORECAST_WEATHER_DATA = ({ city }: ForecastProps) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5d7a75a696bc3d12b0adebe633574765`;
