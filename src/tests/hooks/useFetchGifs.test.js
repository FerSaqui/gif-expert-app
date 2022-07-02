import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs("One Punch") );
        const { newImages, isLoading } = result.current;

        expect( newImages.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });


    test('Debe de regresar un arreglo de imágenes y isLoading en false', async () => {
        const { result } = renderHook( () => useFetchGifs("One Punch") );

        /**El waitFor solo hace que espere o suceda algo y evalúa la condición
         * indicada en el callback
         */
        await waitFor(
            () => expect( result.current.newImages.length ).toBeGreaterThan(0)
        );

        const { newImages, isLoading } = result.current;

        expect( newImages.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});