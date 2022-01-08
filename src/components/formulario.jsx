import React from 'react'
// Importar Hooks
import {useState, useEffect} from 'react'
import Error from './error'
import Paciente from './Paciente'

const Formulario = ({pacientes, setPacientes, paciente , setPaciente}) => {
    // El State siempre va en esta parte
    // la variable de la derecha modifica a la de la izquiera,en este caso setNombre modifica a nombre
    const [ nombre, setNombre ] = useState('') // Valor inicial
    const [ propietario, setPropietario ] = useState('') // Valor inicial
    const [ email, setEmail ] = useState('') // Valor inicial
    const [ fecha, setFecha ] = useState('') // Valor inicial
    const [ sintomas, setSintomas ] = useState('') // Valor inicial

    // Mensaje alerta
    const [error, setError] = useState(false)

    useEffect(() => {
        // Verifica si existe algo 
        if ( Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]) // Este useEffect solo se va a ejecutar cuando paciente cambie


   

    // Generar ID
    const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        console.log(random + fecha)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validacion del formulario

        if ( [nombre, propietario, email , fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        }
        
        setError(false)
        // Construir objeto de paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            
        }

        // Verificar si hay un nuevo registro o estamos editando

        if (paciente.id) {
            // Editando
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        }
        else {
            // Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        

        // Reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        
        
        
    }
    return (
        <div className=' md:w-1/2 lg:w-3/5'>
            <h2 className=' font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className=' m-5 text-lg text-center'>  
                Añade Pacientes y {''}
                <span className=' text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit} // en react se utiliza handleSubmit a un submit
            className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5' 
            >   
             
                {error &&  <Error>'Todos los campos son obligatorios'</Error>} 
                <div className=' mb-5'>
                    <label htmlFor='mascota' className=' text-gray-700 block uppercase font-bold'>Nombre Mascota</label>
                    <input 
                    value={nombre} onChange={ (e) =>  
                    setNombre(e.target.value) } 
                    id='mascota' 
                    type="text" 
                    className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder='Nombre Mascota' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor='propietario' className=' text-gray-700 block uppercase font-bold'>Nombre Propietario</label>
                    <input 
                        value={propietario} onChange={ (e) =>  
                        setPropietario(e.target.value) } 
                        id='propietario' type="text" 
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                        placeholder='Nombre Propietario' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor='email' className=' text-gray-700 block uppercase font-bold'>Email</label>
                    <input 
                    value={email} onChange={ (e) =>  
                    setEmail(e.target.value) } 
                    id='email' 
                    type="email" 
                    className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder='Email' />
                </div>

                <div className=' mb-5'>
                    <label htmlFor='date' className=' text-gray-700 block uppercase font-bold'>Alta</label>
                    <input 
                    value={fecha} onChange={ (e) =>  
                    setFecha(e.target.value) } 
                    id='date'
                    type="date" 
                    className=' border-2 w-full p-2 mt-2  rounded-md'  />
                </div>

                <div className=' mb-5'>
                    <label htmlFor='sintomas' className=' text-gray-700 block uppercase font-bold'>Alta</label>
                   <textarea 
                   value={sintomas} onChange={ (e) =>  
                   setSintomas(e.target.value) } 
                   name="sintomas" 
                   id="sintomas" 
                   className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                   placeholder='Describe los sintomas' 
                   cols="10" 
                   rows="5"></textarea>
                </div>

                <input type="submit" value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}  className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' />

            </form>
        </div>
        
        
    );
}

export default Formulario;
