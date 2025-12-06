import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const RutaAdmin = ({ children }) => {

    const { isLoggedIn, isAdmin } = useAuthContext();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }


    if (!isAdmin) {
        // Si no es admin, redirigir a una página de "Acceso Denegado" o al dashboard principal
        alert('Acceso Denegado')
        return <Navigate to="/producto" replace />; 
    }

    return children;

    };

export default RutaAdmin;