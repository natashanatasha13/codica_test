import { combineReducers } from "redux";
import { WeatherResponse } from "../../types/types";
import * as actions from "../actions/actions";

const initialsState: [] = [];

export const weather = (
  state: WeatherResponse[] | any[] = initialsState,
  action: any
): WeatherResponse[] | any[] => {
  switch (action.type) {
    case actions.fetchWeather.types.SUCCESS: {
      return [...state, action.payload];
    }
    case actions.removeCity(action.payload).type: {
      return state.filter((element) => element.name !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ weather });
