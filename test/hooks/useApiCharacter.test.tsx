import {render, renderHook, waitFor, screen} from "@testing-library/react";
// src/mocks/server.js
import {setupServer} from "msw/node";
import React from 'react';
import {generateHandlers} from "../../mock/characters";
import Character from '../../src/components/Character/Character';
import {useApiCharacter} from "../../src/hooks/useApiCharacter";

const {handlers, data} = generateHandlers();

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Pruebas en useApiCharacter.ts", () => {
	;

  test("Debe retornar la información deseada", async () => {

    // El useApiCharacter es un custom hook, debe ser renderizado con renderHook
    const { result } = renderHook(() => useApiCharacter("alive"));
    
    // Esperamos a que el estado isLoading cambie a false
    // await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Esperamos a que el estado error cambie a false
    // await waitFor(() => expect(result.current.error).toBe(false));

    // Esperamos a que el estado character tenga la información deseada
    await waitFor(() => expect(result.current.character).toEqual(data));

  
	});
});
