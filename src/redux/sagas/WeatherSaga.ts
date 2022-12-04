import { call, put, takeEvery } from "redux-saga/effects";
import { GetReturnType } from "../../types/types";
import { fetchWeather } from "../../api/weather";
import * as actions from "../actions/actions";
import { WeatherResponse } from "../../types/types";

import { Response } from "../../types/types";

function* fetchWeatherSaga(
  action: GetReturnType<typeof actions.fetchWeather.REQUEST>
) {
  const { city } = action.payload;
  const res: Response<WeatherResponse> = yield call(fetchWeather, city);
  console.log(res);
  if (res.success) {
    yield put(actions.fetchWeather.SUCCESS(res.data));
  } else {
    yield put(actions.fetchWeather.FAILED());
  }
}

export default function* weatherSaga() {
  yield takeEvery(actions.fetchWeather.types.REQUEST, fetchWeatherSaga);
}
