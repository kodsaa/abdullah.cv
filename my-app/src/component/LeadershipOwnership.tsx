import React from "react";
import { Card, Container, H2, H4, Span, View } from "strivui";

import {
  LeadershipIcon,
  ArchitectureIcon,
  MentorshipIcon,
  StakeholderIcon,
  AgileDeliveryIcon,
  EngineeringEstimationIcon,
  CodeQualityIcon,
  ProductOwnershipIcon,
} from "../icon/icon";

const leadershipItems = [
  {
    icon: <LeadershipIcon className="h-6 w-6 text-orange-500" />,
    title: "Engineering Leadership",
    description:
      "Led engineering teams across multiple enterprise projects while driving technical execution and delivery.",
  },
  {
    icon: <ArchitectureIcon className="h-6 w-6 text-orange-500" />,
    title: "Architecture & Planning",
    description:
      "Conducted architecture reviews and technical planning for scalable software solutions.",
  },
  {
    icon: <MentorshipIcon className="h-6 w-6 text-orange-500" />,
    title: "Mentorship",
    description:
      "Mentored junior and mid-level engineers through code reviews, technical guidance, and knowledge sharing.",
  },
  {
    icon: <StakeholderIcon className="h-6 w-6 text-orange-500" />,
    title: "Stakeholder Collaboration",
    description:
      "Worked directly with founders, clients, and product teams to transform business ideas into technical solutions.",
  },
  {
    icon: <AgileDeliveryIcon className="h-6 w-6 text-orange-500" />,
    title: "Agile Delivery",
    description:
      "Managed sprint planning, project timelines, and cross-functional engineering collaboration.",
  },
  {
    icon: <EngineeringEstimationIcon className="h-6 w-6 text-orange-500" />,
    title: "Engineering Estimation",
    description:
      "Estimated engineering effort, resource allocation, and project delivery schedules.",
  },
  {
    icon: <CodeQualityIcon className="h-6 w-6 text-orange-500" />,
    title: "Code Quality",
    description:
      "Maintained engineering standards through code reviews, best practices, and continuous improvements.",
  },
  {
    icon: <ProductOwnershipIcon className="h-6 w-6 text-orange-500" />,
    title: "Product Ownership",
    description:
      "Delivered products from concept and architecture through deployment and production support.",
  },
];

export default function LeadershipOwnership() {
  return (
    <Container className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="text-center mb-12 sm:mb-16">
        <View className="inline-flex items-center gap-2 mb-1">
          <Span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(245,158,11,0.7))",
            }}
          />
          <Span
            className="uppercase tracking-widest text-amber-400 font-mono font-bold text-3xl"
            style={{ letterSpacing: "0.35em" }}
          >
            Leadership
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
            data-text="Leadership &"
          >
            Leadership &
          </Span>
          <span className="inline-block w-3 sm:w-4" />
          <Span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text="Product Ownership"
          >
            Product Ownership
          </Span>
        </H2>

        <View className="mt-4 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <Span className="mt-6 block text-base sm:text-lg text-stone-400 max-w-3xl mx-auto leading-relaxed">
          Leading teams, designing scalable systems, and delivering
          enterprise software from idea to production.
        </Span>
      </View>

      <View className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
        {leadershipItems.map((item) => (
          <div key={item.title} className="lo-stack">
            <div className="lo-stack-shadow" />
            <div className="lo-card">
              <View className="lo-icon">{item.icon}</View>

              <H4 className="lo-title">{item.title}</H4>

              <span className="lo-divider" />

              <Span className="lo-desc">{item.description}</Span>
            </div>
          </div>
        ))}
      </View>
    </Container>
  );
}