import React from 'react';
import { useCart } from '../../context/CarritoContext';
import  BagIcon  from '../../assets/BagIcon.jsx'; 
import styles from './Carrito.module.css';

const CarritoIcon = () => {
    
    const { totalItems } = useCart();
    const Items = totalItems();

    return (
        <div className={styles.iContenedor}>
            <BagIcon />
                {Items > 0 && (
                    <span className={styles.iContador}>
                        {Items}
                    </span>
                )}
        </div>
    ) ;
};

export default CarritoIcon;
