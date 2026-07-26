import React from "react";
import { Card, Container, H2, H4, Span, View } from "strivui";

const leadershipItems = [
  {
    icon: <TeamIcon className="w-7 h-7 text-yellow-500" />,
    title: "Engineering Leadership",
    description:
      "Led engineering teams across multiple enterprise projects while driving technical execution and delivery.",
  },
  {
    icon: <SystemDesignIcon className="w-7 h-7 text-yellow-500" />,
    title: "Architecture & Planning",
    description:
      "Conducted architecture reviews and technical planning for scalable software solutions.",
  },
  {
    icon: <GraduationIcon className="w-7 h-7 text-yellow-500" />,
    title: "Mentorship",
    description:
      "Mentored junior and mid-level engineers through code reviews, technical guidance, and knowledge sharing.",
  },
  {
    icon: <HandshakeIcon className="w-7 h-7 text-yellow-500" />,
    title: "Stakeholder Collaboration",
    description:
      "Worked directly with founders, clients, and product teams to transform business ideas into technical solutions.",
  },
  {
    icon: <CalendarIcon className="w-7 h-7 text-yellow-500" />,
    title: "Agile Delivery",
    description:
      "Managed sprint planning, project timelines, and cross-functional engineering collaboration.",
  },
  {
    icon: <ChartIcon className="w-7 h-7 text-yellow-500" />,
    title: "Engineering Estimation",
    description:
      "Estimated engineering effort, resource allocation, and project delivery schedules.",
  },
  {
    icon: <ShieldCheckIcon className="w-7 h-7 text-yellow-500" />,
    title: "Code Quality",
    description:
      "Maintained engineering standards through code reviews, best practices, and continuous improvements.",
  },
  {
    icon: <RocketIcon className="w-7 h-7 text-yellow-500" />,
    title: "Product Ownership",
    description:
      "Delivered products from concept and architecture through deployment and production support.",
  },
];

export default function LeadershipOwnership() {
  return (
    <Container className="py-24">
      <View className="text-center mb-14">
        <Span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
          Leadership
        </Span>

        <H2 className="mt-3 text-4xl font-bold">
          Leadership & Product Ownership
        </H2>

        <Span className="mt-4 max-w-3xl mx-auto block text-gray-500">
          Leading teams, designing scalable systems, and delivering enterprise
          software from idea to production.
        </Span>
      </View>

      <View className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {leadershipItems.map((item) => (
          <Card
            key={item.title}
            className="p-6 bg-stone-900 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <View className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl mb-5">
              {item.icon}
            </View>

            <H4 className="mb-3">{item.title}</H4>

            <Span className="text-gray-600 leading-7">
              {item.description}
            </Span>
          </Card>
        ))}
      </View>
    </Container>
  );
}