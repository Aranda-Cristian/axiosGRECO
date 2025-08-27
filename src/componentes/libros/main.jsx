import { useEffect, useState } from "react";
import FormularioLibros from "./formulario"
import ListadoLibros from "./listado";
import axios from "axios";


export default function Libros() {
    const [libros, setLibros] = useState([])
    const [autores, setAutores] = useState([])
    const eliminar = (autor_id) => {}
    const guardar = (datos) => {
         const url = "https://api-libros.ctpoba.edu.ar/v1/libros/"
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
    const obtenerLibros = () =>{
        const url = "https://api-libros.ctpoba.edu.ar/v1/libros/";
    axios.get(url)
    .then((resp) => {
        setLibros(resp.data.libros)
    })
    .catch((error) =>{

        console.log(error)

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
     obtenerLibros();
    },[])

    return(
        <div className="Seccion" style={{backgroundColor: 'lightcoral'}}>
            <FormularioLibros
            autores={autores}
            guardarLibro={(datos) => guardar(datos)}
            />
            <ListadoLibros
            libros={libros}
            eliminar={(libro_id) => eliminar(libro_id)}
            />
            
        </div>
    )
}