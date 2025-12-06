import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const RutaProtegida = ({ children }) => {

    const { isLoggedIn } = useAuthContext();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
    };

export default RutaProtegida;