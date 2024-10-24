import { act, renderHook } from "@testing-library/react";
import { useMobile } from "./mobile.hook";

describe("useMobile hook", () => {
  it("Simulamos un evento resize y con un innerWidth igual a 800 para que retorne un false", () => {
    const { result } = renderHook(() => useMobile(630));
    // Simular un cambio en el tamaño de la ventana
    act(() => {
      global.innerWidth = 800; // Supongamos que la nueva anchura de la ventana es 800
      global.dispatchEvent(new Event("resize"));
    });
    expect(result.current.isMobile).toBe(false);
  });
});
