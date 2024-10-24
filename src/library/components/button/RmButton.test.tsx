import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RmButton from "./RmButton";

describe("RmButton component", () => {
  it("renders button with label", () => {
    render(
      <RmButton label="Click me" changeButton={() => console.warn("click")} />
    );
    expect(screen.getByText("Click me")).toBeInTheDocument(); // Using screen.getByText
  });

  it("calls changeButton function on click if not disabled", () => {
    const mockChangeButton = jest.fn();
    render(
      <RmButton label="Click me" changeButton={mockChangeButton} />
    );

    const button = screen.getByText("Click me"); // Using screen.getByText
    fireEvent.click(button);

    expect(mockChangeButton).toHaveBeenCalled();
  });

  it("does not call changeButton function on click if disabled", () => {
    const mockChangeButton = jest.fn();
    render(
      <RmButton label="Click me" changeButton={mockChangeButton} disabled />
    );

    const button = screen.getByText("Click me"); // Using screen.getByText
    fireEvent.click(button);

    expect(mockChangeButton).not.toHaveBeenCalled();
  });
});
