import React from 'react';
import { useProducts } from '../../context/ProductContext';
import styles from './ProductList.module.css'

const ProductList = ({ setCurrentProduct }) => {
  const { products, loading, error, deleteProduct } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className={styles.listContainer}>
      <h3>Lista de Productos</h3>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
          
            <img src={product.image} alt={product.title} 
                 className={styles.productImageSmall} 
                // Si la imagen falla, mostramos un placeholder simple
                onError={(e) => { e.target.onerror = null; e.target.src="via.placeholder.com"}} />

            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{product.title}</p>
              <p className={styles.productInfo}>
                Precio: ${product.price.toFixed(2)} | Cantidad: {product.cantidad}
              </p>
            </div>

            <div className={styles.actionButtons}>
              <button 
                className={`${styles.actionButton} ${styles.updateButton}`}
                onClick={() => setCurrentProduct(product)}>Editar</button>
              <button 
                className={`${styles.actionButton} ${styles.deleteButton}`}
                onClick={() =>deleteProduct(product.id)}>Eliminar</button>
            </div>
          </div>

        ))}
    </div>
  );
};

export default ProductList;
