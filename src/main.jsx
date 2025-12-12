import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';


const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <Router>
      <AuthProvider >
        <ProductProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);

