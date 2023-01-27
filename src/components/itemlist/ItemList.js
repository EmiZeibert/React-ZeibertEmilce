import { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../item/Item'
import { useParams} from 'react-router-dom'
 

const ItemList = () => {

    const [lista, setLista] = useState([])

        const { categoriaId } = useParams();
        
    useEffect(() => {
        fetch('../data/productos.json')
            .then(res => res.json())
            .then(producto => setLista(producto.map(producto =><Item key={producto.id} data={producto}/>)))
    }, [categoriaId]);

    return (
        <div className='productoscard'>
            {lista}
                                      
        </div>

    );

}
export default ItemList

