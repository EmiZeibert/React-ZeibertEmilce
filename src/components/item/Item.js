import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = (props) => {

  const { nombre, categoria, precio, id, imagen } = props.data

  return (
    <div>
      <Card className='Card' style={{ width: '15rem' }}>
        <div><img src={imagen} /></div>
                <Card.Body>
                <Card.Header as="h5">{nombre}</Card.Header>
          <Card.Title>${precio}</Card.Title>
          <Card.Text>
            {categoria}
          </Card.Text>
          <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
        </Card.Body>
      </Card>

    </div>
  )

}

export default Item


