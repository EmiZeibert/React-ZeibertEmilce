import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import ItemList from '../itemlist/ItemList'
import Imagen from '../../assets/img/imagenes.js';

const ItemDetail = (props) => {

    const { nombre, categoria, descripcion, precio, id } = props.data
       
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
                        {descripcion}
                    </Card.Text>
                    <Count stock={10} />
                </Card.Body>
            </Card>
            <ItemList></ItemList>

        </article>
    )

}

export default ItemDetail