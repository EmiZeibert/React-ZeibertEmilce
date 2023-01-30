import { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../item/Item'

 

const ItemList = () => {

    const [lista, setLista] = useState([])

              
    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(producto => setLista(producto.map(producto =><Item key={producto.id} data={producto}/>)))
    }, []);

    return (
        <div className='productoscard'>
            {lista}
                                      
        </div>

    );

}
export default ItemList

