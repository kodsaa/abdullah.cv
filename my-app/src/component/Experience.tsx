import {
  Card,
  Container,
  H2,
  H3,
  Span,
  Text,
  View,
} from "strivui";

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

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
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

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
];

const Experience = () => {
  return (
    <Container id="experience" className="max-w-7xl mx-auto py-24 px-6">

      {/* Heading */}

      <View className="text-center mb-20">

        <Span className="uppercase tracking-[0.35em] text-xs text-amber-500">
          Career Journey
        </Span>

        <H2 className="mt-3 text-5xl font-serif text-amber-100">
          Professional Experience
        </H2>

        <Text className="mt-5 max-w-3xl mx-auto text-stone-400 leading-8">
          Building enterprise software, leading engineering teams, and delivering
          scalable products that create measurable business value.
        </Text>

      </View>

      <View className="relative">

        {/* Timeline */}

        <View className="absolute left-8 top-0 bottom-0 p-0 w-2 rounded-full bg-white/10 hidden lg:block" />

        <View className="space-y-12">

          {EXPERIENCE?.map((job, index) => (

            <View
              key={index}
              className="relative flex flex-col lg:flex-row gap-8"
            >

              {/* Timeline Dot */}

              <View
                className="
                hidden
                lg:flex
                absolute
                left-2
                top-6
                h-6
                w-6
                rounded-full
                bg-amber-500
                border-4
                border-stone-950
                "
              />

              {/* Date */}

              <View className="w-60 pl-10">

                <Text className="text-amber-400 font-semibold">
                  {job.period}
                </Text>

                <Text className="text-stone-500 text-sm">
                  {job.employmentType}
                </Text>

              </View>

              {/* Card */}

              <Card
                className="
                flex-1
                rounded-3xl
                border
                border-amber-900/30
                bg-stone-900
                p-8
                transition-all
                duration-300
                hover:border-amber-500
                hover:-translate-y-1
                "
              >

                <Text className="text-amber-500 text-sm uppercase tracking-widest">
                  {job.company}
                </Text>

                <H3 className="mt-2 text-3xl text-stone-100 font-serif">
                  {job.role}
                </H3>

                <Text className="mt-2 text-stone-500">
                  {job.location}
                </Text>

                <Text className="mt-6 text-stone-300 leading-8">
                  {job.overview}
                </Text>

                {/* Highlights */}

                <View className="mt-8">

                  <Text className="text-xs uppercase tracking-widest text-amber-500 mb-3">
                    Key Responsibilities
                  </Text>

                  <View className="flex flex-wrap gap-3">

                    {job.achievements.map((item) => (

                      <Span
                        key={item}
                        className="
                        rounded-full
                        bg-amber-500/10
                        border
                        border-amber-800/30
                        px-3
                        py-2
                        text-amber-300
                        "
                      >
                        {item}
                      </Span>

                    ))}

                  </View>

                </View>

                {/* Impact */}

                <View className="mt-8">

                  <Text className="text-xs uppercase tracking-widest text-amber-500 mb-3">
                    Business Impact
                  </Text>

                  <View className="flex flex-wrap gap-3">

                    {job.responsibilities.map((item) => (

                      <Span
                        key={item}
                        className="
                        rounded-full
                        bg-green-500/10
                        border
                        border-green-900/40
                        text-green-300
                        px-3
                        py-2
                        "
                      >
                        ✓ {item}
                      </Span>

                    ))}

                  </View>

                </View>

              </Card>

            </View>

          ))}

        </View>

      </View>

    </Container>
  );
};

export default Experience;