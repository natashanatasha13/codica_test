import { Action, combineReducers } from "redux";
import WeatherReducer from "./WeatherReducer";
const appReducer = combineReducers({
  WeatherReducer,
});
export type RootState = ReturnType<typeof appReducer>;

export const CLEAR_STORE = "CLEAR_STORE";

const rootReducer = (state: RootState, action: Action) => {
  if (action.type === CLEAR_STORE) {
    //@ts-ignore
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer as typeof appReducer;
