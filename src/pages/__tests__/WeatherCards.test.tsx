import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { weather } from "../../mockData/data";
import WeatherCards from "../WeatherCards";

describe("WeatherCards", () => {
  test("", () => {
    const mockStore = configureStore();
    const initialState = {
      WeatherReducer: {
        weather: weather,
      },
    };

    const updatedStore = mockStore(initialState);
    const { container } = render(
      <Provider store={updatedStore}>
        <WeatherCards />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
