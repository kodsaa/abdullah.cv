import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./i18n";
import Skill from "./pages/SkillCloud3D";
import Layout from "./component/UI/Layout";


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