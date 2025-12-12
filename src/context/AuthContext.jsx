/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext} from "react";

const USUARIOS_FAKE = [
  { 
    id: 1, 
    usuario: 'admin', 
    pass: '1234', 
    rol: 'admin',
    nombre: 'Administrador'
  },
  { 
    id: 2, 
    usuario: 'maria', 
    pass: '1234', 
    rol: 'usuario',
    nombre: 'Maria'
  }
];


// Crear el contexto de autenticación
const AuthContext = createContext();


export const AuthProvider = ({ children  }) => { 

    const [usuario, setUsuario ] = useState(null)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); 
    const [showLoginModal, setShowLoginModal] = useState(false);


    const login = (username, password) => {

        const usuarioLogin = USUARIOS_FAKE.find(
            u => u.usuario === username && u.pass === password
        );

        if (usuarioLogin) {
            // Simulando la creación de un token 
            const token = `fake-token-${username}`;
            localStorage.setItem('authToken', token);
            setUsuario(usuarioLogin)
            setIsLoggedIn(true);
            setShowLoginModal(false);

            if (usuarioLogin.rol == 'admin') {
              setIsAdmin(true)
            } else { setIsAdmin(false)}

            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUsuario(null);
        setIsLoggedIn(false);
        setIsAdmin(false)
    };

    const openLoginModal = () => setShowLoginModal(true);
    const closeLoginModal = () => setShowLoginModal(false);

    return (
        <AuthContext.Provider value={{ usuario, login, logout, 
                                       isLoggedIn, isAdmin, 
                                       showLoginModal, openLoginModal, closeLoginModal  }}>
            {children}
        </AuthContext.Provider> );
}

export const useAuthContext = () => useContext(AuthContext); 

