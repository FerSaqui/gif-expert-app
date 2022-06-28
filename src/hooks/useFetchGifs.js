import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  const [newImages, setNewImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    const images = await getGifs(category);
    setNewImages(images);
    setIsLoading( false );
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    newImages,
    isLoading
  };
};
