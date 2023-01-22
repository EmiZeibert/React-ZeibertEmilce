import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../itemdetail/ItemDetail'
import './ItemDetailContainer.css'



const ItemDetailContainer = () => {

    const [lista, setLista] = useState([])

    const { productoId } = useParams()

    useEffect(() => {
        fetch(`../productos.json${productoId}`)
            .then(res => res.json())
            .then(productos => setLista(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos} />))
    }, [productoId])


    return (
        <section className='detail-css'>
            <Link to="/productos">Volver a mis productos</Link>
           {productoId}
        </section>
    )

}

export default ItemDetailContainer