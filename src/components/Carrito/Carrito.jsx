
import { useContext } from 'react';
import { CarritoContext, useCart } from '../../context/CarritoContext';
import styles from './Carrito.module.css';

const Carrito = () => {

    const {carrito,  vaciarCarrito} = useContext(CarritoContext)
   
    const { totalItems, totalCosto } = useCart();
    const Items = totalItems();
    const Costo = totalCosto();
   
    return(
        <div>
            <h2>Carrito de Compra</h2>
                <ul className={styles.carro}>
                    {carrito.length === 0 ? (
                        <p>El carrito esta vacio </p> 
                    ) : (
                        <>
                        {carrito.map((producto) => (
                            <div key={producto.id}>
                                <img src={producto.image} alt={producto.title} height={80} width={80} />
                                <p> {producto.title} : $ {producto.price} </p>
                                <p> Cantidad :  {producto.cantidad} </p>
                           
                              
                            </div>
                         ))}
                        <div>
                            <h3>Productos en carrito: {Items}</h3>
                            <h3>Importe Total: $ {Costo}</h3> 

                            <button className={styles.botonvaciar} onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                        </div>
                        </>
                    )}
                </ul>
        </div>
    )

}

export default Carrito;
