import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        //Props que recibe este componente del componente padre (GifExpertApp), es una función
        //onAddCategory( categorias => [inputValue, ...categorias] );

        //Se emite este método
        onNewCategory( inputValue );
        setInputValue("");
    }

  return (
    <form onSubmit={ handleSubmit } aria-label="form">
        <input 
            type={ "text" }
            placeholder= "Buscar GIFs"
            value={ inputValue }
            onChange= { onInputChange }
        />
    </form>

  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}