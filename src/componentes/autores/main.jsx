import FormularioAutores from "./formulario"
import ListadoAutores from "./listado";
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
    return(
        <div className="Seccion" style={{backgroundColor: 'lightcyan'}}>
            <FormularioAutores
            
            />
            <ListadoAutores
            autores={autorejemplo}
            />
        </div>
    )
}