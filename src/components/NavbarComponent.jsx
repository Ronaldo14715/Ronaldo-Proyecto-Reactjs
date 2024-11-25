import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavbarComponent = () =>{

    return(
        <nav className="navContainer">
            <NavLink to='/'> <img src="../src/assets/img/logoCorcis.jpg" alt="logo" className="img-nav"/> </NavLink>
            <ul className="list-nav">
                <li><NavLink to='/products/nuevos' className="a-li-nav">NUEVOS INGRESOS</NavLink></li>
                <li><NavLink to='/products/ofertas' className="a-li-nav">OFERTAS</NavLink></li>
                <li><NavLink to='/products/mas vendidos' className="a-li-nav">MAS VENDIDOS</NavLink></li>
            </ul>
            <CartWidget counter={15} />
        </nav>
    )

} 

export default NavbarComponent