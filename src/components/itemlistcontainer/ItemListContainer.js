import { useState } from "react"
import ItemList from '../itemlist/ItemList';
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const [categoriaNombre, setCategoriaNombre] = useState("")


  const cambiarCategoriaAudioVideo = () => {
    setCategoriaNombre("Audio-video")

  }
  const cambiarCategoriaCelularesNotebook = () => {
    setCategoriaNombre("Celulares-notebook")

  }
  const cambiarCategoriaTodos = () => {
    setCategoriaNombre("Todos los productos")

  }
  return (
    <div className="categoria-style">
      <div className="categoria-1">
        <button onClick={cambiarCategoriaTodos}>Todos los productos</button>
        <button onClick={cambiarCategoriaAudioVideo}>Audio-video</button>
        <button onClick={cambiarCategoriaCelularesNotebook}>Celulares-notebook</button>
      </div>
      <div className="productosc" >
        <ItemList categoria={categoriaNombre}></ItemList>
      </div>
    </div>

  )


}


export default ItemListContainer


