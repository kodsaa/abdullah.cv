import React from "react";
import {
  Button,
  Card,
  Container,
  H2,
  H3,
  Span,
  View,
  Badge
} from "strivui";
import {
  ERPIcon,
  CRMPlatformIcon,
  AIPoweredIcon,
  RealtimeMarketplaceIcon,
} from "../icon/icon";

const projects = [
  {
    title: "Enterprise ERP Platform",
    icon:  <ERPIcon className="h-8 w-8 text-orange-500" />,
    color: "from-amber-600 to-orange-700",

    description:
      "Designed and developed enterprise-grade ERP modules covering HR, Payroll, Attendance, Inventory, Operations, Sales, Finance, Reporting, workflow automation, secure RBAC, and real-time analytics.",

    technologies: [
      "React",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },

  {
    title: "AI-Powered E-Commerce",
    icon: <AIPoweredIcon className="h-8 w-8 text-cyan-500" />,
    color: "from-cyan-500 to-blue-600",

    description:
      "Developed an AI-driven commerce ecosystem including customer portal, vendor portal, admin dashboard, React Native applications, inventory, payments, AI recommendations and intelligent automation.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AI",
      "React Native",
      "Stripe",
    ],
  },

  {
    title: "CRM Platform",
    icon: <CRMPlatformIcon className="h-8 w-8 text-purple-500" />,
    color: "from-purple-500 to-fuchsia-700",

    description:
      "Created a modern CRM supporting customer lifecycle management, lead tracking, workflow automation, reporting, communication history and enterprise role management.",

    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Redis",
      "Socket.io",
    ],
  },

  {
    title: "Real-Time Marketplace",
    icon: <RealtimeMarketplaceIcon className="h-8 w-8 text-emerald-500" />,
    color: "from-emerald-500 to-green-700",

    description:
      "Engineered scalable marketplace and booking platforms using real-time communication, WebSockets, distributed services, secure authentication and high-performance APIs.",

    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
    ],
  },
];

export default function ProjectExperience() {
  return (
    <Container className="max-w-7xl py-28">

      <View className="text-center mb-16">

        <Span className="uppercase tracking-[6px] text-amber-500">
          Portfolio
        </Span>

        <H2 className="text-5xl font-black mt-3 text-white">
          Selected Project Experience
        </H2>

        <Span className="text-stone-400 text-lg mt-3 block">
          Enterprise software engineered for scale, reliability and business
          impact.
        </Span>

      </View>

      <View className="grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <Card
            key={project.title}
            className="group relative overflow-hidden rounded-3xl bg-stone-900 border border-stone-700 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-500"
          >
            <View
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}
            />

            <View className="p-8">

              <View className="flex justify-between items-center mb-5">

                <View className="text-5xl">
                  {project.icon}
                </View>

                <Span color="success">
                  Enterprise
                </Span>

              </View>

              <H3 className="text-white mb-4">
                {project.title}
              </H3>

              <Span className="leading-7 text-stone-300">
                {project.description}
              </Span>

              <View className="flex flex-wrap gap-2 mt-8">

                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-stone-800 text-amber-800 border-amber-700"
                  >
                    {tech}
                  </Badge>
                ))}

              </View>

              <Button
                className="mt-8 text-amber-400 hover:text-white"
              >
                View Architecture →
              </Button>

            </View>
          </Card>
        ))}

      </View>
    </Container>
  );
}