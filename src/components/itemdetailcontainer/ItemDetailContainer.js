import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import './ItemDetailContainer.css'

import ItemDetail from '../itemdetail/ItemDetail'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    const { productoId } = useParams()

    useEffect(()=>{
        fetch(`../../productos.json/products/${productoId}`)
    .then(res=>res.json())
    .then(productos => setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos} />))
    },[productoId])


    return (
        <section className='detail-css'>
            <Link to="/productos">Volver a mis productos</Link>
            {productos}
        </section>
    )

}

export default ItemDetailContainer