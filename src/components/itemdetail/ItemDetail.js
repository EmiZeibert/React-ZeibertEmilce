import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import ItemListContainer from '../itemlistcontainer/ItemListContainer';

const ItemDetail = (props) => {

    const { nombre, categoria, descripcion, precio } = props.data
  
    return (
        <article className='itemDetail'>
            <h1>DETALLE DEL PRODUCTO</h1>
            <Card className='card-separated'>
                <Card.Header as="h5">{categoria}</Card.Header>
                <Card.Body>
                    <Card.Title>{nombre}{precio}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Count stock={10} />
                </Card.Body>
            </Card>
            <ItemListContainer />
        </article>
    )

}

export default ItemDetail