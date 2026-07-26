import React, { useEffect, useState } from "react";
import { Main } from "strivui";

import Loader from "./component/Loader";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      // Small delay for smoother transition
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Main
      className={`min-h-screen p-0 m-0 ${
        saloonLights
          ? "bg-gradient-to-r from-amber-900 via-stone-800 to-stone-700 text-white"
          : "bg-amber-900 text-amber-50"
      }`}
    >
      {/* Header */}
      <Header
        saloonLights={saloonLights}
        setSaloonLights={setSaloonLights}
        setIsTelegraphOpen={setIsTelegraphOpen}
      />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <Experience />
      <Feature />
      <TechnicalArsenal />
      <TechnicalExpertise />
      <ProjectExperience />
      <LeadershipOwnership />
      <ContactMe />

      {/* Footer */}
      <CFooter />
    </Main>
  );
}