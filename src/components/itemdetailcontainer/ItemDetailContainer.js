import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ItemDetailContainer.css'
import ItemDetail from '../itemdetail/ItemDetail';

const ItemDetailContainer = (props) => {
  const [lista, setLista] = useState([])
  const { productoId } = useParams()
  
  useEffect(() => {
    fetch('../data/productos.json')
        .then(res => res.json())
        .then(productos => setLista(lista.find((productos) => productos.props === productoId)))
}, [productoId]);

console.log(lista)
  return (

    <div className='detail-css'>
      <Link to="/productos">Volver a mis productos</Link>
 {lista}
    </div>

  )

}

export default ItemDetailContainer