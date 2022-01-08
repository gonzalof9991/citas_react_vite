import React from 'react';
import Paciente from './Paciente';


const Listadopacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    

    return (
        // Siempre para iterar arreglos en React, el mas aceptado es .map, ya que crea un nuevo arreglo
        <div className=' w-1/2 lg:w-2/5 h-screen overflow-scroll'>

            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className=' text-3xl font-black text-center'>Listado Pacientes</h2>
                    <p className='  text-xl mt-5 mb-10 text-center'>
                        Administra tus {' '}
                        <span className=' text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => 

                        <Paciente
                            key= {paciente.id} // siempre que iteremos un arreglo debe tener una key
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    )}
                
                </>
            ) : (
            <>
                <h2 className=' text-3xl font-black text-center'>No hay Pacientes</h2>
                <p className='  text-xl mt-5 mb-10 text-center'>
                    Comienza agregando pacientes {' '}
                    <span className=' text-indigo-600 font-bold'>y apareceran en este lugar</span>
                </p>

                
            
            </>
            )
            
            }    
           
        </div>
        
        
    );
}

export default Listadopacientes;
