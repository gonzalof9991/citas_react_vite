import React from 'react';

// Opcion con Props
/* const Error = ({mensaje}) => {
    return (
        <div className=' bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
                        <p>{mensaje}</p>
        </div>
    );
} */

// Opcion con Children: puedes pasarla contenido HTML, funciones , etc , mas de una cosa
const Error = ({children}) => {
    return (
        <div className=' bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
                        <p>{children}</p>
        </div>
    );
}

export default Error;
