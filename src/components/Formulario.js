import React, { useState } from 'react';
import Error from './Error';



const Formulario = ({guardarBusqueda}) => {

    const [ termino, guardarTermino ] = useState('')
    const [ error, actualizarError ] = useState(false)
    
    const buscarImagenes = e => {
        e.preventDefault();


        //validar

        if(termino.trim() === ''){
            actualizarError(true)
            return;
        }
        actualizarError(false)
        // enviar el termino de búsqueda hacia el componente pincipal
        guardarBusqueda(termino)
    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            {error ? <Error mensaje='El campo está vacío'/> : null}
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Busca una imagen, ejemplo: indie o café'
                        onChange={e => guardarTermino(e.target.value)}
                    />
                </div>


                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;