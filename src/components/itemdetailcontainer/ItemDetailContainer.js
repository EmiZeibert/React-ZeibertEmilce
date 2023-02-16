import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/FireBase";
import ItemDetail from '../itemdetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [lista, setLista] = useState({})
  const { productoId } = useParams()

  useEffect(() => {
    const getProducto = async () => {
      const queryRef = doc(db,"listaproductos",productoId);
      const response = await getDoc(queryRef);
      const newDoc = {
        id:response.id,
        ...response.data()
      }
          setLista(newDoc);
    }
    getProducto();
  }, [productoId])


  return (

    <div className='detail-css'>
      <ItemDetail key={lista.id} id={"producto" + lista.id} data={lista} />
      <Link to="/productos">Volver a mis productos</Link>
    </div>

  )

}

export default ItemDetailContainer