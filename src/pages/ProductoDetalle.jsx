// import { useState, useEffect } from "react";  
import { useParams } from 'react-router-dom';
import { useProducts } from "../context/ProductContext";

const ProductoDetalle = () => {  //producto, onClose 

/*    const { id } = useParams();
    const [producto, setProducto] = useState(null);

     useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato));
    },[id]); 
    
    if(!producto)
        return <p>Cargando el detalle del producto....</p>
    */


    // Extrae el 'id' de la URL (p. ej., de /products/123)
    const { id } = useParams(); 

    // Obtiene todos los productos del contexto
    const { products, loading, error } = useProducts();

    if (loading) return <p>Cargando detalles...</p>;

    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    //console.log(products);
    // Busca el producto cuyo ID coincida con el parámetro de la URL
    const producto = products.find(p => Number(p.id) === Number(id));

    if (!producto) {
        return (
            <div>
                <p>Producto no encontrado.</p>
                {/* <Link to="/">Volver a la lista</Link> */}
            </div>
        );
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <p>Este es el detalle del producto con ID: {id}</p>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
            <img src={producto.image} alt={producto.title} />
            
        </div>

    );

}

export default ProductoDetalle;