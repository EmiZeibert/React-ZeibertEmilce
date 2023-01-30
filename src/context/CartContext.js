
import { useContext, createContext,useState} from "react";

export const CartContext = createContext([])


export const useCartContext = () => { return useContext(CartContext)}


const CartProvider = ({children}) => {

 
    const [items, setItems] = useState([])

   
    console.log(items);

    const agregarAlCarrito = (data) => {

        if(validarProductoExistente(data.id)){

            alert("El producto ya esta en el carrito")
        }else {
            const listaActual = items
            listaActual.push(data)
            setItems(listaActual)
            console.log(items);
        }

    }

    const borrarProductoDelCarrito = (id) => {
        const nuevaLista = items.filter(e => e.id !== id)
        setItems(nuevaLista)
    }

    const limpiarCarrito = () => {
        setItems([])
    }

    const validarProductoExistente = (id) => {

        if(items.find(e=> e.id === id)) {
            return true
        } else {
            return false
        }

    }

    return(
        <CartContext.Provider value={{items, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
