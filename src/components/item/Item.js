import Card from 'react-bootstrap/Card';
import Count from '../../components/productos/contador/Count';
import './Item.css'
import { Link } from 'react-router-dom';
import Imagen from '../../assets/img/imagenes.js';



const Item = (props) => {

  const { nombre, categoria, precio, id} = props.data

  return (
    <Card className='Card' style={{ width: '15rem' }}>
    <div><img src={Imagen[id]} /></div>
          <Card.Header as="h5">{nombre}</Card.Header>
          <Card.Body>
              <Card.Title>${precio}</Card.Title>
              <Card.Text>
              {categoria}
              </Card.Text>
              <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
              <Count stock={10} />
      </Card.Body>
      </Card>


  )

}

export default Item


