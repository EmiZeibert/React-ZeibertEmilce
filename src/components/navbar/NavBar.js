import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget';
import fondo from './fondo/fondo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <header className="titulo" style={{ backgroundImage: `url(${fondo})` }}>
                <h1>Electromundo</h1>
            </header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page" id="categoria"><button type="button" className="btn btn-outline-success">Home</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productos" className="nav-link" id="categoria"><button type="button" className="btn btn-outline-success">Productos</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link" id="categoria"><button type="button" className="btn btn-outline-success">Nosotros</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/carrito' className="nav-link" id="carrito" > <button type="button" className="btn btn-outline-success"><CardWidget cantidad="3" /></button>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav></div>

    );
}


export default NavBar;