import './CardWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CardWidget = () => {
    const { totalProductos, items } = useContext(CartContext);

    return (

        <div className='carrito'>
            <div>
                <Link to="/carrito">
                    <span><i className='bi bi-cart4'></i></span>
                </Link>
            </div>
            {
                items.length > 0 &&

                <div className='carrito-numero'>
                    {totalProductos()}
                </div>

            }
        </div>

    )

}

export default CardWidget;


