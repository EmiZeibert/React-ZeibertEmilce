import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';

export const ItemDetail = (props) => {

    const { agregarAlCarrito } = useCartContext()

    const [cantidad, setCantidad] = useState(0)

    const agregar = (contador) => {
        agregarAlCarrito(props,contador);
        setCantidad(contador);
    }

    const { nombre, categoria, descripcion, precio, imagen, stock } = props.data
console.log(props)
    return (
        <section className='card-detail'>
            <Card className='card-d' style={{ width: '25rem' }}>
                <h2 className='tit'>DETALLE DEL PRODUCTO</h2>
                <div className='img-d'><img src={imagen} /></div>
                <Card.Body>
                    <Card.Header as="h5">{nombre}</Card.Header>
                    <Card.Title>${precio}</Card.Title>
                    <Card.Text>
                        {categoria}
                        {descripcion}
                    </Card.Text>
                    <Count initial={1} stock={stock} agregar={agregar}/>
                    {
                        cantidad > 0 &&
                        <p className='agregado_exitoso'>¡Producto Agregado con Exito!</p>
                    }
                </Card.Body>
            </Card>
        </section>
    )

}

export default ItemDetail

