import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/SkillCloud3D";
import Layout from "./component/UI/Layout";

import "./index.css";
import "./Theme.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Skill Page */}
        <Route path="skill/:id" element={<Skill />} />
      </Route>
    </Routes>
  );
}