import { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const [skillsGrouped, setSkillsGrouped] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/skills/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load skills");
        return res.json();
      })
      .then((data) => {
        // Group skills by category preserving order
        const grouped = data.reduce((acc, skill) => {
          const cat = skill.category || "General";
          if (!acc[cat]) {
            acc[cat] = [];
          }
          acc[cat].push(skill.name);
          return acc;
        }, {});
        setSkillsGrouped(grouped);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load skills");
        setLoading(false);
      });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      {loading && <p className="skills-status">Loading skills...</p>}
      {error && <p className="skills-status error">{error}</p>}

      {!loading && !error && (
        <div className="skills-grid">
          {Object.entries(skillsGrouped).map(([category, skillList]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {skillList.map((skillName, index) => (
                  <span className="skill-tag" key={index}>
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Skills;