import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const RutaProtegida = ({ children }) => {

    const { isLoggedIn, openLoginModal } = useAuthContext();
    const [modalRequested, setModalRequested] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            if (!modalRequested) {
                openLoginModal();
                setModalRequested(true);
             } else {      
                //Esta cerrando el LoginModal sin ingresar el usuario      
                //return <Navigate to="/" replace />;
                navigate('/');
             }
        }}, [isLoggedIn, openLoginModal,navigate, modalRequested]);
    
    if (!isLoggedIn) {
        return null; 
    }
    
    return children;
    };

export default RutaProtegida;