import {
  Card,
  Container,
  H2,
  H3,
  Span,
  Text,
  View,
} from "strivui";

const ENGINEERING_PROFILE = [
  {
    icon: "🏗️",
    title: "Product Development",
    color: "amber",
    items: [
      "Enterprise SaaS Platforms",
      "ERP Solutions",
      "CRM Systems",
      "E-Commerce Platforms",
      "Marketplace Applications",
      "Admin Dashboards",
      "Vendor Portals",
      "Customer Platforms",
      "AI-powered Applications",
      "Mobile Applications",
    ],
  },
  {
    icon: "⚙️",
    title: "Architecture & Engineering",
    color: "orange",
    items: [
      "Software Architecture",
      "System Design",
      "Distributed Systems",
      "Microservices",
      "REST APIs & WebSockets",
      "Authentication & RBAC",
      "Database Design",
      "Performance Optimization",
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Cloud Deployments & CI/CD",
    ],
  },
  {
    icon: "📈",
    title: "Business Understanding",
    color: "yellow",
    items: [
      "Requirement Gathering",
      "Product Discovery",
      "Sprint Planning",
      "Technical Roadmaps",
      "Feature Prioritization",
      "Stakeholder Communication",
      "Agile Development",
      "Risk Management",
      "Production Releases",
      "Technical Documentation",
    ],
  },
];

const STATS = [
  ["5+", "Years Experience"],
  ["20+", "Enterprise Projects"],
  ["10+", "Business Domains"],
  ["100%", "Production Focus"],
];

const TechnicalArsenal = () => {
  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Heading */}
      <View className="text-center mb-10 lg:mb-16">
        <Span className="uppercase tracking-[0.35em] text-xs text-amber-500 font-mono">
          Engineering Profile
        </Span>

        <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-amber-100 leading-tight">
          Building Enterprise Software at Scale
        </H2>

        <Text className="mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-stone-400 leading-7 lg:leading-8 px-2">
          Experienced in architecting enterprise platforms, designing scalable
          backend systems, leading engineering initiatives, and delivering
          production-ready software used across multiple business domains.
        </Text>
      </View>

      {/* Cards */}
      <View className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {ENGINEERING_PROFILE.map((section) => (
          <Card
            key={section.title}
            className="
              group
              rounded-3xl
              border
              border-stone-800
              bg-stone-900
              from-stone-900/80
              to-stone-950
              p-5
              sm:p-6
              lg:p-8
              transition-all
              duration-500
              hover:border-amber-500/60
              hover:-translate-y-2
              hover:shadow-[0_0_50px_rgba(245,158,11,.15)]
            "
          >
            {/* Card Header */}
            <View className="flex items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
              <View
                className="
                  h-12
                  w-12
                  sm:h-14
                  sm:w-14
                  lg:h-16
                  lg:w-16
                  rounded-2xl
                  bg-stone-700
                  flex
                  items-center
                  justify-center
                  text-2xl
                  sm:text-3xl
                  shrink-0
                "
              >
                {section.icon}
              </View>

              <View className="min-w-0">
                <H3 className="text-xl sm:text-2xl font-serif text-amber-100 leading-tight">
                  {section.title}
                </H3>

                <Span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500">
                  Core Expertise
                </Span>
              </View>
            </View>

            {/* Skills */}
            <View className="grid gap-2 sm:gap-3">
              {section.items.map((item) => (
                <View
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-stone-800
                    bg-stone-900/60
                    px-3
                    py-2.5
                    transition-all
                    duration-300
                    hover:border-amber-700
                    hover:bg-amber-500/5
                  "
                >
                  <View className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />

                  <Text className="text-sm sm:text-base text-stone-300 leading-6">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>

      {/* Bottom Stats */}
      <View className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 lg:mt-16">
        {STATS.map(([value, label]) => (
          <Card
            key={label}
            className="
              bg-stone-900
              border
              border-amber-900/20
              rounded-2xl
              p-5
              sm:p-6
              lg:p-8
              text-center
              transition-all
              duration-300
              hover:border-amber-500/40
            "
          >
            <H2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
              {value}
            </H2>

            <Text className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-400">
              {label}
            </Text>
          </Card>
        ))}
      </View>
    </Container>
  );
};

export default TechnicalArsenal;