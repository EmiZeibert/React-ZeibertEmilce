import { useContext } from "react"
import { Container, Form } from "react-bootstrap"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Comprar.css'
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const Comprar = () => {
  const { items, totalProductos, obtenerTotal } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  };

  return (
    <Container className="carrito-comprado">
            {
        items.length > 0
          ? (
            <>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <h3 className="texcomprado">Para terminar, completá tus datos</h3>
                <h5>Tenés {totalProductos()} {totalProductos() === 1 ? 'producto' : 'productos'} por un total de $ {obtenerTotal()}</h5>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Nombre"
                      defaultValue="Jose"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Apellido"
                      defaultValue="Perez"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                      <Form.Control.Feedback type="invalid">
                        Ingrese su nombre y apellido.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Telefono" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una numero válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="Mail" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una mail válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control type="text" placeholder="Calle" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una Calle válida.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="number" placeholder="numeracion" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una Numero válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una Ciudad válida.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control type="text" placeholder="Provincia" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione una Provincia válida.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control type="number" placeholder="Codigo Postal" required />
                    <Form.Control.Feedback type="invalid">
                      Proporcione un código postal válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Acepto terminos y condiciones"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Link to="/CompraFinal"><button className='carrito-comprar'>Finalizar compra</button></Link>
              </Form>
            </>
          )
          : (
            <h3 className="m-5">No se puede cerrar la orden porque el carrito está vacío</h3>
          )
      }
    </Container>
  );
}




export default Comprar


