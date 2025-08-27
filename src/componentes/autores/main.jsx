import FormularioAutores from "./formulario"
import { useEffect, useState } from "react";
import ListadoAutores from "./listado";
import axios from "axios";
const autorejemplo = [
    {
        _id: 1,
        nombre: "Gabriel",
        apellido: "García Márquez"
    },
    {
        _id: 2,
        nombre: "Julio",
        apellido: "Cortázar"
    },
    {
        _id: 3,
        nombre: "Mario",
        apellido: "Vargas Llosa"
    },
    {
        _id: 1,
        nombre: "Gabriel",
        apellido: "García Márquez"
    },
    {
        _id: 2,
        nombre: "Julio",
        apellido: "Cortázar"
    },
    {
        _id: 3,
        nombre: "Mario",
        apellido: "Vargas Llosa"
    }
];

export default function Autores() {
    const [autores, setAutores] = useState([])
    const eliminar = (autor_id) => {}
    const guardar = (datos) => {
        const url = "https://api-libros.ctpoba.edu.ar/v1/autores/"
        const config = {
            headers: {authorization: "123456"}
        }
        axios.post(url, datos, config)
        .then((resp) => {
            console.log(resp.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }

    const obtenerAutores = () =>{
    const url = "https://api-libros.ctpoba.edu.ar/v1/autores/";
    axios.get(url)
    .then((resp) => {
        setAutores(resp.data.autores)
    })
    .catch((error) =>{

        console.log(error)

    })
    }
    
    useEffect(() =>{
     obtenerAutores();
    },[])
    

    return(
        <div className="Seccion" style={{backgroundColor: 'lightcyan'}}>
            <FormularioAutores
            guardarAutor={(datos) => guardar(datos)}
            
            />
            <ListadoAutores
            autores={autores}
            eliminar={(autor_id) => eliminar(autor_id)}
            />
        </div>
    )
}