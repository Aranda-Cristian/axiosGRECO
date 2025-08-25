import FormularioLibros from "./formulario"
import ListadoLibros from "./listado";
const libroejemplo = [{
    _id: 1,
    titulo: "Cien años de soledad",
    sinopsis: "Una novela que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
    isbn: "978-3-16-148410-0",
    generos: "Realismo mágico",
    autor: {
        _id: 1,
        nombre: "Gabriel",
        apellido: "García Márquez"
    }
}
, {
    _id: 2,
    titulo: "Cien años de soledad",
    sinopsis: "Una novela que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
    isbn: "978-3-16-148410-0",
    generos: "Realismo mágico",
    autor: {
        _id: 1,
        nombre: "Gabriel",
        apellido: "García Márquez"
    }
}, {
    _id: 3,
    titulo: "Cien años de soledad",
    sinopsis: "Una novela que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
    isbn: "978-3-16-148410-0",
    generos: "Realismo mágico",
    autor: {
        _id: 1,
        nombre: "Gabriel",
        apellido: "García Márquez"
    }
}
]
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
export default function Libros() {
    const eliminar = (autor_id) => {}
    const guardar = (datos) => {}
    return(
        <div className="Seccion" style={{backgroundColor: 'lightcoral'}}>
            <FormularioLibros
            autores={autorejemplo}
            guardar={(datos) => guardar(datos)}
            />
            <ListadoLibros
            libros={libroejemplo}
            eliminar={(libro_id) => eliminar(libro_id)}
            />
            
        </div>
    )
}