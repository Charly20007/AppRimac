import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RmInput from "./RmInput";

describe("RmInput component", () => {
  it("Verificando el placeholder del input", () => {
    render(<RmInput value="Es un input" placeholder="Es un input" />);
    const inputElement = screen.getByPlaceholderText("Es un input"); // Using screen.getByPlaceholderText
    expect(inputElement).toBeInTheDocument();
  });

  it("Verificando que se activa la clase error", () => {
    render(<RmInput value="Es un input" placeholder="Es un input" error />);
    const inputElement = screen.getByPlaceholderText("Es un input"); // Using screen.getByPlaceholderText
    expect(inputElement).toHaveClass("rmi-error");
  });

  it("Verificando que el input reciba números", () => {
    render(<RmInput value="Es un input" placeholder="12345" error type="number" />);
    const inputElement = screen.getByPlaceholderText("12345"); // Using screen.getByPlaceholderText
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty("type", "number");
  });

  it("Actualizando el valor del input", () => {
    render(<RmInput value="" placeholder="Ingresa texto" />);
    const inputElement = screen.getByPlaceholderText("Ingresa texto"); // Using screen.getByPlaceholderText
    fireEvent.focus(inputElement);
    fireEvent.input(inputElement, { target: { value: "Hola mundo react." } });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveValue("Hola mundo react.");
  });

  it("Emitiendo el valor desde la propiedad [changeValue]", () => {
    const mockChangeValue = jest.fn();
    render(
      <RmInput
        value=""
        placeholder="Ingresa texto"
        changeValue={mockChangeValue}
      />
    );
    const inputElement = screen.getByPlaceholderText("Ingresa texto"); // Using screen.getByPlaceholderText
    fireEvent.input(inputElement, { target: { value: "Hola mundo react." } });
    expect(mockChangeValue).toHaveBeenCalledWith("Hola mundo react.");
  });
});
