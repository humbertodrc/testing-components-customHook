import "@testing-library/jest-dom";
import {render, renderHook, act, screen} from "@testing-library/react";
import React from "react";
import Sidebar from "../../../src/components/Sidebar/Sidebar";
import useDisclosure from "../../../src/hooks/useDisclosure";

describe("Pruebas en <Sidebar />", () => {
	test("Debe de mostrarse correctamente", () => {
		const {result} = renderHook(() => useDisclosure());

		const {container} = render(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);
		expect(container).toMatchSnapshot();
	});

	test("Cuando se renderiza el componente el sidebar no deberia estaren el documento", () => {
		const {result} = renderHook(() => useDisclosure());

		render(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		const sidebar = screen.queryByTestId("sidebar");
		expect(sidebar).not.toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible en el documento", () => {
		const {result} = renderHook(() => useDisclosure());

		const {rerender} = render(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		act(() => {
			result.current.open();
		});

		rerender(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		const sidebar = screen.queryByTestId("sidebar");
		expect(sidebar).toBeInTheDocument();
	});

	test("Cuando el sidebar esta visible que se pueda cerrar correctamente", () => {
		const {rerender} = render(<Sidebar visible={true} close={() => {}} />);

		const {result} = renderHook(() => useDisclosure());

		act(() => {
			result.current.close();
		});

		rerender(
			<Sidebar visible={result.current.isOpen} close={result.current.close} />
		);

		expect(result.current.isOpen).toBe(false);
	});
});
