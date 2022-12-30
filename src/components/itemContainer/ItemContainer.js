import './ItemContainer.css'


const ItemContainer = (props) => {

    return(
        
        <p className="itemcontainer">
           Tenes todo lo que estas buscando en electro {props.saludo}
        </p>
        
    )

}

export default ItemContainer;