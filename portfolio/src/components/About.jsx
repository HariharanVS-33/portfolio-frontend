import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT: PHOTO */}
        <div className="about-image">
          <img src={profile} alt="Hariharan profile" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="about-content">
          <h2>About Me..</h2>

          <p>
            I am a software engineering student with a strong interest in web
            development, backend systems, and problem solving. I enjoy building
            scalable applications using React, Django, and libraries with modern web
            technologies.
          </p>
          
          <p>
            I focus on writing clean code, understanding system design, and
            continuously improving my skills through projects and hands-on
            learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;