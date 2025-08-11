import { useState } from "react";
export default function FormularioAutores(){
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    return(
        <div className='Formulario' >
            <div className="FormContenedor">
                <input type="text" placeholder="Nombres" onChange={(e) => setNombres(e.target.value)} value={nombres}/>
                <input type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} value={apellidos}/>
                <button>Guardar</button>
            </div>

        </div>
    )

}