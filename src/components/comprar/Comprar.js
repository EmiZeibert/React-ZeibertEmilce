import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Comprar.css';

const Comprar = () => {

  const { items, obtenerTotal, vaciarCarrito } = useContext(CartContext);

  return (

    <div className='resumen_compra'>
      <h4>Tu Pedido</h4>
      <div className='clave_resumen'>
        <p>PRODUCTO</p>
        <p>SUBTOTAL</p>
      </div>
      {
        items.map(item => (
          <div className='productos_resumen'>
            <div>
              <p>{item.nombre} - {item.precio} <span>x</span> {item.cantidad} </p>
            </div>
            <div>
              <p>${item.precioTotal} </p>
            </div>
          </div>
        ))
      }
      <div className='datos_finales'>
        <p>Monto final : ${obtenerTotal()}</p>
      </div>
      <div className='carrito-comprado'>
        <button type='sumbit'>Finalizar Compra</button>
        {
          <div className='exito'>
            <div className='resumen_de_compra'>
              <h4>¡Compra Exitosa!</h4>
            </div>
          </div>
        }
      </div>

    </div>

  )
}
export default Comprar



