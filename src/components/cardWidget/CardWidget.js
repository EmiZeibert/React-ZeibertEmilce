import './CardWidget.css'

const CardWidget = (props) => {

    return(
               <div className='cart-box'>
        <p><i className='bi bi-cart4'></i>{props.cantidad}</p>
     </div>
    )

}

export default CardWidget;
