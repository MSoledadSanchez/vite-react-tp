
import ListaProductos from  '../components/ListaProductos/ListaProductos.jsx';

const Inicio = () => {

   
    return(

        <>
        <h2 className={StyleSheet.acento}>Encontrá todo lo que el artista esta buscando </h2>
        {/* <p>Esta en la aplicación del carrito para presentar como trabajo final</p> */}

        <ListaProductos />
           
        </>
    )

}

export default Inicio;
