import styles from  './Header.module.css'
import elevarteColor from '../../assets/logoColor.svg'


const Header = () => {

    return(
         <header>  
            {/* <h1>Bienvenidos a mi App React</h1>   */}
           <img src={elevarteColor} alt="Logo de mi aplicación" className={styles.logo} />

        </header>  
    )
}

export default Header
