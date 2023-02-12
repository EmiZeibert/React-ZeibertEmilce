import { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../item/Item'


const ItemList = ({lista}) => {

    return (
        <div className='productoscard'>
            {lista.map((producto)=><Item key={producto.id} data={producto}/>)}
                                                
        </div>

    );

}
export default ItemList

