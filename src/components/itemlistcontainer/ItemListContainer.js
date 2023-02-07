import { useState ,useEffect } from "react"
import ItemList from '../itemlist/ItemList';
import './ItemListContainer.css'
import Item from '../item/Item';
import { useNavigate, useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

  const [lista, setLista] = useState([])
  const { categoriaId } = useParams();
  const navegar= useNavigate()
  useEffect(() => {
      fetch('../data/productos.json')
          .then(res => res.json())
          .then(producto => {
            if(categoriaId){
              setLista(producto.filter((item)=> item.categoria === categoriaId))
            }else{
              setLista(producto)
            }
          })
  }, [categoriaId]);

  return (
    <div className="categoria-style">
      <div className="categoria-1">
        <button className="botonC" onClick={()=>navegar('/productos')}>Todos los productos</button>
        <button className="botonC" onClick={()=>navegar('/productos/Audio y video')}>Audio-video </button>
        <button  className="botonC"onClick={()=>navegar('/productos/Celulares y notebook')}>Celulares-notebook</button>
      </div>

      <div className="productosc" >
        <ItemList lista={lista} />
      </div>
    </div>

  )

}

export default ItemListContainer

