import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Comprar.css';

const Comprar = (props) => {

  const { items, obtenerTotal} = useContext(CartContext);

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
              <p>{props.nombre} - {props.precio} <span>x</span> {props.cantidad} </p>
            </div>
            <div>
              <p>${props.precioTotal} </p>
            </div>
          </div>
        ))
      }
      <div className='datos_finales'>
        <p>Monto final:${obtenerTotal()}</p>
      </div>
      <div className='carrito-comprado'>
        <button className='botonC'>Finalizar Compra</button>
              </div>

    </div>

  )
}
export default Comprar



