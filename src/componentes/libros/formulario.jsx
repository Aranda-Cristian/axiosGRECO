import { useState } from "react";
export default function FormularioLibros({autores}) {
    const [titulo, setTitulo] = useState("");
    const [autor_id, setAutorId] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [isbn, setIsbn] = useState("");
    const [generos, setGeneros] = useState("");
    const guardar = (e) => {
        e.preventDefault();
    }
    return (
        <div className='Formulario' >
            <form className="FormContenedor" onSubmit={(e) => guardar(e)}>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="titulo" />
                <input type="text" value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} placeholder="sinopsis" />
                <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="isbn" />
                <input type="text" value={generos} onChange={(e) => setGeneros(e.target.value)} placeholder="genero" />

                <select value={autor_id} onChange={(e) => setAutorId(e.target.value)}>
                    {autores.map((autor, index) =>
                        <option key={autor._id} value={autor._id}>
                            {autor.nombre} {autor.apellido}
                        </option>
                    )}
                </select>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )

}