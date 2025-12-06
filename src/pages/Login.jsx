import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'

function Login() {

    const [usuario, setUsuario] = useState('');
    const [pass, setPassword] = useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de autenticación
        // if (usuario === 'admin' && password === '1234') {
        if (login(usuario, pass)) {
            // login(usuario);
            navigate('/');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <button type="submit">Iniciar sesión</button>

            <div>
                <p>Los usuarios son: </p> 
                <p>Usuario: Admin - Pass: 1234</p> 
                <p>Ususaio: Maria - Pass: 1234</p> 

            </div>
        </form>
    );
}

export default Login;