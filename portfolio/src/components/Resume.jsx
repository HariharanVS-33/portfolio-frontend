import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>

        <p>
          You can download my resume to learn more about my education,
          skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;