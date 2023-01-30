import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Count from '../productos/contador/Count'




export const ItemDetail = (props) => {
    const { nombre, categoria, descripcion, precio, id,imagen } = props.data
      
     return (
        <article className='card-detail'>
            <Card className='card-d' style={{ width: '25rem' }}>
                <h2 className='tit'>DETALLE DEL PRODUCTO</h2>
                <div className='img-d'><img src={imagen} /></div>
                <Card.Header as="h5"><h1>{nombre}</h1></Card.Header>
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