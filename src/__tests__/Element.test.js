/* eslint-env jest */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Element from "../components/Element";

describe("<Element />", () => {
  const handleClick = jest.fn();

  test("Should render correctly", () => {
    const { getByTestId } = render(<Element handleClick={handleClick} value="a" />);
    expect(getByTestId('element')).toBeInTheDocument();
  });

  test("Should show the x value", () => {
    const { getByTestId } = render(<Element handleClick={handleClick} value="x" />);
    expect(getByTestId('element').innerHTML).toBe('x');
  });

  test("Should show the o value", () => {
    const { getByTestId } = render(<Element handleClick={handleClick} value="o" />);
    expect(getByTestId('element').innerHTML).toBe('o');
  });

  test("Should call the handleClick function", () => {
    const { getByTestId } = render(<Element handleClick={handleClick} value="o" />);
    fireEvent.click(getByTestId('element'))
    expect(handleClick).toBeCalledTimes(1);
  });
});
