import { useState } from "react";
export default function FormularioAutores({guardarAutor}){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const guardar = (e) =>{
        e.preventDefault();
        const autor = {
            nombre,
            apellido
        }
        guardarAutor(autor)
    }
    
    
    return(
        <div className='Formulario' >
            <form className="FormContenedor" onSubmit={(e) => guardar(e)}>
                <input type="text" placeholder="Nombres" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                <input type="text" placeholder="Apellidos" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )

}