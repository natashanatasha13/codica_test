import { render, screen, waitFor, getByRole } from "@testing-library/react";

import WeatherCard from "../WeatherCard";
import userEvent from "@testing-library/user-event";
import { WeatherResponse } from "../../types/types";
import { weather } from "../../mockData/data";

type Props = {
  weather: WeatherResponse[];
  refreshfData: () => void;
  addCity: (city: string) => void;
  deleteCity: (city: string) => void;
};
const props: Props = {
  weather: weather,

  refreshfData: jest.fn(),
  addCity: jest.fn(),
  deleteCity: jest.fn(),
};

describe("WeatherCard", () => {
  test("Refresh function called while clicking on weather button", async () => {
    const { container } = render(<WeatherCard {...props} />);

    expect(container).toBeInTheDocument();
    const weatherButton = await screen.findByTestId("weather-button");
    expect(weatherButton).toBeInTheDocument();
    waitFor(() => userEvent.click(weatherButton));
    expect(props.refreshfData).toHaveBeenCalledTimes(1);
  });
  test("Delete function called while clicking on remove button", async () => {
    const { container } = render(<WeatherCard {...props} />);
    expect(container).toBeInTheDocument();
    const removeButton = await screen.findByTestId("remove-button");
    expect(removeButton).toBeInTheDocument();
    waitFor(() => userEvent.click(removeButton));
    expect(props.deleteCity).toHaveBeenCalledTimes(1);
  });
  test("Add city function called while onchange on select", async () => {
    const { container } = render(<WeatherCard {...props} />);
    expect(container).toBeInTheDocument();
    const select = await screen.findByTestId("select");
    expect(select).toBeInTheDocument();
    userEvent.click(getByRole(screen.getByTestId("select"), "button"));
    await waitFor(() => userEvent.click(screen.getByText(/london/i)));
    expect(props.addCity).toBeCalledWith("London");
  });
});
