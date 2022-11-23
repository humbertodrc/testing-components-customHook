import "@testing-library/jest-dom";
import {render, renderHook, act} from "@testing-library/react";
import React from "react";
import Sidebar from "../../../src/components/Sidebar/Sidebar";
import useDisclosure from "../../../src/hooks/useDisclosure";

describe("Pruebas en <Sidebar />", () => {
	test("Debe de mostrarse correctamente", () => {
		const {container} = render(<Sidebar visible={false} close={() => {}} />);
		expect(container).toMatchSnapshot();
	});

	test("Cuando se renderiza el componente el sidebar no deberia estaren el documento", () => {
		const {container} = render(<Sidebar visible={false} close={() => {}} />);
		expect(container.querySelector(".sidebar")).not.toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible en el documento", () => {
		const {container} = render(<Sidebar visible={true} close={() => {}} />);

		const {result} = renderHook(() => useDisclosure());

		act(() => {
			result.current.open();
		});

		expect(container.querySelector(".sidebar")).toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible que se pueda cerrar correctamente", () => {
		const {rerender} = render(<Sidebar visible={true} close={() => {}} />);

		const {result} = renderHook(() => useDisclosure());

		act(() => {
			result.current.close();
		});

		rerender(<Sidebar visible={false} close={() => {}} />);

		expect(result.current.isOpen).toBe(false);
	});
});
