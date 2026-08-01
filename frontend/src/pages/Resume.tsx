import { useState } from "react";
import api from "../api";

function Resume() {
  const [skillsFound, setSkillsFound] = useState<string[]>([]);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);

  const analyzeResume = async () => {
    try {
      const response = await api.post("/resume");

      setSkillsFound(response.data.skills_found);
      setMissingSkills(response.data.missing_skills);
    } catch (err) {
      console.error(err);
      alert("Backend not running or API error");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Resume Analyzer</h1>

      <input type="file" />

      <br />
      <br />

      <button onClick={analyzeResume}>Analyze Resume</button>

      <hr />

      <h2>Skills Found</h2>

      <ul>
        {skillsFound.map((skill) => (
          <li key={skill}>✅ {skill}</li>
        ))}
      </ul>

      <h2>Missing Skills</h2>

      <ul>
        {missingSkills.map((skill) => (
          <li key={skill}>❌ {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;