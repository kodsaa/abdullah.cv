import React, { useState } from 'react'
import {
  Container,
  View,
  Card,
  H2,
  H3,
  Text,
  Span,
  Button,
  FlatList,
} from "strivui";
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
const Feature = () => {
      const [activeFilter, setActiveFilter] = useState("ALL");
        const filteredSystems =
    activeFilter === "ALL"
      ? PRODUCTION_SYSTEMS
      : PRODUCTION_SYSTEMS.filter((item) => item.type === activeFilter);
    
  return (
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
                    ? "bg-amber-600 text-stone-900 font-bold"
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
            <Card className="bg-stone-900 border border-amber-900 hover:border-amber-600 transition-all rounded-xl p-6 mb-6">
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
  )
}

export default Feature
