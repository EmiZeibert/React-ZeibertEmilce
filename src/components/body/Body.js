import ListaProductos from '../productos/listaProductos/ListaProductos';

import './Body.css'


const Body = () => {
const categoriaNombre= "Electrodomesticos"
    return(
        <div>
        <p>
          1.body
        </p>
        <ListaProductos categoria={categoriaNombre}></ListaProductos>
        </div>
    )

}

export default Body;
