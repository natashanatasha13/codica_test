import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherApp from "./pages/WeatherApp";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { MORE_WEATHER } from "./constants/Pages";
import WeatherInfo from "./components/WeatherInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={WeatherApp} />
          <Route exact path={MORE_WEATHER} component={WeatherInfo} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
