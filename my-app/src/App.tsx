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
import Reveal from "./component/Reveal";

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
      className={`min-h-screen overflow-hidden p-0 m-0 ${
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
      import Reveal from "./component/Reveal";

...

<Reveal variant="fade-up">
  <Hero />
</Reveal>

<Reveal variant="fade-left">
  <Experience />
</Reveal>

<Reveal variant="fade-right">
  <Feature />
</Reveal>

<Reveal variant="fade-left">
  <TechnicalArsenal />
</Reveal>

<Reveal variant="rotate">
  <TechnicalExpertise />
</Reveal>

<Reveal variant="fade-right">
  <ProjectExperience />
</Reveal>

<Reveal variant="fade-up" >
  <LeadershipOwnership />
</Reveal>

<Reveal variant="fade-right" >
  <ContactMe />
</Reveal>
<Reveal variant="fade-up" >
  <CFooter />
</Reveal>
    </Main>
  );
}