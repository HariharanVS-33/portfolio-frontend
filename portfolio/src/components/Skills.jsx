import "./Skills.css";

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ "--target-width": `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <SkillCard
          title="Frontend"
          skills={[
            { name: "HTML", level: 90 },
            { name: "CSS", level: 70 },
            { name: "React", level: 75 },
          ]}
        />

        <SkillCard
          title="Backend"
          skills={[
            { name: "Python", level: 60 },
            { name: "Django", level: 60 },
          ]}
        />

        <SkillCard
          title="Data Structures"
          skills={[
            { name: "C", level: 40 },
          ]}
        />

        <SkillCard
          title="Tools"
          skills={[
            { name: "Git", level: 60 },
            { name: "GitHub", level: 80 },
            { name: "VS Code", level: 90 },
          ]}
        />
      </div>
    </section>
  );
}

export default Skills;