//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { newImages, isLoading } = useFetchGifs( category );

  return (
    <>
        <h2 className="category-text">{ category }</h2>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="container">
          {
            /**Se puso parentesis porque es un return implícito (que no se coloca la palabra return) */
            newImages.map( ( img ) => (
              <GifItem 
                key={ img.id }
                { ...img }
              />
            ))
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}