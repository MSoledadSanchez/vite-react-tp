/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState, useEffect, useContext } from 'react';

// URL de MockAPI.io
const API_URL = 'https://691e21d1bb52a1db22bd1b64.mockapi.io/api/tpr/productos'; 

// 1. Crear el Contexto
const ProductContext = createContext();

// Hook personalizado para consumir el contexto fácilmente
export const useProducts = () => useContext(ProductContext);

// 2. Crear el Proveedor (Provider)
export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Lógica CRUD ---

  // Para cargar los productos
  const fetchProducts = async () => {

    setError(null);
    setLoading(true);

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al cargar productos');

        const data = await response.json();
        setProducts(data);

    } catch (error) {
        setError(error.message);
        console.error('Error al cargar productos:', error);

    } finally {
        setLoading(false);
    }
  };

  // Carga los productos al inicio
  useEffect(() => {
    fetchProducts();
  }, []);

  // Agregar productos
  const addProduct = async (productData) => { 

    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error('Error al agregar producto');
      
      // Después de agregar, recargamos la lista
      fetchProducts(); 

    } catch (error) {
        setError(error.message);
        console.error('Error al agregar productos:', error);
    }
  };

  const updateProduct = async (id, productData) => {

    setError(null);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      console.log ('el id que paso', id, productData)

      if (!response.ok) throw new Error('Error al actualizar producto');
        fetchProducts();

    } catch (error) {
        setError(error.message);
        console.error('Error al actualzar productos:', error);
    }
  };

  const deleteProduct = async (id) => {

    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar producto');
      fetchProducts();

    } catch (error) {
        setError(error.message);
        console.error('Error al eliminar productos:', error);

    }
  };

  // El valor que se pasa a los componentes que consumen el contexto
  const contextValue = {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchProducts // por si se necesita recargar manualmente
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
