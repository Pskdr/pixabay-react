import React from 'react';
import Imagen from './Imagen';



const ListadoImagenes = ({imagenes}) => {


    if(imagenes.length === 0) return (<p className='my-3 p-4 text-center alert alert-primary'>No hay resultados</p>)
    

    return ( 

        <div className='clo-12 p-5 row'>
            {imagenes.map(imagen => (
                <Imagen
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div> 
        
     );
}
 
export default ListadoImagenes;