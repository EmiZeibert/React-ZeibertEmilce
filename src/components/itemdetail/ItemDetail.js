import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'
import ItemListContainer from '../itemlistcontainer/ItemListContainer';

const ItemDetail = (props) => {

    const { nombre, categoria, descripcion, precio} = props.data
    
    return (
        <article className='itemDetail-producto'>
        <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
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
        <h1>MAS PRODUCTOS</h1>
        <ItemListContainer/>
    </article>


)

}

export default ItemDetail
