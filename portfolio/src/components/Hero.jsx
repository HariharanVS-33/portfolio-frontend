import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Hello, I'm <span>Hariharan V S</span></h1>

                <h2>Software Engineering student</h2>

                <p>Passionate about creating innovative solutions and building scalable applications.</p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">View Projects</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;