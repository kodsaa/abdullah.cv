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
} from "strivui";

// Architecture Domains & Core System Principles
const ARCHITECTURE_DOMAINS = [
  {
    category: "Frontend & State Management",
    icon: "⚡",
    skills: [
      { name: "React / Next.js (SSR & Edge)", value: 98 },
      { name: "React Native & StrivUI Cross-Platform", value: 95 },
      { name: "Redux Toolkit / RTK Query / Context API", value: 96 },
      { name: "Tailwind CSS & Utility-First Design Systems", value: 94 },
    ],
  },
  {
    category: "Distributed Backends & Enterprise Systems",
    icon: "🛡️",
    skills: [
      { name: "Python / Django REST Framework (DRF)", value: 95 },
      { name: "PostgreSQL, Concurrency & ACID Boundaries", value: 92 },
      { name: "Data Migration Pipelines & ETL", value: 94 },
      { name: "Node.js & Real-time WebSockets", value: 90 },
    ],
  },
];

// Production Systems / Featured Bounties
const PRODUCTION_SYSTEMS = [
  {
    id: "1",
    title: "Enterprise HRMS & Resource Management Engine",
    bounty: "Enterprise Scale • Multi-Role Access",
    status: "PROD / DEPLOYED",
    type: "ENTERPRISE",
    desc: "Designed scalable, role-based architecture for Manager, HR, Finance, and Employee portals. Architected transaction boundaries for payroll, leave tracking, and complex timesheet processing.",
    tech: ["Django", "React.js", "Redux Toolkit", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Zero-Downtime Legacy Data Migration Engine",
    bounty: "High Concurrency • ETL",
    status: "MISSION CRITICAL",
    type: "BACKEND",
    desc: "Engineered robust Excel-to-DB migration pipelines to import thousands of employee records and leave models into relational schema without data loss or downtime.",
    tech: ["Python", "Django ORM", "PostgreSQL", "Bulk Ops"],
  },
  {
    id: "3",
    title: "⚡ StrivUI Cross-Platform Framework",
    bounty: "Design System Architecture",
    status: "OPEN SOURCE",
    type: "FRAMEWORK",
    desc: "Cross-platform UI component library bridging web (React) and mobile (React Native) with strict utility-first styling and unified API surfaces.",
    tech: ["TypeScript", "React", "React Native", "SCSS"],
  },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isTelegraphOpen, setIsTelegraphOpen] = useState(false);
  const [saloonLights, setSaloonLights] = useState(true);

  const filteredSystems =
    activeFilter === "ALL"
      ? PRODUCTION_SYSTEMS
      : PRODUCTION_SYSTEMS.filter((item) => item.type === activeFilter);

  return (
    <Main
      className={`min-h-screen transition-colors duration-300 font-sans ${
        saloonLights
          ? "bg-stone-950 text-stone-100"
          : "bg-stone-900 text-amber-50"
      }`}
    >
      {/* Saloon Bar Header / Navigation */}
      <View className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-900/30 px-6 py-4">
        <Container className="max-w-6xl mx-auto flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Avatar className="bg-amber-900 text-amber-200 font-bold border border-amber-600/40">
              🤠
            </Avatar>
            <View>
              <H3 className="font-serif text-lg font-bold text-amber-500 uppercase tracking-widest leading-none">
                Syed Abdullah Ali
              </H3>
              <Span className="text-[10px] font-mono text-stone-400">
                SENIOR SOFTWARE ENGINEER & ARCHITECT
              </Span>
            </View>
          </View>

          <View className="flex flex-row items-center gap-4">
            <Tooltip content="Toggle Range Atmosphere">
              <Switch
                checked={saloonLights}
                onChange={() => setSaloonLights(!saloonLights)}
              />
            </Tooltip>

            <Button
              variant="primary"
              onClick={() => setIsTelegraphOpen(true)}
              className="bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold font-mono uppercase tracking-widest px-4 py-2.5 rounded border border-amber-400/40 transition-all"
            >
              Consult / Hire
            </Button>
          </View>
        </Container>
      </View>

      {/* Senior Engineer Hero */}
      <Container className="py-20 max-w-6xl mx-auto px-6">
        <View className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <View className="md:col-span-8 space-y-6">
            <Span className="inline-block bg-amber-950/80 border border-amber-800/50 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              ✦ System Scalability & Enterprise Architecture ✦
            </Span>

            <H1 className="text-4xl md:text-6xl font-serif font-extrabold text-stone-100 tracking-tight leading-tight">
              Taming Complex Enterprise Systems on the{" "}
              <Span className="text-amber-500 underline decoration-amber-700/50 underline-offset-8">
                Digital Frontier
              </Span>
            </H1>

            <Text className="text-stone-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              5+ years building distributed web and mobile platforms. Specialized in React/Next.js frontends, Django REST backends, state synchronization, and scalable relational schemas.
            </Text>

            <View className="flex flex-row flex-wrap gap-4 pt-4">
              <Button
                onClick={() => setIsTelegraphOpen(true)}
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 px-8 py-3.5 text-xs font-bold font-mono uppercase tracking-widest rounded shadow-lg shadow-amber-950/60"
              >
                Send Wire (Dispatch)
              </Button>
              <Link
                href="#systems"
                className="border border-stone-800 hover:border-amber-600/50 bg-stone-900/60 text-amber-200 px-8 py-3.5 text-xs font-bold font-mono uppercase tracking-widest rounded transition-colors inline-block"
              >
                Inspect Systems
              </Link>
            </View>
          </View>

          {/* Senior Profile Summary Poster */}
          <View className="md:col-span-4">
            <Card className="bg-stone-900/90 border-2 border-amber-900/50 rounded-2xl p-6 text-center space-y-4 shadow-2xl relative overflow-hidden">
              <View className="absolute top-0 right-0 bg-amber-600 text-stone-950 font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-bl">
                STAFF / SENIOR
              </View>
              <Avatar
                src="https://i.pravatar.cc/300"
                className="w-32 h-32 mx-auto rounded-xl ring-4 ring-amber-600/50 shadow-inner"
              />
              <H3 className="font-serif text-xl font-bold text-amber-200">
                The Code Outlaw
              </H3>
              <Text className="text-xs font-mono text-stone-400">
                FOCUS: Clean Architecture & High Reliability
              </Text>
              <View className="border-t border-amber-950 pt-4 text-left font-mono text-xs space-y-2 text-stone-300">
                <Text>• Multi-Role Portal Architecture</Text>
                <Text>• Transaction Security & Boundaries</Text>
                <Text>• High-Throughput Migration Engine</Text>
              </View>
            </Card>
          </View>
        </View>

        {/* Engineering Metrics */}
        <View className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { val: "5+ Years", label: "Enterprise Experience" },
            { val: "40+", label: "Systems Deployed" },
            { val: "99.9%", label: "Uptime Commitment" },
            { val: "Zero-Loss", label: "Data Migrations" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="bg-stone-900/40 border border-amber-900/20 p-5 rounded-xl text-center"
            >
              <H2 className="text-3xl font-serif font-bold text-amber-400">
                {stat.val}
              </H2>
              <Text className="text-xs font-mono uppercase text-stone-400 mt-1">
                {stat.label}
              </Text>
            </Card>
          ))}
        </View>
      </Container>

      {/* Production Systems / Bounty Board */}
      <Container id="systems" className="py-20 max-w-6xl mx-auto px-6">
        <View className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <View>
            <Span className="text-amber-500 font-mono text-xs tracking-widest uppercase">
              Production Architecture
            </Span>
            <H2 className="text-3xl md:text-5xl font-serif font-bold text-amber-100 mt-1">
              Featured Systems
            </H2>
          </View>

          {/* Filter Chips */}
          <View className="flex flex-row gap-2 mt-4 md:mt-0 font-mono text-xs">
            {["ALL", "ENTERPRISE", "BACKEND", "FRAMEWORK"].map((type) => (
              <Button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeFilter === type
                    ? "bg-amber-600 text-stone-950 font-bold"
                    : "bg-stone-900 text-stone-400 hover:text-amber-200"
                }`}
              >
                {type}
              </Button>
            ))}
          </View>
        </View>

        <FlatList
          data={filteredSystems}
          renderItem={({ item }) => (
            <Card className="bg-stone-900/70 border border-amber-900/30 hover:border-amber-600/60 transition-all rounded-xl p-6 mb-6">
              <View className="flex flex-row justify-between items-start mb-4">
                <Span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-950 border border-amber-800/40 text-amber-400">
                  {item.status}
                </Span>
                <Span className="text-xs font-mono text-stone-400">
                  {item.bounty}
                </Span>
              </View>

              <H3 className="text-2xl font-serif font-bold text-amber-100 mb-2">
                {item.title}
              </H3>

              <Text className="text-stone-300 text-sm mb-6 leading-relaxed">
                {item.desc}
              </Text>

              <View className="flex flex-row flex-wrap gap-2 pt-4 border-t border-stone-800/60">
                {item.tech.map((t, idx) => (
                  <Span
                    key={idx}
                    className="text-[11px] font-mono bg-stone-950 text-stone-400 px-2.5 py-1 rounded border border-stone-800"
                  >
                    #{t}
                  </Span>
                ))}
              </View>
            </Card>
          )}
        />
      </Container>

      {/* Technical Arsenal */}
      <Container className="py-20 max-w-6xl mx-auto px-6 border-t border-amber-900/20">
        <View className="text-center max-w-2xl mx-auto mb-16">
          <Span className="text-amber-500 font-mono text-xs tracking-widest uppercase">
            Technical Arsenal
          </Span>
          <H2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100 mt-1">
            Core Competencies & Stack Depth
          </H2>
        </View>

        <View className="grid md:grid-cols-2 gap-8">
          {ARCHITECTURE_DOMAINS.map((domain, idx) => (
            <Card
              key={idx}
              className="bg-stone-900/60 border border-amber-950 p-6 rounded-xl space-y-6"
            >
              <H4 className="text-lg font-serif font-bold text-amber-400 flex items-center gap-2">
                <span>{domain.icon}</span> {domain.category}
              </H4>

              <View className="space-y-4">
                {domain.skills.map((skill, sIdx) => (
                  <View key={sIdx}>
                    <View className="flex flex-row justify-between text-xs font-mono mb-1.5 text-stone-300">
                      <Text>{skill.name}</Text>
                      <Span className="text-amber-500">{skill.value}%</Span>
                    </View>
                    <Progress
                      value={skill.value}
                      className="h-2 bg-stone-950 rounded-full"
                    />
                  </View>
                ))}
              </View>
            </Card>
          ))}
        </View>
      </Container>

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