import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-name">Follow Me!</p>
                <div className="footer-links">
                    <a href="https://github.com/HariharanVS-33">Github</a>
                    <a href="https://www.linkedin.com/in/hariharan-v-s-728a2228b/">LinkedIn</a>
                    <a href="mailto:hariharanvs970@gmail.com">Email</a>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} Hariharan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;