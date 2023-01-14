import { useState } from 'react'
import './Hooks.css'

const Hooks = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div className='contador-boton'>
            <button onClick={sumar}>+</button>
            <p>{contador}</p>
            <button onClick={restar}>-</button>

        </div>

    );
}


export default Hooks;