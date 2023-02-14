import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({ lista}) => {
    const {eliminarProducto} = useContext(CartContext)

    return (
        <div className='contenedor-producto-carrito'>
            <div className='lista-productos'>
                <ul className='lista-de-items'>
                    <li>
                        <img className='imagen_carrito' src={lista.data.imagen} alt={lista.data.imagen} />
                    </li>
                    <li className='lista-de-items'>
                        Nombre:{lista.data.nombre}
                    </li>
                    <li className='lista-de-items'>
                        Precio:{lista.data.precio}
                    </li>
                    <li className='lista-de-items'>
                        Cantidad:{lista.quantity}
                    </li>
                    <li className='lista-de-items'>
                        Total:${parseFloat(lista.quantity*lista.data.precio)}
                    </li>
                    <li className='lista-de-items'>
                        <span className='carrito-eliminar'onClick={() => eliminarProducto(lista.id)} ><i className='bi bi-trash3'></i></span>
                    </li>
                </ul>
                          </div>

        </div>
    )

}


export default CartItem

