//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { newImages, isLoading } = useFetchGifs( category );

  return (
    <>
        <h2 className="category-text">{ category }</h2>
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
