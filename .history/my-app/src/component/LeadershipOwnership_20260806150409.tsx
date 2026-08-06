import React from "react";
import { Card, Container, H2, H4, Span, View } from "strivui";
import { useTranslation } from "react-i18next";
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
    icon: <LeadershipIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle1",
    description:
      "leadDesc1",
  },
  {
    icon: <ArchitectureIcon className="h-6 w-6 theme-icon" />,
    title:  "leadTitle2",
    description:
      "leadDesc2",
  },
  {
    icon: <MentorshipIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle3",
    description:
      "leadDesc3",
  },
  {
    icon: <StakeholderIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle4",
    description:
      "leadDesc4",
  },
  {
    icon: <AgileDeliveryIcon className="h-6 w-6 theme-icon" />,
    title:  "leadTitle5",
    description:
      "leadDesc5",
  },
  {
    icon: <EngineeringEstimationIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle6",
    description:
      "leadDesc6",
  },
  {
    icon: <CodeQualityIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle7",
    description:
      "leadDesc7",
  },
  {
    icon: <ProductOwnershipIcon className="h-6 w-6 theme-icon" />,
    title: "leadTitle8",
    description:
      "leadDesc8",
  },
];

export default function LeadershipOwnership() {

  return (
    <Container className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="text-center mb-12 sm:mb-16">
        <View className="inline-flex items-center gap-2 mb-1">
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
          <Span
            className="uppercase tracking-widest theme_section_main_heading font-mono font-bold text-3xl"
            style={{ letterSpacing: "0.35em" }}
          >
           {t("leadershipLabel")} 
          </Span>
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
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

        <Span className="mt-6 block text-base sm:text-lg  max-w-3xl mx-auto leading-relaxed theme_section_paragraph">
          Leading teams, designing scalable systems, and delivering
          enterprise software from idea to production.
        </Span>
      </View>

      <View className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
        {leadershipItems.map((item) => (
          <View key={item.title} className="lo-stack ">
            <View className="lo-stack-shadow" />
            <View className="lo-card theme_card_background">
              <View className="lo-icon">{item.icon}</View>

              <H4 className="lo-title">{item.title}</H4>

              <Span className="lo-divider" />

              <Span className="lo-desc">{item.description}</Span>
            </View>
          </View>
        ))}
      </View>
    </Container>
  );
}