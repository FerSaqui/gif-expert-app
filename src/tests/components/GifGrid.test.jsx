import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const categoria = "One Punch";

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            newImages: [],
            isLoading: true
        });

        render( <GifGrid  category={ categoria } /> );

        expect( screen.getByText("Cargando...") ).toBeTruthy();
        expect( screen.getByText( categoria ) ).toBeTruthy();
    });

    test('Debe de mostrar iems cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "https://localhost/saitama.jpg"
            },
            {
                id: "123",
                title: "Goku",
                url: "https://localhost/goku.jpg"
            }
        ];

        useFetchGifs.mockReturnValue({
            newImages: gifs,
            isLoading: false
        });

        render( <GifGrid  category={ categoria } /> );
        expect( screen.getAllByRole("img").length ).toBe(2);
    });

});