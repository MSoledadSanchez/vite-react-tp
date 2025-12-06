import React from 'react';
import { useCart } from '../../context/CarritoContext';
import  BagIcon  from '../../assets/BagIcon.jsx'; 

const CarritoIcon = () => {
    
    const { totalItems } = useCart();
    const Items = totalItems();

    return (
        <div className="cart-icon-container">
            <BagIcon />
                {Items > 0 && (
                    <span className="cart-count">
                        {Items}
                    </span>
                )}
        </div>
    ) ;
};

export default CarritoIcon;
