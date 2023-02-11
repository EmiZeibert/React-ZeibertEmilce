import { useState } from 'react'
import './Count.css'

const Count = ({ stock, initial, agregar }) => {
    const [contador, setContador] = useState(initial)
    const addOne = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const disOne = () => {
        if (contador > 0) {
            setContador(contador - 1)

        }

    }

    return (

        <div className='contador-boton'>
            <div className='contador-boton-children'>
                <button className='masmenos' disabled={stock === 0} onClick={addOne}>+</button>
                <p className='masmenos'>{contador}</p>
                <button className='masmenos' disabled={stock === 0} onClick={disOne}>-</button>
            </div>
            <div className='contador-agregar'>
            <button disabled={stock === 0} onClick={()=>agregar(contador)}>Agregar al Carrito</button>
            </div>
        </div>

    )

}


export default Count;