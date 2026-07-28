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
    icon: <AIPoweredIcon className="h-8 w-8 text-orange-500" />,
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
    icon:<CRMPlatformIcon className="h-8 w-8 text-orange-500" />,
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
    icon: <RealtimeMarketplaceIcon className="h-8 w-8 text-orange-500" />,
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
    <Container id="projects" className="max-w-7xl py-28">

    <View className="text-center mb-10 lg:mb-16">
  <View className="inline-flex items-center gap-2 mb-1">
    <Span
      className="h-px w-8"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(245,158,11,0.7))",
      }}
    />
    <Span
      style={{ letterSpacing: "0.35em" }}
      className="uppercase tracking-widest text-amber-400 font-mono font-bold text-3xl"
    >
      Portfolio
    </Span>
    <Span
      className="h-px w-8"
      style={{
        background:
          "linear-gradient(to left, transparent, rgba(245,158,11,0.7))",
      }}
    />
  </View>

  <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
    <Span
      className="font-serif italic font-light ta-heading-shine"
      data-text="Selected Project"
    >
      Selected Project{" "}
    </Span>

    <span className="inline-block w-3 sm:w-4" />

    <Span
      className="font-sans font-bold not-italic ta-heading-shine"
      data-text="Experience"
    >
      Experience
    </Span>
  </H2>

  <View className="mt-4 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

  <Span className="mt-6 block text-stone-400 text-base sm:text-lg max-w-3xl mx-auto leading-8">
    Enterprise software engineered for scale, reliability and business impact.
  </Span>
</View>

      <View className="grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <Card
            key={project.title}
            className=" rounded-3xl bg-stone-900"
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