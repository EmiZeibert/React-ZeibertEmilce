import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import Imagen from '../../assets/img/imagenes.js';
import ItemDetailContainer from '../itemdetailcontainer/ItemDetailContainer';


const ItemDetail = (props) => {
 
    const { nombre, categoria,descripcion, precio, id } = props.data

     return (
        <article>
            <Card className='Card' style={{ width: '15rem' }}>
                <h1>DETALLE DEL PRODUCTO</h1>
                <div><img src={Imagen[id]} /></div>
                <Card.Header as="h5"><h1>{props.data.nombre}</h1></Card.Header>
                <Card.Body>
                    <Card.Title>${precio}</Card.Title>
                    <Card.Text>
                        {categoria}
                        {descripcion}
                    </Card.Text>
                    <Count stock={10} />
                </Card.Body>
       
            </Card>
        </article>
    )

}

export default ItemDetail