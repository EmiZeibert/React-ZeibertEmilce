import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'

import Imagen from '../../assets/img/imagenes.js';


const ItemDetailContainer = (props) => {
  const [lista, setLista] = useState([])
  const { productoId } = useParams()

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(productos => setLista(lista.find((productos) => productos.props.id === productoId)))
  }, [productoId])
  return (
    <article>
      <Card className='Card' style={{ width: '15rem' }}>
        <h1>DETALLE DEL PRODUCTO</h1>
        <div><img src={Imagen[props.id]} /></div>
        <Card.Header as="h5">{props.productoId}</Card.Header>
        <Card.Body>
          <Card.Title>${props.precio}</Card.Title>
          <Card.Text>
            {props.categoria}
            {props.descripcion}
          </Card.Text>
          <Count stock={10} />
        </Card.Body>
      </Card>
      <section className='detail-css'>
        <Link to="/productos">Volver a mis productos</Link>

      </section>

    </article>
  )

}

export default ItemDetailContainer