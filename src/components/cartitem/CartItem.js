import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = () => {
    const { eliminarProducto } = useContext(CartContext)
    

    return (
        <div className='contenedor_producto_carrito'>
            <div className='texto_producto_carrito'>
                <div className='claves'>
                    <p className='clave'>Nombre:</p>
                    <p className='clave'>Precio U.</p>
                    <p className='clave'>Cantidad</p>
                    <p className='clave'>Total</p>
                </div>

            </div>
            <div className='borrar-producto'>
                <p onClick={() => eliminarProducto()}><i className='bi bi-trash3'></i></p>
            </div>
        </div>
    )

}


export default CartItem

