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
import SEO from "../component/SEO";


// ==============================================
// MAIN APPLICATION COMPONENT
// ==============================================
export default function Home() {

  return (
    <>
      {/* Interactive Floating Control Panel */}
   
  <SEO
        title="Abdullah.CV | Senior Software Engineer"
        description="Senior Software Engineer specializing in scalable systems, AI-powered applications, cloud-native infrastructure, and software architecture."
        canonical="https://syedabdullahali.strivui.com/"
      />
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

        <Reveal variant="fade-right">
          <TechnicalExpertise />
        </Reveal>

        <Reveal variant="fade-left">
          <ProjectExperience />
        </Reveal>

        <Reveal variant="fade-up">
          <LeadershipOwnership />
        </Reveal>

        <Reveal variant="fade-down">
          <Testimonials />
        </Reveal>

        <Reveal variant="fade-right">
          <ContactMe />
        </Reveal>
    </>
  );
}