import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RmCheckbox from "./RmCheckbox";

describe("RmCheckbox component", () => {
  it("Testeado label", () => {
    render(<RmCheckbox label="Terminos y condiciones" value={true} />);
    const labelContent = screen.getByText("Terminos y condiciones");
    expect(labelContent).toBeInTheDocument();
  });

  it("Click en el label para marcar", () => {
    const mockChangeValue = jest.fn();
    render(
      <RmCheckbox
        changeValue={mockChangeValue}
        value={false}
        label="Terminos y condiciones"
      />
    );
    const checkboxLabel = screen.getByText("Terminos y condiciones");
    fireEvent.click(checkboxLabel);
    expect(mockChangeValue).toHaveBeenCalledWith(true);
  });

  it("Verificando que el componente tenga habilitado el checkbox por defecto.", () => {
    render(<RmCheckbox value />);
    const checkbox = screen.getByRole('checkbox'); // Assuming your checkbox has role="checkbox"
    expect(checkbox).toBeChecked();
  });

  it("Si esta desmarcado pero es requerido", () => {
    render(
      <RmCheckbox
        label="Terminos y condiciones de la plataforma."
        value={false}
        isRequired
      />
    );
    const labelContent = screen.getByText("Terminos y condiciones de la plataforma.");
    expect(labelContent).toHaveClass("rms-is-required");
  });

  it("Que no tenga texto[label]", () => {
    render(<RmCheckbox value />);
    const checkbox = screen.getByRole('checkbox'); // Assuming your checkbox has role="checkbox"
    expect(checkbox).toHaveAccessibleName(""); // or another relevant assertion
  });

  it("Desmarcando checkbox", () => {
    const mockChangeValue = jest.fn();
    render(
      <RmCheckbox
        value={true}
        changeValue={mockChangeValue}
        label="Terminos y condiciones"
      />
    );
    const checkbox = screen.getByRole('checkbox'); // Assuming your checkbox has role="checkbox"
    fireEvent.click(checkbox);
    expect(mockChangeValue).toHaveBeenCalledWith(false);
  });
});
