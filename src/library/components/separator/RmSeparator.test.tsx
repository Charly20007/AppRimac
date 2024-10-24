import { render, screen } from "@testing-library/react";
import RmSeparator from "./RmSeparator";
import React from "react";

describe("RmSeparator component", () => {
  it("Verificando valores por defecto", () => {
    render(<RmSeparator />);
    const separator = screen.getByTestId("separator"); 

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveStyle({
      width: "100%",
      height: "10px",
    });
  });

  it("Verificando que se agreguen los estilos nuevos.", () => {
    render(<RmSeparator height={20} bgColor="red" />);
    const separator = screen.getByTestId("separator");

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveStyle({
      width: "100%",
      height: "20px",
      backgroundColor: "red",
    });
  });
});


