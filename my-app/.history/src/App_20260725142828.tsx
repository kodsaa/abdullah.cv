import React, { useState } from "react";
import {
  Main,
  Container,
  View,
  Card,
  H1,
  H2,
  H3,
  H4,
  Text,
  Span,
  Button,
  Avatar,
  Progress,
  FlatList,
  Link,
  Modal,
  Input,
  TextArea,
  Label,
  Switch,
  Tooltip,
  Image
} from "strivui";
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

// Architecture Domains & Core System Principles


export default function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isTelegraphOpen, setIsTelegraphOpen] = useState(false);
  const [saloonLights, setSaloonLights] = useState(true);



  return (
    
    <Main
    
      className={`p-0 m-0 ${
        saloonLights
          ? "bg-stone-800 text-stone-100"
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
       <Hero/>

       <Experience/>
       <Feature/>
       <Experience/>
       <TechnicalArsenal/>
       <ContactMe/>
       <TechnicalExpertise/>
       <ProjectExperience/>
       <LeadershipOwnership/>
       <CFooter/>

  

      {/* Technical Arsenal */}
   
      {/* Telegraph Modal */}
    
    </Main>
  );
}