import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/SkillCloud3D";
import WindowCurtainLayout from "./component/UI/PageLayout"; // Update import path if needed

export default function App() {
  return (
    <WindowCurtainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill/:id" element={<Skill />} />
      </Routes>
    </WindowCurtainLayout>
  );
}