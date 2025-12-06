/* eslint-disable react-refresh/only-export-components */

import { useState } from 'react';
import { createContext, useContext} from 'react';

// Crear el contexto
export const CarritoContext = createContext();


export const useCart = () => useContext(CarritoContext);


// Proveedor del contexto
export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([]);

    // Función para calcular el total de artículos
    const totalItems = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    };

    // Funcion para calcular el importe del carrito
    const totalCosto = () => {
        return carrito.reduce((total, item) => {
            return total + (item.price * item.cantidad);
        }, 0); // El 0 es el valor inicial de 'total'
    };

    const agregarProducto = (producto) => {
        
        // setCarrito([...carrito, producto]);

        // 1. Verifico si el producto ya esta en el carrito
        const existingProductIndex = carrito.findIndex(item => item.id === producto.id);

        if (existingProductIndex !== -1) 
        {
            // 2. Si esta, copia el carrito y actualiza la cantidad del producto
            const updatedCart = [...carrito];

            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                cantidad: updatedCart[existingProductIndex].cantidad + 1,
                };
            setCarrito(updatedCart); // Actualizar el estado con el nuevo carrito
        } else 
        {
            // 3. Si no esta, agregar el nuevo producto con cantidad 1
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }

    };
    
    // Para vaciar todo el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, totalItems, totalCosto, agregarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );

};

