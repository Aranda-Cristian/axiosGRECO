function TarjetaAutor({apellido, nombre}){
    return(
        <div className='Tarjeta'>
            <span> Nombre: {nombre}</span>
            <span> Apellido:{apellido}</span>
        </div>
    )
}
export default function ListadoAutores({autores}){
    return(
        <div className='Listado' >
            {autores.map((autor, index) => 
                <TarjetaAutor 
                    key={autor._id} 
                    apellido={autor.apellido} 
                    nombre={autor.nombre} 
                />
            )}

        </div>
    )

}