import { useState } from 'react'
import './Count.css'

const Hooks = (props) => {

    const [contador, setContador] = useState(0)
    const addOne = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
            props.guardarCantidadAComprar(contador)
        }
    }

    const disOne = () => {
        if (contador > 0) {
            setContador(contador - 1)
            props.guardarCantidadAComprar(contador)
        }

    }

    return (

        <div className='contador-boton'>
            <div className='contador-boton-children'>
                <button className='masmenos' onClick={addOne}>+</button>
                <p className='masmenos'>{contador}</p>
                <button className='masmenos' onClick={disOne}>-</button>
            </div>
        </div>

    )

}



export default Hooks;