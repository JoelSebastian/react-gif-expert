import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    /*
      (async () => {
        setImages(await getGifs(category));
      })();

      ASI NO SE HACE, MALA PRACTICA (DICE PIÑA), POR QUE SE
      HACE UN DESMADRE EN EL TRANSPILADO, ASI QUE MEJOR SE
      HACE COMO EL EJEMPLO DE MAS ABAJO...
    */

    const getImage = async () => {
      setImages(await getGifs(category));
      setIsLoading(false);
    };
    getImage();

    /*
      ASI SI... PARA ESTE EJEMPLO EN CONCRETO NO ES
      NECESARIO TENER LA FUNCION DECLARADA DENTRO DEL
      USEEFFECT PERO IGUAL NO PASA NADA (SEGUN PIÑA).
    */

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
