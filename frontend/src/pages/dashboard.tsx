import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Dashboard</h1>

      <br />

      <Link to="/resume">
        <button>Resume Analyzer</button>
      </Link>

      <br /><br />

      <Link to="/roadmap">
         <button>Learning Roadmap</button>
      </Link>

      <br /><br />

      <Link to="/chat">
          <button>AI Chat</button>
      </Link>

      <br /><br />

      <button>Progress</button>
    </div>
  );
}

export default Dashboard;