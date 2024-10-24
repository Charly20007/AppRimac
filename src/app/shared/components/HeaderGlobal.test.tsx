import { render, screen } from "@testing-library/react";
import HeaderGlobal from "./HeaderGlobal";
import React from "react";

test("renders HeaderGlobal component", () => {
  render(<HeaderGlobal />);

  const logoElement = screen.getByAltText("logo principal"); 
  const buyTextElement = screen.getByText("¡Compra por este medio!"); 
  const numberElement = screen.getByText("(01) 411 6001"); 

  expect(logoElement).toBeInTheDocument();
  expect(buyTextElement).toBeInTheDocument();
  expect(numberElement).toBeInTheDocument();
});
