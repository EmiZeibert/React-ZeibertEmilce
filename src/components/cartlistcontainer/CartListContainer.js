import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartListContainer.css'
import CartItem from "../cartitem/CartItem"


const CartListContainer = () => {

    const { items, limpiarCarrito, obtenerTotal } = useContext(CartContext);


    return (
        <div className='contenedor-carrito'>
            <h3 className='tPrincipal'>Carrito</h3>
           <div className="boton-vaciar">
            <button className="carrito-accion-vaciar"onClick={limpiarCarrito}>Vaciar Carrito</button>
            </div>
            <div className='carrito-productos'>
                {
                    items.length > 0 ?
                        <div>
                            {
                                items.map(lista => (
                                    <CartItem key={lista.id} lista={lista} />

                                ))
                            }
                            <div className='carrito-accion-total'>
                                <p>Monto final:${obtenerTotal()}</p>
                            </div>
                            <div className='carrito-accion-comprar'>
                                <Link to="/productos" className='seguir_comprando'>Seguir Comprando</Link>
                                <Link to="/comprar"><button className='carrito-comprar'>Continuar la compra</button></Link>
                            </div>
                        </div>
                        :
                        <div className='carrito-vacio'>No has agregado productos.</div>
                }
            </div>
        </div>
    )
}

export default CartListContainer
