import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className='container justify-content-start'>

                <div className="navbar-collapse justify-content-start">

                    <div className="navbar-nav">
                        <Link
                            className="navbar-brand"
                            to="/">
                            Inicio
                        </Link>
                        <NavLink
                            className="nav-item nav-link ms-3"
                            to="/producto">
                            Productos
                        </NavLink>

                        <div className="nav-item dropdown ms-3">

                            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Proveedores
                            </div>

                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink
                                        className="nav-item nav-link text-light dropdown-item p-2"
                                        to="/proveedor">
                                        Administrar Proovedores
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="nav-item nav-link text-light dropdown-item p-2"
                                        to="/adquisicion">
                                        Administrar Adquisiciones
                                    </NavLink>
                                </li>
                            </ul>
                        </div>


                        <NavLink
                            className="nav-item nav-link ms-3"
                            to="/factura">
                            Facturas
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link ms-3"
                            to="/cliente">
                            Clientes
                        </NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}