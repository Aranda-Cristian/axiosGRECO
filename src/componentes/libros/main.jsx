import FormularioLibros from "./formulario"
import ListadoLibros from "./listado";
export default function Libros() {
    return(
        <div className="Seccion" style={{backgroundColor: 'lightcoral'}}>
            <FormularioLibros/>
            <ListadoLibros/>
            
        </div>
    )
}