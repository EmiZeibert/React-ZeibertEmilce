import { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../item/Item'



const ItemList =(props) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('../../productos.json')
            .then(res => res.json())
            .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
    }, []);
       return (
        <div className='productoscard'>
          {productos} 
       
    </div>
    );


}
export default ItemList


    