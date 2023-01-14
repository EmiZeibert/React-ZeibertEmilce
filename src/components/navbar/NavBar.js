import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget';
import fondo from './imagen/fondo.jpg';


const NavBar = (props) => {
    return (
        <div>
            <header className="titulo" style={{ backgroundImage: `url(${fondo})` }}>
                <h1>Electromundo{props.titulo}</h1>
            </header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" id="categorias-style"><button type="button" class="btn btn-outline-success">Inicio</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="categorias-style"><button type="button" class="btn btn-outline-success">Productos</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="categorias-style"><button type="button" class="btn btn-outline-success">Nosotros</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="carrito"> <button type="button" class="btn btn-outline-success"><span><CardWidget cantidad="3" /></span></button>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav></div>

    );
}


export default NavBar;