import { Link } from 'react-router-dom'
import logo from '~/images/coca-cola-logo-1.png'

export default function NavBar () {
    return (
        <div className="navbar">
            <img src={logo}/>
            <ul>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li>
                    <Link to='/sections/ver-todo'>VER TODO</Link>
                </li>
                <li>
                    <Link to='/sections/nueva-coleccion'>NUEVA COLECCION</Link>
                </li>
                <li>
                    <Link to='/sections/camisetas'>CAMISETAS</Link>
                </li>
                <li>
                    <Link to='/sections/mayoristas'>MAYORISTAS</Link>
                </li>
                <li>
                    <Link to='/sections/cambios-o-garantias'>CAMBIOS O GARANTÍAS</Link>
                </li>
                <li>
                    <Link to='/sections/contacto'>CONTÁCTANOS</Link>
                </li>
            </ul>
            <div className='iconContainer'>
                <div>
                    <a>a</a>
                </div>
                <div>
                    <a>a</a>
                </div>
                <div>
                    <a>a</a>
                </div>
            </div>
        </div>
    )
}