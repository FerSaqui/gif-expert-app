import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState([ "One Punch" ]);

    const agregarCategoria = ( nuevaCategoria ) => {
        if ( categorias.includes(nuevaCategoria) ) return;

        setCategorias( [nuevaCategoria, ...categorias] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/**Se manda como props al componente AddCategory el método de setCategorias.
         * La props se llama onAddCategory que se desestructura en el componente AddCategory.
         */}
        <AddCategory
            //onAddCategory= { setCategorias }
            onNewCategory= { agregarCategoria }
        />

        {
            categorias.map( categoria => (
                <GifGrid
                    key={ categoria }
                    category={ categoria }
                />
            ))
        }
    </>
  )
}