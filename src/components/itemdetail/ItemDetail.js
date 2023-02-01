import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';

export const ItemDetail = (props) => {
    const { agregarAlCarrito } = useCartContext()

    const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0)

    const { nombre, categoria, descripcion, precio, imagen, id } = props.data
    
    const funcionDelHijoDeGuardarCantidad = (cantidadX) => {
        setCantidadDeProductosAComprar(cantidadX)
    }


    const onAdd = () => {

        if (cantidadDeProductosAComprar !== 0) {
            const producto = {
                id: id,
                nombre: nombre,
                categoria: categoria,
                precio: precio,
                count: cantidadDeProductosAComprar,
            }

            agregarAlCarrito(producto)
        } else {
            alert("No añadiste productos")
        }

    }
    return (
        <article className='card-detail'>
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
                    <Count stock={10} guardarCantidadAComprar={funcionDelHijoDeGuardarCantidad} />
                    <button onClick={onAdd} className="btn-buy">On Add</button>
                </Card.Body>
            </Card>
        </article>
    )

}

export default ItemDetail