import styles from './ListaProductos.module.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import { CarritoContext } from '../../context/CarritoContext.jsx';
import { useProducts } from '../../context/ProductContext.jsx';

const ListaProductos = ( )=> {

    // Con el Context
    const { products, loading, error } = useProducts();

    const { agregarProducto } = useContext(CarritoContext);
    

    if (loading) return 'Cargando productos, aguarde por favor...';
    if (error) return error;

    return(

        <>
        <div className={styles.listaproductos}>

                {products.map(producto => (

                <div className={styles.card} key={producto.id} >
                    <h3>{producto.title}</h3>
                    <p>$ {producto.price}</p>
                    <img src={producto.image} alt={producto.title} className={styles.cardImg} />
            
                    <button className={styles.actionButton}
                            onClick={() => agregarProducto(producto)}>Agregar</button>
                    <Link to={`/productos/${producto.id}`} >Detalles</Link>

                </div>
                ))}
        </div> 
        
        </>        
    );
}

export default ListaProductos;
