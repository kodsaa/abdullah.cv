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

const TechnicalArsenal = () => {
  return (
    <Container className="relative max-w-7xl mx-auto py-6 px-6">

      {/* Heading */}

      <View className="text-center mb-16">

        <Span className="uppercase tracking-[0.35em] text-xs text-amber-500 font-mono">
          Engineering Profile
        </Span>

        <H2 className="mt-3 text-5xl font-serif text-amber-100">
          Building Enterprise Software at Scale
        </H2>

        <Text className="mt-6 text-stone-400 max-w-3xl mx-auto leading-8">
          Experienced in architecting enterprise platforms, designing scalable
          backend systems, leading engineering initiatives, and delivering
          production-ready software used across multiple business domains.
        </Text>

      </View>

      {/* Cards */}

      <View className="grid grid-cols-3 gap-8">

        {ENGINEERING_PROFILE.map((section) => (

          <Card
            key={section.title}
            className="
              group
              rounded-3xl
              border
              bg-stone-900
              bg-gradient-to-b
              from-stone-900/80
              to-stone-950
              p-8
              transition-all
              duration-500
              hover:border-amber-500/60
              hover:-translate-y-2
              hover:shadow-[0_0_50px_rgba(245,158,11,.15)]
            "
          >

            <View className="flex items-center gap-4 mb-8">

              <View className="
                h-16
                w-16
                rounded-2xl
                bg-stone-700
                flex
                items-center
                justify-center
                text-3xl
              ">
                {section.icon}
              </View>

              <View>

                <H3 className="text-amber-100 text-2xl font-serif">
                  {section.title}
                </H3>

                <Span className="text-xs uppercase tracking-widest text-amber-500">
                  Core Expertise
                </Span>

              </View>

            </View>

            <View className="grid gap-3">

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
                    px-2
                    py-2
                    transition-all
                    duration-300
                    hover:border-amber-700
                    hover:bg-amber-500/5
                  "
                >
                  <View className="h-2 w-2 rounded-full bg-amber-500" />

                  <Text className="text-stone-300 text-sm">
                    {item}
                  </Text>

                </View>

              ))}

            </View>

          </Card>

        ))}

      </View>

      {/* Bottom Stats */}

      <View className="grid grid-cols-4 gap-6 mt-4">

        {[
          ["5+", "Years Experience"],
          ["20+", "Enterprise Projects"],
          ["10+", "Business Domains"],
          ["100%", "Production Focus"],
        ].map(([value, label]) => (

          <Card
            key={label}
            className="bg-stone-900 border border-amber-900/20 rounded-2xl p-8 text-center"
          >
            <H2 className="text-5xl text-amber-400 font-bold">
              {value}
            </H2>

            <Text className="mt-2 text-stone-400 uppercase tracking-widest text-xs">
              {label}
            </Text>

          </Card>

        ))}

      </View>

    </Container>
  );
};

export default TechnicalArsenal;

