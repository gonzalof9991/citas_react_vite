import Formulario from "./components/formulario"
import Header from "./components/Header"
import Listadopacientes from "./components/ListadoPacientes"
import { useState, useEffect } from 'react'
function App() {
  
  // Se puede ocupar funciones , etc de JS
  const [pacientes, setPacientes] =  useState([])
  const [paciente, setPaciente ] = useState({})

  // Ver si hay algo en localStorage
  // los useEffect se ejecutan en orden de arriba a abajo
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [] // si no hay nada en el storage, se agrega el arreglo vacio
      setPacientes(pacientesLS)
    }

    obtenerLS()
  }, []) // si hay un arreglo vacio, solo se ejecuta una vez

  useEffect(() => {
    // Agregando a LocalStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    
  }, [pacientes]) // Cada vez que haya un cambio en pacientes, se ejecuta el codigo

  // Eliminar paciente

  const eliminarPaciente = id => {
      // filter: para eliminar paciente
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
      setPacientes(pacientesActualizados)
  }
 
  return (
    // puedes retornar un fragment sin ocupar un div
    // Cada componente debe retornar unn returm
    // Para poder mostrar codigo JS debe estar dentro de llaves
    <div className=" container mx-auto mt-32">
      <Header/>
      <div className=" mt-12 md:flex">
      <Formulario
        pacientes = {pacientes}
        setPacientes= {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
      />
      <Listadopacientes
        pacientes = {pacientes}
        setPaciente= {setPaciente}
        eliminarPaciente = {eliminarPaciente}
      />
      </div>
     
      
    </div>
  )
}

export default App
