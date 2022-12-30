import './CardWidget.css'

const CardWidget = (props) => {

    return(
        
        <p className= "cardwidget">
           <i class="bi bi-cart4"></i>{props.cantidad}
        </p>
        
    )

}

export default CardWidget;