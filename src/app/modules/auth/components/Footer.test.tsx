import { render, screen } from "@testing-library/react"; // Import screen
import { Footer } from "./Footer";
import React from "react";

describe("Footer component", () => {
  it("Verificando text", () => {
    render(<Footer />); // No need to destructure
    const description = screen.getByText("© 2023 RIMAC Seguros y Reaseguros.");
    expect(description).toBeInTheDocument();
  });
});
