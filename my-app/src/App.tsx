import { useState } from "react";
import { Main } from "strivui";
import Hero from "./component/Hero";
import Header from "./component/Header";
import Feature from "./component/Feature";
import TechnicalArsenal from "./component/TechnicalArsenal";
import ContactMe from "./component/ContactMe";
import TechnicalExpertise from "./component/TechnicalExpertise";
import Experience from "./component/Experience";
import ProjectExperience from "./component/ProjectExperience";
import LeadershipOwnership from "./component/LeadershipOwnership";
import CFooter from "./component/Footer";

export default function App() {
  const [isTelegraphOpen, setIsTelegraphOpen] = useState(false);
  const [saloonLights, setSaloonLights] = useState(true);

  return (
    <Main
      className={`p-0 m-0 ${
        saloonLights
          ? "bg-gradient-to-r from-amber-900 via-stone-800 to-stone-700 text-white"
          : "bg-amber-900 text-amber-50"
      }`}
    >
      {/* Saloon Bar Header / Navigation */}
      <Header
        saloonLights={saloonLights}
        setSaloonLights={setSaloonLights}
        setIsTelegraphOpen={setIsTelegraphOpen}
      />

      {/* Senior Engineer Hero */}
      <Hero />

      <Experience />

      {/*
        Skills = TechnicalExpertise (id="skills") + TechnicalArsenal,
        kept back-to-back so the footer's "Skills" scroll target
        (TechnicalExpertise) lands right at the start of this whole
        block instead of being split apart by other sections.
      */}
      <TechnicalExpertise />
      <TechnicalArsenal />

      <ProjectExperience />
      <Feature />
      <LeadershipOwnership />
      <ContactMe />
      <CFooter />
    </Main>
  );
}