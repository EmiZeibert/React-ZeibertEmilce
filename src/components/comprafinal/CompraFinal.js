import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CompraFinal.css'

const CompraFinal = () => {

    const { totalProductos, obtenerTotal, limpiarCarrito} = useContext(CartContext);

    return (

        <div className='carrito-comprado2'>
            <p className='textocompra'>Tu compra se realizo con exito:</p>
            <p>Monto final:${obtenerTotal()}</p>
            <p>Cantidad:{totalProductos()}</p>
            <p>Recibiras el informe de tu compra en las proximas 24hs</p>
            <Link to="/productos"onClick={limpiarCarrito}>Gracias por su compra</Link>
        </div>

    )
}

export default CompraFinal

