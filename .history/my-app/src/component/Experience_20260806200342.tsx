import {
  Card,
  Container,
  H2,
  H3,
  Span,
  Text,
  View,
} from "strivui";
 import { useTranslation } from "react-i18next";
export const EXPERIENCE = [
{
  company: "job1Company",
  location: "job1Location",
  employmentType: "job1EmploymentType",
  period: "job1Period",
  role: "job1Role",

  overview: "job1Overview",

  responsibilities: [
    "job1Resp1", "job1Resp2", "job1Resp3", "job1Resp4", "job1Resp5", "job1Resp6", "job1Resp7",
  ],

  achievements: [
    "job1Achieve1", "job1Achieve2", "job1Achieve3", "job1Achieve4",
  ],

  leadership: [
    "job1Lead1", "job1Lead2", "job1Lead3", "job1Lead4", "job1Lead5",
  ],

  technologies: [
    "Python", "FastAPI", "Django", "PyTorch", "LLMs", "PostgreSQL", "MySQL", "Google Cloud", "CI/CD",
  ],
},
 {
  company: "job2Company",
  location: "job2Location",
  employmentType: "job2EmploymentType",
  period: "job2Period",
  role: "job2Role",

  overview: "job2Overview",

  responsibilities: [
    "job2Resp1", "job2Resp2", "job2Resp3", "job2Resp4", "job2Resp5", "job2Resp6",
  ],

  achievements: [
    "job2Achieve1", "job2Achieve2", "job2Achieve3",
  ],

  leadership: [
    "job2Lead1", "job2Lead2", "job2Lead3", "job2Lead4", "job2Lead5",
  ],

  technologies: [
    "React", "TypeScript", "Redux Toolkit", "Jest", "React Testing Library", "Node.js",
  ],
},

{
  company: "job3Company",
  location: "job3Location",
  employmentType: "job3EmploymentType",
  period: "job3Period",
  role: "job3Role",

  overview: "job3Overview",

  products: [
    "job3Product1", "job3Product2", "job3Product3", "job3Product4", "job3Product5", "job3Product6", "job3Product7", "job3Product8",
  ],

  responsibilities: [
    "job3Resp1", "job3Resp2", "job3Resp3", "job3Resp4", "job3Resp5", "job3Resp6", "job3Resp7",
  ],

  achievements: [
    "job3Achieve1", "job3Achieve2", "job3Achieve3", "job3Achieve4",
  ],

  leadership: [
    "job3Lead1", "job3Lead2", "job3Lead3", "job3Lead4", "job3Lead5", "job3Lead6",
  ],

  technologies: [
    "React", "React Native", "Node.js", "FastAPI", "Django", "MongoDB", "PostgreSQL", "Redis", "WebSockets", "JWT",
  ],
},

{
  company: "job4Company",
  location: "job4Location",
  employmentType: "job4EmploymentType",
  period: "job4Period",
  role: "job4Role",

  overview: "job4Overview",

  responsibilities: [
    "job4Resp1", "job4Resp2", "job4Resp3", "job4Resp4", "job4Resp5",
  ],

  achievements: [
    "job4Achieve1", "job4Achieve2", "job4Achieve3",
  ],

  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
},

{
  company: "job5Company",
  location: "job5Location",
  employmentType: "job5EmploymentType",
  period: "job5Period",
  role: "job5Role",

  overview: "job5Overview",

  responsibilities: [
    "job5Resp1", "job5Resp2", "job5Resp3", "job5Resp4", "job5Resp5", "job5Resp6", "job5Resp7",
  ],

  achievements: [
    "job5Achieve1", "job5Achieve2", "job5Achieve3",
  ],

  technologies: [
    "React", "TypeScript", "JavaScript", "Redux", "REST APIs", "HTML", "CSS",
  ],
},

{
  company: "job6Company",
  location: "job6Location",
  employmentType: "job6EmploymentType",
  period: "job6Period",
  role: "job6Role",

  overview: "job6Overview",

  responsibilities: [
    "job6Resp1", "job6Resp2", "job6Resp3", "job6Resp4",
  ],

  achievements: [
    "job6Achieve1", "job6Achieve2",
  ],

  technologies: ["HTML", "CSS", "JavaScript", "React"],
},
];

const Experience = () => {
  const { t } = useTranslation();
  return (
    <Container id="experience" className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6">
      {/* Heading */}
      <View className="text-center mb-16 sm:mb-20">
        <View className="inline-flex items-center gap-2 mb-1">
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
          <Span
            className="uppercase tracking-widest font-mono font-bold text-3xl theme_section_main_heading"
            style={{ letterSpacing: "0.35em" }}
          >
           {t("careerJourney")}
          </Span>
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
        </View>

        <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <Span
            className="font-serif italic font-light ta-heading-shine"
            data-text={t("professionalWord")} 
          >
            {t("professionalWord")} 
          </Span>
          <span className="inline-block w-3 sm:w-4" />
          <Span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text=    {t("experienceWord")}
          >
        {t("experienceWord")}
          </Span>
        </H2>

        <View className="mt-4 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <Text className="theme_section_paragraph mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-stone-400 leading-7 lg:leading-8">
         {t("experienceTagline")}
        </Text>
      </View>

      {/* Ledger */}
      <View className="exp-ledger">
        {EXPERIENCE.map((job, index) => {
          const isCurrent = job.period.toLowerCase().includes("present");
          return (
            <View key={index} className="exp-entry ">
              {/* Marker column */}
              <View className="exp-marker-col">
                <span className={`exp-marker ${isCurrent ? "exp-marker--current" : ""}`}>
                  {String(EXPERIENCE.length - index).padStart(2, "0")}
                </span>
                <span className="exp-marker-line" />
              </View>

              {/* Content */}
              <Card className="exp-card theme_card_background">
                <View className="exp-card-head">
                  <View>
                    <Text className="exp-company"> {t(job.company)}</Text>
                    <H3 className="exp-role">{t(job.role)}</H3>
                    <Text className="exp-location">{t(job.location)}</Text>
                  </View>

                  <View className="exp-meta">
                    <span className={`exp-period ${isCurrent ? "exp-period--current" : ""}`}>
                      {t(job.period)} 
                    </span>
                    <span className="exp-type">{t(job.employmentType)}</span>
                  </View>
                </View>

                <Text className="exp-overview">{t(job.overview)}</Text>

                <View className="exp-columns">
                  {/* Achievements */}
                  <View className="exp-col">
                    <Text className="exp-col-label">{t("keyAchievements")}</Text>
                    <View className="flex flex-col gap-2">
                      {job.achievements.map((item) => (
                       <View key={item} className="exp-pill"> {t(item)} </View>
                      ))}
                    </View>
                  </View>

                  {/* Responsibilities */}
                  <View className="exp-col">
                    <Text className="exp-col-label">{t("coreResponsibilities")}</Text>
                    <View className="flex flex-col gap-2">
                      {job.responsibilities.slice(0, 5).map((item) => (
                        <View key={item} className="exp-check-row">
                          <span className="exp-check-mark">✓</span>
                          <span className="exp-check-text">{t(item)}</span>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>

                {/* Technologies */}
                <View className="exp-tech-row">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="exp-tech-chip">
                      {tech}
                    </span>
                  ))}
                </View>
              </Card>
            </View>
          );
        })}
      </View>
    </Container>
  );
};

export default Experience;