import { useState } from "react"
import ItemList from '../itemlist/ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {

  const [categoriaNombre, setCategoriaNombre] = useState("")
  const { categoriaId } = useParams();

  const cambiarCategoriaAudioVideo = () => {
    setCategoriaNombre("Audio y video")
    
  }
  const cambiarCategoriaCelularesNotebook = () => {
    setCategoriaNombre("Celulares y notebook")

  }
  const cambiarCategoriaTodos = () => {
    setCategoriaNombre("All")

  }

  return (
    <div className="categoria-style">
      <div className="categoria-1">
        <button onClick={cambiarCategoriaTodos}>Todos los productos</button>
        <button onClick={cambiarCategoriaAudioVideo}>Audio-video </button>
        <button onClick={cambiarCategoriaCelularesNotebook}>Celulares-notebook</button>
      </div>

      <div className="productosc" >
      <ItemList categoria={categoriaNombre}></ItemList>
                       
      </div>
    </div>

  )


}


export default ItemListContainer


