import { render } from "@testing-library/react";
import WeatherInfo from "../WeatherInfo";
import Router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("WeatherInfo", () => {
  test("should render cases container", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1234" });

    const { container } = render(<WeatherInfo />);
    expect(container).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
