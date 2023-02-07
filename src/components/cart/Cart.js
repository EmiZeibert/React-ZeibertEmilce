import './Cart.css'
const Cart = () => {

    return(
               <div>
          <div class="contenedor-carrito">
        <p id="carrito-vacio" class="carrito-vacio">Tu carrito esta vacio...</p>
        <div id="carrito-productos" class="carrito-productos disabled">
        </div>
        <div id="carrito-accion" class="carrito-accion disabled">
            <div class="carrito-accion-izq">
                <button id="carrito-accion-vaciar" class="carrito-accion-vaciar" >Vaciar carrito</button>
            </div>
            <div class="carrito-accion-der">
                <div class="carrito-accion-total">
                    <p>Total:</p>
                    <p id="total">$85000</p>
                </div>
                <button id="carrito-accion-comprar" class="carrito-accion-comprar" >Comprar ahora</button>
            </div>
        </div>
        <p id="carrito-comprado" class="carrito-comprado disabled">Muchas gracias por tu compra.</p>
    </div>
  
       </div>
        

    
        
    )

}


export default Cart