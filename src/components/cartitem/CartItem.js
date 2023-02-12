import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'


const CartItem = ({ lista }) => {
    const { eliminarProducto } = useContext(CartContext)

    return (
        <div className='contenedor-producto-carrito'>
            <div className='lista-productos'>
                <ul className='lista-de-items'>
                    <li>
                        <img className='imagen_carrito' src={lista.data.imagen} alt={lista.data.imagen} />
                    </li>
                    <li>
                        Nombre:{lista.data.nombre}
                    </li>
                    <li>
                        Precio:{lista.data.precio}
                    </li>
                    <li>
                        Cantidad:{lista.quantity}
                    </li>
                    <li>
                        Total:{lista.precioTotal}
                    </li>
                    <li>
                        <p className='carrito-eliminar' onClick={() => eliminarProducto(lista.id)} ><i className='bi bi-trash3'></i></p>
                    </li>
                </ul>

            </div>

        </div>
    )

}


export default CartItem

