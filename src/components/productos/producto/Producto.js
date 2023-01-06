import './Producto.css'


const Producto = (props) => {

    return(
        
        <p>
         --3.{props.data.categoria}{props.data.nombre}{props.data.imagen}{props.data.precio}
        </p>
        
    )

}

export default Producto;