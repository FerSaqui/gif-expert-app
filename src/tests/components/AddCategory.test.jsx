import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole("textbox");

        /**
         * Con fireEvent se dispara los eventos en las pruebas.
         * 
         * El método input es simular un cambio como si el usuario ingresara texto.
         * El método input recibe:
         *  param1: El elemento html a agregar el evento input.
         * param2: El evento para el elemento html
         */
        fireEvent.input( input, { target: { value: "Saitama" }} );

        expect( input.value ).toBe("Saitama");

    });


    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama";

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        expect( input.value ).toBe("");

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe de llamar onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const form = screen.getByRole("form");

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });

});