import { useState } from "react"

import ListaProductos from '../productos/listaProductos/ListaProductos';


import './Body.css'


const Body = () => {
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
        <ListaProductos categoria={categoriaNombre}></ListaProductos>
        </div>
    </div>
  )

}

export default Body;
