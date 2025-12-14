import styles from './Footer.module.css'

const Footer = () => {


    return (
        <footer>
            <div className={styles.caja}>
                {/* <p className={styles.texto}>Elevarte</p> */}

                <p>© 2025 Elevarte. Todos los derechos reservados.</p>
                
                <div class="contact-info">
                <span>📧 Email: info@elevarte.com.ar</span> | 
                <span>📞 Tel: +54 9 11 1234-5678</span> | 
                <span>📍 Dirección: San Martin 123, Olivos, Bs As</span>
                </div>

                <div class="social-icons">
                <a href="link_instagram" aria-label="Instagram">📸</a>
                <a href="link_facebook" aria-label="Facebook">📘</a>
                <a href="link_whatsapp" aria-label="WhatsApp">💬</a>
                </div>

            </div>
        </footer>

    )

}

export default Footer