import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Hooks from '../contador/Hooks';


import './Producto.css'


const Producto = (props) => {

  return (
    <Card className='Card' style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.data.imagen} />
      <Card.Body className='card-body'>
        <Card.Title>{props.data.nombre}</Card.Title>
        <Card.Text className='Card-text'>
          {props.data.categoria}<Hooks/>
          </Card.Text>
        <Button variant="primary">{props.data.precio}</Button>
      </Card.Body>
    </Card>

  )

}

export default Producto;