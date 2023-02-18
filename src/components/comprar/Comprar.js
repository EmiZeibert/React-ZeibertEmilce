import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Comprar.css'
import React, { useState, useContext } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../service/FireBase";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Comprar.css'

const Comprar = ({ lista }) => {

  const { items, obtenerTotal, limpiarCarrito } = useContext(CartContext);

  const [numOrden, setNumOrden] = useState(undefined)

  const [datosOrden, setDatosOrden] = useState()

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

  const enviarOrden = async (orden) => {

    const queryRef = collection(db, "ordenes")
    const response = await addDoc(queryRef, orden)
    setNumOrden(response.id)
    limpiarCarrito()
  }

  return (
    <Formik
      initialValues={{
        nombre: '',
        telefono: '',
        email: '',
        provincia: '',
        calle: '',
        localidad: '',
        numero: '',
        postal: ''
      }}
      validate={(valores) => {
        let errores = {}

        if (!valores.nombre) {
          errores.nombre = 'ingrese nombre y apellido.'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,25}$/.test(valores.nombre)) {
          errores.nombre = 'Solo deben ingresarse letras o espacios.'
        }
        if (!valores.telefono) {
          errores.telefono = 'ingresa un número de telefono.'
        } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.telefono)) {
          errores.telefono = 'El número no es valido.'
        }
        if (!valores.email) {
          errores.email = 'ingresa un email.'
        } else if (!/^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valores.email)) {
          errores.email = 'El email no es valido.'
        }
        if (!valores.provincia) {
          errores.provincia = 'ingresa una provincia.'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.provincia)) {
          errores.provincia = 'Solo deben ingresarse letras o espacios.'
        }
        if (!valores.localidad) {
          errores.localidad = 'ingresa una localidad.'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.localidad)) {
          errores.localidad = 'Solo deben ingresarse letras o espacios.'
        }
        if (!valores.calle) {
          errores.calle = 'ingresa una calle.'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.calle)) {
          errores.calle = 'Solo deben ingresarse letras o espacios.'
        }
        if (!valores.numero) {
          errores.numero = 'ingresa el número de la calle.'
        } else if (!/^[0-9]{1,5}$/.test(valores.numero)) {
          errores.numero = 'El número no es valido.'
        }
        if (!valores.postal) {
          errores.postal = 'ingresa el codigo postal.'
        } else if (!/^[0-9]{1,4}$/.test(valores.postal)) {
          errores.postal = 'El codigo postal no es valido.'
        }
        return errores
      }}

      onSubmit={(validar, { resetForm }) => {

        const nuevaOrden = {
          comprador: {
            nombre: validar.nombre,
            telefono: validar.telefono,
            email: validar.email,
            provincia: validar.provincia,
            localidad: validar.localidad,
            calle: validar.calle,
            numeroCalle: validar.numero,
            codigoPostal: validar.postal
          },
          item: items,
          total: obtenerTotal(),
        }
        setDatosOrden(nuevaOrden)
        resetForm();
        enviarOrden(nuevaOrden)
        cambiarFormularioEnviado(true)
      }}>
      {({ errors }) => (
        <Form>
          <div className='carrito-compradocss'>
            {!formularioEnviado ? (
              <div>
                <div className='carrito-comprado'>
                  <h4>Para finalizar debes rellenar los siguientes datos</h4>
                  <div className='datos'>
                    <div>
                      <label htmlFor='Nombre'>Nombre Y Apellido</label>
                      <Field
                        type="text"
                        id="nombre"
                        name="nombre"
                        autoComplete='off' />
                      <ErrorMessage name='nombre' component={() => (
                        <div className='error'>{errors.nombre}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='Telefono'>Telefono</label>
                      <Field
                        type="number"
                        id="telefono"
                        name="telefono"
                        autoComplete='off' />
                      <ErrorMessage name='telefono' component={() => (
                        <div className='error'>{errors.telefono}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='Email'>Email</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        autoComplete='off' />
                      <ErrorMessage name='email' component={() => (
                        <div className='error'>{errors.email}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='Calle'>Calle</label>
                      <Field
                        type="text"
                        id="calle"
                        name="calle"
                        autoComplete='off' />
                      <ErrorMessage name='calle' component={() => (
                        <div className='error'>{errors.calle}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='Calle'>Número</label>
                      <Field
                        type="number"
                        id="numero"
                        name="numero"
                        autoComplete='off' />
                      <ErrorMessage name='numero' component={() => (
                        <div className='error'>{errors.numero}</div>
                      )} />

                    </div>
                    <div>
                      <label htmlFor='Localidad'>Localidad</label>
                      <Field
                        type="text"
                        id="localidad"
                        name="localidad"
                        autoComplete='off' />
                      <ErrorMessage name='localidad' component={() => (
                        <div className='error'>{errors.localidad}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='Provincia'>Provincia</label>
                      <Field
                        type="text"
                        id="provincia"
                        name="provincia"
                        autoComplete='off' />
                      <ErrorMessage name='provincia' component={() => (
                        <div className='error'>{errors.provincia}</div>
                      )} />
                    </div>
                    <div>
                      <label htmlFor='CodigoPostal'>Codigo Postal</label>
                      <Field
                        type="number"
                        id="postal"
                        name="postal"
                        autoComplete='off' />
                      <ErrorMessage name='postal' component={() => (
                        <div className='error'>{errors.postal}</div>
                      )} />
                    </div>
                  </div>
                </div>
                <div className='pedido'>
                  <h4>Tu Pedido</h4>
                  {
                    items.map(lista => (
                      <div>
                        <div>
                          <p>{lista.data.nombre} - Precio:{lista.data.precio} - Cantidad:{lista.quantity} </p>
                        </div>
                      </div>
                    ))
                  }
                  <div>
                    <p>Monto final : ${obtenerTotal()}</p>
                  </div>
                </div>
                <div className='finalizar-compra1'>
                  <button type='sumbit'>Finalizar Compra</button>
                  {
                    formularioEnviado &&
                    <div className='exito'>
                      <div className='resumen-de-compra'>
                        <h4>¡Compra Exitosa!</h4>
                        <p> <span>Número de orden:</span> {numOrden}</p>
                        <hr/>
                        <div>
                          <p>Nombre:<span>{datosOrden.comprador.nombre}</span></p>
                          <p>Telefono: <span>{datosOrden.comprador.telefono}</span></p>
                          <p>Email: <span>{datosOrden.comprador.email}</span></p>
                          <p>Provincia: <span>{datosOrden.comprador.provincia}</span></p>
                          <p>Localidad: <span>{datosOrden.comprador.localidad}</span></p>
                          <p>Calle:<span>{datosOrden.comprador.calle}</span></p>
                          <p >Numero: <span>{datosOrden.comprador.numeroCalle}</span></p>
                          <p>Codigo Postal: <span>{datosOrden.comprador.codigoPostal}</span></p>
                        </div>
                        <hr/>
                        <div >
                          <p>Total: <span>${datosOrden.total}</span></p>
                        </div>
                      </div>
                      <div >
                        <Link to="/productos" className='seguir_comprando'>Seguir Comprando</Link>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ) : (
              <div>
                {
                  formularioEnviado &&
                  <div className='exito'>
                    <div className='resumen-de-compra'>
                      <h4>¡Compra Exitosa!</h4>
                      <p> <span>Número de orden:</span>{numOrden}</p>
                      <hr className='linea_separativa' />
                      <div>
                        <p>Nombre: <span>{datosOrden.comprador.nombre}</span></p>
                        <p>Telefono: <span>{datosOrden.comprador.telefono}</span></p>
                        <p>Email: <span>{datosOrden.comprador.email}</span></p>
                        <p>Provincia: <span>{datosOrden.comprador.provincia}</span></p>
                        <p>Localidad: <span>{datosOrden.comprador.localidad}</span></p>
                        <p>Calle: <span>{datosOrden.comprador.calle}</span></p>
                        <p>Numero: <span>{datosOrden.comprador.numeroCalle}</span></p>
                        <p>Codigo Postal: <span>{datosOrden.comprador.codigoPostal}</span></p>
                      </div>
                      <hr/>
                      <div>
                        <p>Total: <span>${datosOrden.total}</span></p>
                      </div>
                    </div>
                    <div>
                      <Link to="/productos" onClick={limpiarCarrito}>Seguir Comprando</Link>
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Comprar


