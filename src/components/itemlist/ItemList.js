import { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../item/Item'
import { useParams } from 'react-router-dom'


const ItemList = (props) => {
    const [lista, setLista] = useState([])
    const { categoriaId } = useParams();
    useEffect(() => {
        fetch('../productos.json')
            .then(res => res.json())
            .then(json => setLista(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />)))
    }, []);

    const categoria = lista.filter(productos => productos.id === categoriaId);
    
    return (
        <div className='productoscard'>
           {lista}
        </div>

    );

}
export default ItemList