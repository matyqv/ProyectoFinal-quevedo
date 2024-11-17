import CartWidget from '../CartWidget/CartWidget'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagenes/Logo.png'

function NavBar(){

    return(        

    <div className={styles.navBar}>       
        <nav className={styles.navBarNav}> 
            <Link to='/' ><img className={styles.logo} src={Logo} alt="" /></Link>
            <Link to='/' ><p>HOME</p> </Link>
            <Link to='/category/Heroe'><p>HEROES</p> </Link>
            <Link to='/category/Villano'><p>VILLANOS</p> </Link>
            <Link to='/category/Anti-Heroe'><p>ANTI-HEROES</p></Link>
        </nav>
        <div className={styles.cart}>
        < CartWidget />
        </div>
    </div>
    )
}
export default NavBar