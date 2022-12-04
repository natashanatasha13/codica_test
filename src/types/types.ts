export type InferValueTypes<T> = T extends { [key: string]: infer P }
  ? P
  : never;
export type GetReturnType<T> = T extends (...args: never[]) => infer R
  ? R
  : never;
export type GetActionType<T> = GetReturnType<
  InferValueTypes<InferValueTypes<T>>
>;

export type WeatherResponse = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    type: 2;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
};

export type Response<TSuccess, TFailed = [string]> =
  | {
      data: TSuccess;
      success: true;
    }
  | {
      data: TFailed;
      success: false;
    };

export type ApiResponse<T = any> = {
  success: boolean;
  data: T;
};
