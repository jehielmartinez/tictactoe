/* eslint-env jest */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../containers/App";

describe("<App />", () => {
  test("Should render correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('main-container')).toBeInTheDocument();
    expect(getByTestId('board')).toBeInTheDocument();
  });
  test("Should render nine elements", () => {
    const { getAllByTestId } = render(<App />);
    expect(getAllByTestId('element').length).toBe(9);
  });
});
