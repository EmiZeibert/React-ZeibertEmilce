import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({lista}) => {
    const { eliminarProducto } = useContext(CartContext)
    return (
        <div className='contenedor-producto-carrito'>
            <div className='texto-producto-carrito'>
                <div className='lista-de-items'>
                    <ul className='lista-de-items'>
                        <li>
                            Nombre:{lista.nombre}
                        </li>
                        <li>
                            Precio:{lista.precio}
                        </li>
                        <li>
                            Cantidad:{lista.quantity}
                        </li>
                        <li>
                            Total:{lista.total}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='borrar-producto'>
                <p onClick={() => eliminarProducto(lista.id)}><i className='bi bi-trash3'></i></p>

            </div>
        </div>
    )

}


export default CartItem

