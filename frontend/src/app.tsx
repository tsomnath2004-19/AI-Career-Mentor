import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Roadmap from "./pages/Roadmap";
import Resume from "./pages/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;