import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
// import miImagen from '../../imagen/carrito.png'; // 1. Importa la imagen
import HamburgerIcon from "../../assets/HamburgerIcon";
import CarritoIcon from "../Carrito/CarritoIcono";
import Carrito from "../Carrito/Carrito";
import { useAuthContext } from "../../context/AuthContext";
import { FaUser, FaSignOutAlt	} from 'react-icons/fa';


const NavBar = () => {

    const {isLoggedIn, isAdmin, usuario, logout, openLoginModal } = useAuthContext(); 

    return (
        <nav className={styles.navbar}>

            {/* Logo de la aplicación 
            <div className={styles.navbarlogo}>
                 <img src={miImagen} alt="Descripción de la imagen" width="60" height="60" /> 
            </div>
            */}

            {/* Menu de navegación */}
            <ul className={styles.navbarlinks}>
                <li><Link to="/" >Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                {/* <li><Link to="/contacto">Contacto</Link></li> */}
                {isAdmin && (
                    <li><Link to="/administrador">Administrador</Link></li>
                )}             
            </ul>

            {/* Boton de Login */}
            <div className={styles.zonaAuth}>

                {isLoggedIn ? (
                        <>
                        <span className={styles.saludo}>
                            Hola, {usuario.nombre}! 
                        </span>
                        <button onClick={() => logout()} className={styles.logoutButton}> 
                            <span className={styles.txtBtnIngresar}>Cerrar Sesión</span>
                            <span className={styles.iconBtnIngresar}><FaSignOutAlt /></span> 
                        </button>
                        </>
                ) : (
                        <button onClick={openLoginModal} className={styles.loginButton}>
                            <span className={styles.txtBtnIngresar}>Ingresar</span>
                            <span className={styles.iconBtnIngresar}><FaUser /></span> 
                        </button>
                )}
          
                {/* Imagen del carrito */}
                <Link to="/carrito">
                        <CarritoIcon />
                </Link>
                
            </div>
        </nav>
    )
}

export default NavBar;