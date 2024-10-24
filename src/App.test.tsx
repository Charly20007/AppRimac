import { render } from "@testing-library/react";
import App from "./App";
import React from "react";

xdescribe("Test app", () => {
  it("renders App component", () => {
    render(<App />);
    // const linkElement = getByText(/HeaderGlobal/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
