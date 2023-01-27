import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import Imagen from '../../assets/img/imagenes.js';
import ItemDetailContainer from '../itemdetailcontainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const ItemDetail = (props) => {

    const { nombre, categoria, precio, id } = props.data;
    const { productoId } = useParams()
    return (
        <article>
            <Card className='Card' style={{ width: '15rem' }}>
                <h1>DETALLE DEL PRODUCTO</h1>
                <div><img src={Imagen[id]} /></div>
                <Card.Header as="h5">{nombre}</Card.Header>
                <Card.Body>
                    <Card.Title>${precio}</Card.Title>
                    <Card.Text>
                        {categoria}
                    </Card.Text>
                    <Count stock={10} />
                </Card.Body>
                
            </Card>

        </article>
    )

}

export default ItemDetail