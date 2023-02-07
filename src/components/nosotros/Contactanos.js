import './Contactanos.css'
import img from "./img/sucursal.jpg";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Contactanos = () => {

  return (
    <div className='nosotros'>
      <div className='envio'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text>
              <p>
                Envio a TODO EL PAIS a cargo de correo andreani en Rosario, Santa Fe y Capital Federal el envio es gratis</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='sucursal'>
        <h2 className='ttsucursal'>Sucursales</h2>
        <ListGroup.Item><i class="bi bi-caret-right">Santa Fe 2700, Rosario, Santa Fe</i></ListGroup.Item>
        <ListGroup.Item><i class="bi bi-caret-right">Buenos Aires 5600, Santa Fe</i></ListGroup.Item>
        <ListGroup.Item><i class="bi bi-caret-right">San martin 8741, Capital Federal</i></ListGroup.Item>
        <ListGroup.Item><i class="bi bi-caret-right">Contactanos: 341-49586514 / 11-48752125</i></ListGroup.Item>
        <Card.Link className='linkredes' href="https://www.instagram.com/"><i class="bi bi-instagram">Instagram</i></Card.Link>
        <Card.Link className='linkredes' href="https://web.whatsapp.com/"><i class="bi bi-whatsapp">Whatsapp</i></Card.Link>
      </div>
    </div>
  );
}


export default Contactanos;

