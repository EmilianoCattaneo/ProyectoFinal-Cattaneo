import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>NovaTech</h3>
            </Link>
            <div>
                <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;