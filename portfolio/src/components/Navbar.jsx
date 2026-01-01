import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">Hariharan V S</div>
                <div
                    className={`menu-toggle ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </div>
                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;