import './Home.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <section className='fondo'>
      <div className='imagenhome'>
        <img src="/imagen/img/home.jpg" />
      </div>
      <div>
        <header className='textohome'>
          <p>Encontra todo lo que buscas con los mejores precios y promociones mira nuestros productos destacados</p>
        </header>
        <div className='card-destacadas'>
          <Card>
            <Card.Body>
              <Card.Text>
                Notebook Acer a solo $65000,resolucion de 1366 x 768 hd
                <Link to="/productos">Productos</Link>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/assets/img/notebook85000.jpg" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>
                Smartv a solo $73000, 43 pulgadas resolución 1920x1080p
                <Link to="/productos">Productos</Link>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/assets/img/smart43.jpg" />
          </Card>
          <br />
          <Card >
            <Card.Body>
              <Card.Text>
                Auricular Redragon a solo $5000, súper liviano y cómodo
                <Link to="/productos">Productos</Link>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/assets/img/auricular5000.jpg" />
          </Card>
        </div>
      </div>
    </section>
  );

}

export default Home





