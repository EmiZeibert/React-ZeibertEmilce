import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartListContainer.css'
import Item from "../item/Item"
import CartItem from "../cartitem/CartItem"


const CartListContainer = ({lista}) => {

    const { items, limpiarCarrito, obtenerTotal } = useContext(CartContext);


    return (
        <div className='contenedor-carrito' >
            <div className='contenedor-carrito2'>
                <h3>Carrito</h3>
            </div>
            <div className=".carrito-accion-vaciar">
                <button onClick={limpiarCarrito}>Vaciar Carrito</button>
                
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
                                <p>Monto final : ${obtenerTotal()}</p>
                            </div>
                            <div className='carrito-accion-comprar '>
                                <Link to="/productos" className='seguir_comprando'>Seguir Comprando</Link>
                                <Link to="/comprar"><button>Continuar la compra</button></Link>
                             
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
