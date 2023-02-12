import { useContext, createContext, useState } from "react";
export const CartContext = createContext([])
export const useCartContext = () => { return useContext(CartContext) }


const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const validarProductoExistente = (id) => {
        const elementoExistente = items.some((elemento) => elemento.id === id);
        return elementoExistente;
    }

    const agregarAlCarrito = (producto, qty) => {
        const newList = [...items];

        if (validarProductoExistente(producto.id)) {
            const productoIndex = items.findIndex(element => element.id === producto.id);

            newList[productoIndex].quantity = newList[productoIndex].quantity + qty;

            newList[productoIndex].precioTotal = newList[productoIndex].quantity * newList[productoIndex].precio;

            setItems(newList)

        } else {
            const newProducto = { ...producto, quantity: qty, precioTotal: qty * producto.precio }
            const newList = [...items];
            newList.push(newProducto);
            setItems(newList);
        }
    }

    const eliminarProducto = (idProducto) => {
        const copiaArray = [...items];
        const newArray = copiaArray.filter(elm => elm.id !== idProducto);
        setItems(newArray);
    }
    const limpiarCarrito = () => {
        setItems([])
    }

    const totalProductos = () => {
        const totalProductos = items.reduce((acc, item) => acc + item.quantity,0);
        return totalProductos;
    }

    const obtenerTotal = () => {
        let total =0
        items.forEach((e) => total += (e.quantity * e.precio))
        return total
    };
  

    return (
        <CartContext.Provider value={{
            items, agregarAlCarrito, eliminarProducto,
            limpiarCarrito, validarProductoExistente, totalProductos, obtenerTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

