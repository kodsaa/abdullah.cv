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
import imageCTown from './assets/CTown.png'
import Experience from "./component/Experience";

// Architecture Domains & Core System Principles


export default function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isTelegraphOpen, setIsTelegraphOpen] = useState(false);
  const [saloonLights, setSaloonLights] = useState(true);



  return (
    
    <Main
    
      className={`min-h-screen  transition-colors duration-300 font-sans flex justify-center align-items-center flex-col relative ${
        saloonLights
          ? "bg-stone-900 text-stone-100"
          : "bg-stone-800 text-amber-50"
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
             <Image  src={imageCTown}/>

      <Experience/>

       <Feature/>
       <Experience/>
       <TechnicalArsenal/>
       <ContactMe/>
       <TechnicalExpertise/>

  

      {/* Technical Arsenal */}
   
      {/* Telegraph Modal */}
      <Modal
        isOpen={isTelegraphOpen}
        onClose={() => setIsTelegraphOpen(false)}
      >
        <Card className="p-6 bg-stone-950 border border-amber-900 text-stone-100 max-w-md mx-auto rounded-xl space-y-4">
          <H3 className="text-xl font-serif font-bold text-amber-400">
            Dispatch Telegram
          </H3>
          <Text className="text-xs text-stone-400 font-mono">
            Direct channel to Syed Abdullah Ali for architecture consulting or senior role inquiries.
          </Text>

          <View className="space-y-3">
            <View>
              <Label className="text-xs font-mono text-amber-200/80 mb-1 block">
                Organization / Client Name
              </Label>
              <Input
                placeholder="Company / Enterprise Team"
                className="bg-stone-900 border-amber-900/50 text-stone-100 w-full p-2.5 text-sm rounded font-sans"
              />
            </View>

            <View>
              <Label className="text-xs font-mono text-amber-200/80 mb-1 block">
                Scope / System Requirements
              </Label>
              <TextArea
                placeholder="Outline system scale, concurrency requirements, or engineering needs..."
                className="bg-stone-900 border-amber-900/50 text-stone-100 w-full p-2.5 text-sm rounded h-28 font-sans"
              />
            </View>

            <View className="flex flex-row justify-end gap-3 pt-2">
              <Button
                onClick={() => setIsTelegraphOpen(false)}
                className="bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono px-4 py-2 rounded"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsTelegraphOpen(false)}
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-mono font-bold px-4 py-2 rounded"
              >
                Transmit Dispatch
              </Button>
            </View>
          </View>
        </Card>
      </Modal>

      {/* Footer */}
      <View className="border-t border-amber-900/20 py-8 px-6 text-center">
        <Text className="text-xs font-mono text-stone-500">
          © {new Date().getFullYear()} Syed Abdullah Ali • Senior Software Engineer • Built with StrivUI
        </Text>
      </View>
    </Main>
  );
}