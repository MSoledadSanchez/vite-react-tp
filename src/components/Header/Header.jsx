// import styles from  './Header.module.css'
import { Link } from 'react-router-dom';
import BagIcon from '../../assets/BagIcon';


const Header = () => {

    return(
         <header>  
            <h1>Bienvenidos a mi App React</h1>  

            {/* Tengo que armar el carrito 

            <div className={styles.iconoDeCarrito}>
                <Link to="/carrito">
                    <BagIcon className={styles.icono} />
                </Link>
            </div>
            */}

        </header>  
    )
}

export default Header
