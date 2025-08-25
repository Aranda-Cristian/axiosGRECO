import { useState } from "react";
export default function FormularioAutores(){
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const guardar = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className='Formulario' >
            <form className="FormContenedor" onSubmit={(e) => guardar(e)}>
                <input type="text" placeholder="Nombres" onChange={(e) => setNombres(e.target.value)} value={nombres}/>
                <input type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} value={apellidos}/>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )

}