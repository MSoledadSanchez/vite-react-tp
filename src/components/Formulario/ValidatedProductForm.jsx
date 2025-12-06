import React, { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductContext';
import styles from './ProductForm.module.css'; 


const initialState = {
  title: '',
  description: '',
  price: '', // Usamos string inicialmente para manejar inputs vacíos fácilmente
  image: '',
  cantidad: '',
  descuento: '',
};

const ValidatedProductForm = ({ currentProduct, setCurrentProduct }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { addProduct, updateProduct, loading } = useProducts();

  // Cargar datos si estamos editando
  useEffect(() => {
    if (currentProduct) {
      // Convertir números a string para input fields
      setFormData({
        ...currentProduct,
        price: String(currentProduct.price),
        cantidad: String(currentProduct.cantidad),
        descuento: String(currentProduct.descuento)
      });
    } else {
      setFormData(initialState);
    }
  }, [currentProduct]);

  // Función de validación centralizada
  const validateForm = (data) => {
    let formErrors = {};

    if (!data.title.trim()) formErrors.title = 'El título es obligatorio.';
    if (!data.description.trim()) formErrors.description = 'La descripción es obligatoria.';
    if (!data.price || parseFloat(data.price) <= 0) formErrors.price = 'El precio debe ser un número positivo.';
    if (!data.cantidad || parseInt(data.cantidad) <= 0) formErrors.cantidad = 'La cantidad debe ser un número positivo.';
    
    // Validación opcional para la URL de la imagen
    // if (data.image && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/.test(data.image)) {
    if (data.image && /^https?:\/\/.+\.$/.test(data.image)) {  
      formErrors.image = 'Debe ser una URL de imagen válida (http/https y formato común).';
    }
    
    // Validación opcional para descuento (entre 0 y 100)
    if (data.descuento !== '' && (parseFloat(data.descuento) < 0 || parseFloat(data.descuento) > 100)) {
        formErrors.descuento = 'El descuento debe estar entre 0 y 100.';
    }

    setErrors(formErrors);
    // Devuelve true si no hay errores
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Opcional: Limpiar el error del campo mientras el usuario escribe
    if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return; // Detener el envío si la validación falla
    }

    // Preparar los datos finales convirtiendo strings a números donde sea necesario
    const productData = {
        ...formData,
        price: parseFloat(formData.price),
        cantidad: parseInt(formData.cantidad),
        // Si descuento está vacío, lo mandamos como 0, si no, lo parseamos
        descuento: formData.descuento === '' ? 0 : parseFloat(formData.descuento),
    };
    
    if (currentProduct && currentProduct.id) {
        await updateProduct(currentProduct.id, productData);
        setCurrentProduct(null);
    } else {
        await addProduct(productData);
    }
    
    setFormData(initialState); // Resetear el formulario solo si tuvo éxito
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3>{currentProduct ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h3>
      
      {/* Campo Título */}
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>Título:</label>
        <input name="title" className={styles.input} value={formData.title} onChange={handleChange} placeholder="Título" required />
        {errors.title && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.title}</span>}
      </div>

      {/* Campo Descripción */}
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Descripción:</label>
        <textarea name="description" className={styles.textarea} value={formData.description} onChange={handleChange} placeholder="Descripción" required />
        {errors.description && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.description}</span>}
      </div>

      {/* Campo Precio */}
      <div className={styles.formGroup}>
        <label htmlFor="price" className={styles.label}>Precio:</label>
        <input type="number" className={styles.input} name="price" value={formData.price} onChange={handleChange} placeholder="Precio" min="0.01" step="0.01" required />
        {errors.price && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.price}</span>}
      </div>

      {/* Campo URL Imagen */}
      <div className={styles.formGroup}>
        <label htmlFor="image" className={styles.label}>URL de Imagen:</label>
        <input type="text" className={styles.input} name="image" value={formData.image} onChange={handleChange} placeholder="URL de Imagen" />
        {errors.image && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.image}</span>}
      </div>

      {/* Campo Cantidad */}
      <div className={styles.formGroup}>
        <label htmlFor="cantidad" className={styles.label}>Cantidad:</label>
        <input type="number" className={styles.input} name="cantidad" value={formData.cantidad} onChange={handleChange} placeholder="Cantidad" min="1" required />
        {errors.cantidad && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.cantidad}</span>}
      </div>

      {/* Campo Descuento */}
      <div className={styles.formGroup}>
        <label htmlFor="descuento" className={styles.label}>Descuento (%):</label>
        <input type="number" className={styles.input} name="descuento" value={formData.descuento} onChange={handleChange} placeholder="Descuento (%)" min="0" max="100" />
        {errors.descuento && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.descuento}</span>}
      </div>
      
      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Guardando...' : currentProduct ? 'Actualizar' : 'Guardar'}
      </button>
      {currentProduct && (
        <button type="button" onClick={() => { setCurrentProduct(null); setFormData(initialState); setErrors({}); }}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ValidatedProductForm;
