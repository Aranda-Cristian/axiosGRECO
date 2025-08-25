function TarjetaAutor({apellido, nombre, eliminar}){
    return(
        <div className='Tarjeta'>
            <span className="Eliminar" onClick={() => eliminar()}>X</span>
            <span> Nombre: {nombre}</span>
            <span> Apellido:{apellido}</span>
        </div>
    )
}
export default function ListadoAutores({autores, eliminar}){
    return(
        <div className='Listado' >
            {autores.map((autor, index) => 
                <TarjetaAutor 
                    key={autor._id} 
                    apellido={autor.apellido} 
                    nombre={autor.nombre} 
                    eliminar={() => eliminar(autor._id)} 
                />
            )}

        </div>
    )

}