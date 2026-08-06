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
    company: "HOLY ROCK GREEN FLAG Engineering Consultant",
    location: "Riyadh, Saudi Arabia",
    employmentType: "On-site",
    period: "Oct 2025 – Present",
    role: "Senior Software Engineer",

    overview:
      "Leading the architecture and development of enterprise software solutions for international clients, focusing on scalable backend systems, AI-powered applications, cloud-native infrastructure, and modern engineering practices.",

    responsibilities: [
      "Architect enterprise backend systems using Python (FastAPI & Django).",
      "Design scalable service-oriented architectures capable of supporting production-scale workloads.",
      "Develop AI-powered business applications using PyTorch and Large Language Models.",
      "Optimize PostgreSQL and MySQL databases for performance, scalability, and reliability.",
      "Translate complex business requirements into scalable technical solutions in collaboration with product owners and stakeholders.",
      "Improve engineering quality through architecture reviews, automated testing, technical documentation, and mentoring.",
      "Support cloud deployments and modern CI/CD workflows on Google Cloud Platform.",
    ],

    achievements: [
      "Designed scalable backend architecture supporting enterprise workloads.",
      "Improved deployment reliability through modern engineering practices.",
      "Enhanced database performance and system scalability.",
      "Established maintainable engineering standards across projects.",
    ],

    leadership: [
      "Technical Architecture",
      "Engineering Mentorship",
      "Cross-functional Collaboration",
      "Software Quality",
      "Cloud Deployment",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "PyTorch",
      "LLMs",
      "PostgreSQL",
      "MySQL",
      "Google Cloud",
      "CI/CD",
    ],
  },

  {
    company: "Adiya Business Solution",
    location: "Mumbai, India",
    employmentType: "Hybrid",
    period: "Apr 2025 – Sep 2025",
    role: "Project Manager • Full Stack Engineer",

    overview:
      "Managed the complete software delivery lifecycle while leading engineering execution, coordinating cross-functional teams, and aligning technology with business objectives.",

    responsibilities: [
      "Managed projects from requirement gathering through production deployment.",
      "Led sprint planning, engineering estimations, release planning, and delivery execution.",
      "Designed scalable React architecture with reusable component libraries and modular design systems.",
      "Worked directly with business stakeholders to translate requirements into technical roadmaps.",
      "Improved engineering quality through testing strategies, code reviews, and development standards.",
      "Established frontend testing using Jest and React Testing Library.",
    ],

    achievements: [
      "Reduced production defects through improved engineering practices.",
      "Accelerated engineering delivery across multiple product teams.",
      "Improved frontend maintainability and long-term scalability.",
    ],

    leadership: [
      "Project Management",
      "Sprint Planning",
      "Release Management",
      "Stakeholder Communication",
      "Architecture Design",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Jest",
      "React Testing Library",
      "Node.js",
    ],
  },

  {
    company: "Adiya Business Solution",
    location: "Mumbai, India",
    employmentType: "Hybrid",
    period: "Apr 2023 – Mar 2025",
    role: "Technical Lead • Full Stack Engineer",

    overview:
      "Led engineering teams responsible for designing, building, and delivering enterprise software platforms across multiple industries while defining software architecture and engineering standards.",

    products: [
      "Enterprise ERP Platform",
      "CRM Platform",
      "Enterprise E-Commerce Platform",
      "Vendor Management Portal",
      "Customer Web Platform",
      "AI-enabled Admin Platform",
      "React Native Mobile Applications",
      "Service Marketplace",
    ],

    responsibilities: [
      "Led cross-functional engineering teams throughout the software development lifecycle.",
      "Defined software architecture for enterprise-scale applications.",
      "Designed REST APIs, authentication systems, RBAC, WebSocket services, and distributed backend architectures.",
      "Built scalable frontend and backend applications using React, React Native, Node.js, and FastAPI.",
      "Managed production deployments, release planning, and engineering delivery.",
      "Collaborated directly with founders, clients, designers, QA engineers, and business teams.",
      "Conducted architecture discussions, code reviews, and developer mentoring.",
    ],

    achievements: [
      "Delivered multiple enterprise platforms successfully to production.",
      "Improved engineering consistency through architectural standards.",
      "Built highly maintainable and scalable software systems.",
      "Mentored engineering teams and strengthened development practices.",
    ],

    leadership: [
      "Technical Leadership",
      "Software Architecture",
      "Code Reviews",
      "Developer Mentoring",
      "Production Releases",
      "Engineering Standards",
    ],

    technologies: [
      "React",
      "React Native",
      "Node.js",
      "FastAPI",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "JWT",
    ],
  },

  {
    company: "Adiya Business Solution",
    location: "Mumbai, India",
    employmentType: "Hybrid",
    period: "Jan 2023 – Apr 2023",
    role: "Full Stack Engineer",

    overview:
      "Contributed to enterprise application development across frontend and backend while building secure and scalable business systems.",

    responsibilities: [
      "Built ERP and CRM platforms.",
      "Developed secure backend APIs.",
      "Implemented authentication and Role-Based Access Control (RBAC).",
      "Developed reusable frontend components.",
      "Collaborated with senior engineers on enterprise architecture.",
    ],

    achievements: [
      "Delivered production-ready ERP modules.",
      "Improved backend security through RBAC implementation.",
      "Built reusable application components.",
    ],

    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },

  {
    company: "NextGenDevGitOrg",
    location: "Mumbai, India",
    employmentType: "Remote",
    period: "Jan 2022 – Dec 2022",
    role: "Frontend Developer • Trainer",

    overview:
      "Delivered modern frontend applications while mentoring developers and helping improve engineering practices across the development community.",

    responsibilities: [
      "Developed responsive React and TypeScript applications.",
      "Created reusable UI component libraries.",
      "Integrated REST APIs into enterprise applications.",
      "Optimized performance using lazy loading, caching, and code splitting.",
      "Improved accessibility and frontend performance.",
      "Mentored junior developers through training sessions and mock interviews.",
      "Participated in engineering discussions and code reviews.",
    ],

    achievements: [
      "Improved frontend performance across multiple applications.",
      "Mentored aspiring frontend engineers.",
      "Established reusable frontend architecture.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "REST APIs",
      "HTML",
      "CSS",
    ],
  },

  {
    company: "NextGenDevGitOrg",
    location: "Mumbai, India",
    employmentType: "Hybrid",
    period: "Jan 2022 – Jun 2022",
    role: "Frontend Developer Intern",

    overview:
      "Started my professional engineering journey by building responsive user interfaces and learning modern software development practices.",

    responsibilities: [
      "Built responsive web interfaces.",
      "Worked with HTML5, CSS3, JavaScript, and React.",
      "Learned component-based architecture and modern frontend development.",
      "Collaborated with senior developers in agile teams.",
    ],

    achievements: [
      "Successfully delivered assigned frontend features.",
      "Built a strong foundation in software engineering.",
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
            data-text="Professional"
          >
            {t("professionalWord")} 
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

        <Text className="theme_section_paragraph mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-stone-400 leading-7 lg:leading-8">
          Building enterprise software, leading engineering teams, and
          delivering scalable products that create measurable business
          value.
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
                    <Text className="exp-company">{job.company}</Text>
                    <H3 className="exp-role">{job.role}</H3>
                    <Text className="exp-location">{job.location}</Text>
                  </View>

                  <View className="exp-meta">
                    <span className={`exp-period ${isCurrent ? "exp-period--current" : ""}`}>
                      {job.period}
                    </span>
                    <span className="exp-type">{job.employmentType}</span>
                  </View>
                </View>

                <Text className="exp-overview">{job.overview}</Text>

                <View className="exp-columns">
                  {/* Achievements */}
                  <View className="exp-col">
                    <Text className="exp-col-label">Key Achievements</Text>
                    <View className="flex flex-col gap-2">
                      {job.achievements.map((item) => (
                        <View key={item} className="exp-pill">
                          {item}
                        </View>
                      ))}
                    </View>
                  </View>

                  {/* Responsibilities */}
                  <View className="exp-col">
                    <Text className="exp-col-label">Core Responsibilities</Text>
                    <View className="flex flex-col gap-2">
                      {job.responsibilities.slice(0, 5).map((item) => (
                        <View key={item} className="exp-check-row">
                          <span className="exp-check-mark">✓</span>
                          <span className="exp-check-text">{item}</span>
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