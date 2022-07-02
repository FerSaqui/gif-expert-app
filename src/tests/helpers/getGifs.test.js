import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs()', () => {

    test('Debe de retornar un arreglo de GIFs', async () => {
        const gifs = await getGifs( "OnePunch" );
        //console.log( gifs );
        /**No se evalúa la respuesta de la api debido a que esa información podría cambiar en el futuro */

        expect( gifs.length ).toBeGreaterThan( 0 );

        /** Se evlúa que el objeto que regrese la api tenga un formato con
         * esas propiedades (id, title, url). Y con el expect.any indicamos
         * que esperamos que sea ese tipo de dato sin importar cual es su valor.
         */
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });

});