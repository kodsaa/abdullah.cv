

import {CodeIcon, ReactIcon, BackendIcon, DatabaseIcon, SystemDesignIcon} from "../icon/icon";

const TECHNICAL_EXPERTISE = [
  {
    icon: <CodeIcon className="h-8 w-8 text-orange-500" />,
    title: "Programming Languages",
    description: "High-performance application development with modern and low-level languages.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "OOP",
      "Async Programming",
      "Memory Management",
      "Performance Profiling",
    ],
  },

  {
    icon: <ReactIcon className="h-8 w-8 text-orange-500" />,
    title: "Frontend Engineering",
    description: "Modern React ecosystem with enterprise-scale frontend architecture.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "Tailwind CSS",
      "StrivUI",
    ],
  },

  {
    icon: <BackendIcon className="h-8 w-8 text-orange-500" />,
    title: "Backend Engineering",
    description: "Scalable backend services and enterprise application architecture.",
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
      "REST API",
      "GraphQL",
      "JWT",
      "RBAC",
    ],
  },

  {
    icon: <DatabaseIcon className="h-8 w-8 text-orange-500" />,
    title: "Databases",
    description: "SQL & NoSQL databases with optimization and scaling strategies.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Firebase",
      "Indexing",
      "Aggregation",
      "Replication",
    ],
  },

  {
    icon: <SystemDesignIcon className="h-8 w-8 text-orange-500" />,
    title: "System Design",
    description: "Enterprise architecture, distributed systems and scalable infrastructure.",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Load Balancing",
      "Caching",
      "Queues",
      "Clean Architecture",
      "SOLID",
      "Design Patterns",
    ],
  },

  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Building intelligent applications powered by modern AI.",
    skills: [
      "OpenAI",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "LLMs",
      "RAG",
      "AI Agents",
    ],
  },

  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Production deployments with CI/CD and containerized infrastructure.",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Nginx",
      "PM2",
      "Cloudflare",
      "CI/CD",
    ],
  },

  {
    icon: "⚡",
    title: "Real-Time Systems",
    description: "Low-latency communication and streaming platforms.",
    skills: [
      "WebRTC",
      "Socket.io",
      "WebSockets",
      "Pusher",
      "Streaming",
      "Real-Time Sync",
    ],
  },
];

import {
  Button,
  Card,
  Container,
  H2,
  H3,
  Span,
  Text,
  View,
} from "strivui";

const TechnicalExpertise = () => {
  return (
    <Container className="max-w-7xl mx-auto py-24 px-6">

      <View className="text-center mb-16">

        <Span className="uppercase tracking-[0.4em] text-amber-500 font-mono">
          Technical Expertise
        </Span>

        <H2 className="mt-3 text-5xl font-serif text-amber-100">
          Engineering Excellence
        </H2>

        <Text className="mt-5 max-w-3xl mx-auto text-stone-400 leading-8">
          Building scalable enterprise software through modern architecture,
          distributed systems, AI integration, and production-ready engineering.
        </Text>

      </View>

      <View className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {TECHNICAL_EXPERTISE.map((item) => (

          <Card
            key={item.title}
            className="
            group
            rounded-3xl
            bg-stone-900
            p-7
            transition-all
            duration-300
            hover:border-amber-500
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(245,158,11,.12)]
            "
          >

            <View className="flex items-center gap-4 mb-5">

              <View className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl">
                {item.icon}
              </View>

              <H3 className="text-xl font-serif text-amber-100">
                {item.title}
              </H3>

            </View>

            <Text className="text-stone-400 text-sm leading-7 mb-6">
              {item.description}
            </Text>

            <View className="flex flex-wrap gap-2">

              {item.skills.map((skill) => (

                <Button
                  key={skill}
                  className="
                  rounded-full
                  border
                  border-amber-800/40
                  bg-amber-600
                  px-3
                  py-1.5
                  text-xs
                  transition
                  hover:bg-amber-500
                  hover:text-black
                  "
                >
                  {skill}
                </Button>

              ))}

            </View>

          </Card>

        ))}

      </View>

    </Container>
  );
};

export default TechnicalExpertise;