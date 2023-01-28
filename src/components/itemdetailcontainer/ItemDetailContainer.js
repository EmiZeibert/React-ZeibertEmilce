import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../itemdetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = (props) => {
  const [lista, setLista] = useState([])
  const { productoId } = useParams()

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(productos => setLista(productos.find((p) => p.id === productoId)))
  }, [productoId]);


  return (

    <div className='detail-css'>
      <Link to="/productos">Volver a mis productos</Link>
<ItemDetail detalle={productoId}/>
    </div>


  )

}

export default ItemDetailContainer