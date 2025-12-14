import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'
import styles from './LoginModal.module.css'


function LoginModal({ isOpen, onClose}) {

    const [usuario, setUsuario] = useState('');
    const [pass, setPassword] = useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();

    // Si la ventana de login no está abierta, no renderizamos nada 
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (login(usuario, pass)) {
            navigate('/');
            onClose();      // Cierra la ventana modal
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (

        <div className={styles.modalOverlay} onClick={onClose}>

            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>

                <button className={styles.modalCloseButton} onClick={onClose}>
                    &times; {/* Esto es una X grande */}
                </button>

                <form onSubmit={handleSubmit} className={styles.loginForm} >
                    <h3>Iniciar sesión</h3>
                    <div className={styles.formGroup}>
                        <label>Usuario:</label>
                        <input
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
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
                        <p>Usuario: admin - Pass: 1234</p> 
                        <p>Ususaio: maria - Pass: 1234</p> 

                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginModal;