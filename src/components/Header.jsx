
function Header() {
    // Todos los componentes deben tener un return
    
    return (
    
        <h1 className=" font-black text-5xl text-center  md:w-2/3 mx-auto">
            Seguimiento Pacientes {' '}
            <span className=" text-indigo-600">Veterinaria</span>
        </h1>
        
        
    )
}

// Siempre deben tener un export para poder ser utilizados

export default Header