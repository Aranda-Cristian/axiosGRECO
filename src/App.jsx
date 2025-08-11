import './App.css'
import Libros from './componentes/libros/main';
import Autores from './componentes/autores/main';
export default function App(){
  return(
    <div className='App'>
      <Autores />
      <Libros />
      
    </div>
  )

}