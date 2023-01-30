import { useState ,useEffect } from "react"
import ItemList from '../itemlist/ItemList';
import './ItemListContainer.css'
import Item from '../item/Item';
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {

  const [lista, setLista] = useState([])
  const { categoriaId } = useParams();
  useEffect(() => {
      fetch('/data/productos.json')
          .then(res => res.json())
          .then(producto => setLista(producto.filter(producto =><Item key={producto.categoria} data={producto}/>)))
  }, [categoriaId]);

  const [categoriaNombre, setCategoriaNombre] = useState("")
 

  const cambiarCategoriaAudioVideo = () => {
    setCategoriaNombre("Audio y video")
    
  }
  const cambiarCategoriaCelularesNotebook = () => {
    setCategoriaNombre("Celulares y notebook")

  }
  const cambiarCategoriaTodos = () => {
    setCategoriaNombre("All")

  }
console.log(lista.categoria)
  return (
    <div className="categoria-style">
      <div className="categoria-1">
        <button onClick={cambiarCategoriaTodos}>Todos los productos</button>
        <button onClick={cambiarCategoriaAudioVideo}>Audio-video </button>
        <button onClick={cambiarCategoriaCelularesNotebook}>Celulares-notebook</button>
      </div>

      <div className="productosc" >
      <ItemList key={lista.categoria} id={"producto" + lista.categoria} data={lista} />
      <ItemList categoria={categoriaNombre}></ItemList>            
      </div>
    </div>

  )


}


export default ItemListContainer


