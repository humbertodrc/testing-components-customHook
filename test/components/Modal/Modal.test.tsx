import {render, renderHook, act} from "@testing-library/react";
import React from "react";
import useDisclosure from "../../../src/hooks/useDisclosure";
import Modal from "../../../src/components/Modal/Modal";
import "@testing-library/jest-dom";

describe("Pruebas en <Modal />", () => {
	test("Debe mostarse correctamenta", () => {
		const {result} = renderHook(() => useDisclosure());
		const {container} = render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);
		expect(container).toMatchSnapshot();
	});

	test("Cuando se renderiza el componente el Modal no deberia estar", () => {
		const {result} = renderHook(() => useDisclosure());
		render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);
		const modal = document.querySelector(".modal");
		expect(modal).not.toBeInTheDocument();
	});

	test("Cuando el modal esta visible en el documento", () => {
		const {result} = renderHook(() => useDisclosure());

		const {rerender} = render(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		act(() => {
			result.current.open();
		});

		rerender(
			<Modal visible={result.current.isOpen} close={result.current.close} />
		);

		const modal = document.querySelector(".modal");
		expect(modal).toBeInTheDocument();
  });
  
  test("Cuando el modal esta visible que se pueda cerrar correctamente", () => {
    const { result } = renderHook(() => useDisclosure());
    
    const { rerender } = render(
      <Modal visible={result.current.isOpen} close={result.current.close} />
    );

    act(() => {
      result.current.close();
    });

    rerender(
      <Modal visible={result.current.isOpen} close={result.current.close} />
    );

    expect(result.current.isOpen).toBe(false);
  
  });
});
