import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
// import miImagen from '../../imagen/carrito.png'; // 1. Importa la imagen
import CarritoIcon from "../Carrito/CarritoIcono";
import Carrito from "../Carrito/Carrito";
import { useAuthContext } from "../../context/AuthContext";
import { FaUser, FaSignOutAlt, FaBars 	} from 'react-icons/fa';


const NavBar = () => {

    const {isLoggedIn, isAdmin, usuario, logout, openLoginModal } = useAuthContext(); 

    const [isOpen, setIsOpen] = useState(false);

    // Función para cambiar el estado
    const movilMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>

            {/* Logo de la aplicación 
            <div className={styles.navbarlogo}>
                 <img src={miImagen} alt="Descripción de la imagen" width="60" height="60" /> 
            </div>
            */}

            {/* Botón de hamburguesa para móvil */}
            <button className={styles.hamburger} onClick={movilMenu} >   {/*aria-label="Toggle menu"*/}
                <span className={styles.bar}><FaBars/></span>
            </button>

            {/* Menu de navegación - aplica la clase 'active' si isOpen es true*/}
            <ul className={`${styles.navbarlinks} ${isOpen ? styles.active : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
                <li><Link to="/productos" onClick={() => setIsOpen(false)}>Productos</Link></li>
                <li><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li> 
                {isAdmin && (
                    <li><Link to="/administrador" onClick={() => setIsOpen(false)}>Administrador</Link></li>
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