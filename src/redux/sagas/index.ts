import { fork } from "redux-saga/effects";

import weatherSaga from "./WeatherSaga";

export default function* saga() {
  yield fork(weatherSaga);
}
