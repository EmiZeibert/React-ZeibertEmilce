
import './Home.css'
import Imagen from '../../assets/img/imagenes'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Home = (props) => {

   console.log("Home");
    
    return(
      <div>   
        <header className='home'>
                Productos destacados
            </header>
            <div className='card-destacadas'>
            <Card>
        <Card.Img variant="top" src={Imagen[1]} />
        <Card.Body>
          <Card.Text>
          Notebook Acer a solo $65000,resolucion de 1366 x 768 hd
          <Link to="/productos">Productos</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          Smartv a solo $73000, 43 pulgadas resolución 1920x1080p
          <Link to="/productos">Productos</Link>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Imagen[7]}/>
      </Card>
      <br />
      <Card >
        <Card.Body>
          <Card.Text>
          Auricular Newvision a solo $2500, súper liviano y cómodo
          <Link to="/productos">Productos</Link>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Imagen[9]}/>
      </Card>
      </div>
            </div>
             
    );

}

export default Home



 
   
 