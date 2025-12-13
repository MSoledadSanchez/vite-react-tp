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
import LoginModal from './components/Login/LoginModal.jsx';
import { useAuthContext } from './context/AuthContext.jsx';


function App() {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    const { showLoginModal, closeLoginModal } = useAuthContext();

    return (
      <>
      <Header />

        {/* <NavBar onOpenLoginModal={() => setIsModalOpen(true)} /> */}
        <NavBar  onOpenLoginModal={closeLoginModal} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
           {/*<Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/administrador" element={<RutaAdmin>
                                                  <Admin />
                                                </RutaAdmin>}/>
          <Route path='/carrito' element={<RutaProtegida>
                                              <Carrito />
                                          </RutaProtegida>} />
        </Routes>

        <LoginModal
              isOpen={showLoginModal}
              onClose={closeLoginModal} // Pasa la función para cerrar el modal
        />      
      <Footer />
      </>
    )
}

export default App
