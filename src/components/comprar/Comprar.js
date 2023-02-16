import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { CartContext } from '../../context/CartContext';
import './Comprar.css'


const Comprar = () => {
    const { items, totalProductos, obtenerTotal } = useContext(CartContext);

    const form = [
        { name: "fname", placeholder: "Nombre" },
        { name: "lname", placeholder: "Apellido" },
        { name: "email", placeholder: "Correo electrónico" },
        { name: "email2", placeholder: "Repetir correo" },
        { name: "phone", placeholder: "Teléfono" },
    ]
    const handleOkOrder = () => {
        alert("La orden está en camino");
    }
    return (
        <Container className="p-5">
            {
                items.length > 0
                    ? (
                        <>
                            <h3 className="carrito-comprado">Para terminar, completá tus datos</h3>
                            <Container className="d-flex flex-row">
                                <h5>Tenés {totalProductos()} {totalProductos() === 1 ? 'producto' : 'productos'} por un total de $ {obtenerTotal(-3000)}</h5>
                            </Container>
                            <Form>
                                {form.map((m) => {
                                    return (
                                        <Form.Control
                                            key={m.name}
                                            className="m-3"
                                            name={m.name}
                                            placeholder={m.placeholder}
                                        />
                                    )
                                })}
                                <Button className="boton-enviar"
                                    onClick={handleOkOrder}
                                >Aceptar</Button>
                            </Form>
                        </>
                    )
                    : (
                        <h3 className="m-5">No se puede cerrar la orden porque el carrito está vacío</h3>
                    )
            }
        </Container>
    )
}



export default Comprar


