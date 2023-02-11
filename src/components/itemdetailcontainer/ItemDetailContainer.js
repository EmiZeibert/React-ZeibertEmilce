import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../itemdetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  const [lista, setLista] = useState([])
  const { productoId } = useParams()

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(productos => setLista(productos.find((p) => p.id === productoId)))
  }, [productoId]);


  return (

    <div className='detail-css'>
      <ItemDetail key={lista.id} id={"producto" + lista.id} data={lista} />
      <Link to="/productos">Volver a mis productos</Link>
    </div>

  )

}

export default ItemDetailContainer