// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Productos from './pages/Productos.jsx';
import Contacto from './pages/Contacto.jsx';
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import Admin from './pages/Admin.jsx';

import './App.css';
import Footer from './components/Footer/Footer.jsx';

import Header from './components/Header/Header.jsx'; 
import NavBar from './components/NavBar/NavBar.jsx';
import Carrito from './components/Carrito/Carrito.jsx';
import Login from './pages/Login.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import RutaAdmin from './components/RutaAdmin.jsx';

// import ListaProductos from  './components/ListaProductos/ListaProductos.jsx';

function App() {

    return (
      <>
      <Header />

        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administrador" element={<RutaAdmin>
                                                  <Admin />
                                                </RutaAdmin>}/>
          <Route path='/carrito' element={<RutaProtegida>
                                              <Carrito />
                                          </RutaProtegida>} />
        </Routes>

      {/* <ListaProductos /> */}

      <Footer />
      </>
    )
}

export default App
