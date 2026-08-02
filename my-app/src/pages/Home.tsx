import Hero from "../component/Hero";
import Feature from "../component/Feature";
import TechnicalArsenal from "../component/TechnicalArsenal";
import ContactMe from "../component/ContactMe";
import TechnicalExpertise from "../component/TechnicalExpertise";
import Experience from "../component/Experience";
import ProjectExperience from "../component/ProjectExperience";
import LeadershipOwnership from "../component/LeadershipOwnership";
import Testimonials from "../component/Testimonials";
import Reveal from "../component/Reveal";


// ==============================================
// MAIN APPLICATION COMPONENT
// ==============================================
export default function Home() {

  return (
    <>
      {/* Interactive Floating Control Panel */}
   

      {/* Main Page Layout Wrapper */}
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

        <Reveal variant="fade-up">
          <LeadershipOwnership />
        </Reveal>

        <Reveal variant="fade-up">
          <Testimonials />
        </Reveal>

        <Reveal variant="fade-right">
          <ContactMe />
        </Reveal>
    </>
  );
}