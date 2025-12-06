import React, { useState } from 'react';
import ProductList from '../components/Formulario/ProductList';
import ValidatedProductForm from '../components/Formulario/ValidatedProductForm';

const Admin = () => {

  const [currentProduct, setCurrentProduct] = useState(null);

  return (
   
      <div className="Admin">
        <h1>Gestión de Inventario</h1>
        {/* <ProductForm  */}
        <ValidatedProductForm
          currentProduct={currentProduct} 
          setCurrentProduct={setCurrentProduct} 
        />
        <hr />
        <ProductList 
          setCurrentProduct={setCurrentProduct} 
        />
      </div>
  );
}

export default Admin;
