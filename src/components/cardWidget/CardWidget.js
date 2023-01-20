import './CardWidget.css'

const CardWidget = (props) => {

    return(
        
        <p className= "cardwidget">
        <p><i className='bi bi-cart4'></i> {props.cantidad}</p>
        </p>
        
    )

}

export default CardWidget;
