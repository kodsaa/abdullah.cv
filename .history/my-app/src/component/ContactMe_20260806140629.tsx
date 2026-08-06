import {
  Button,
  Card,
  Container,
  H2,
  Span,
  Text,
  View,
} from "strivui";
import { useTranslation } from "react-i18next";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  GithubIcon,
  LinkedinIcon,
} from "../icon/icon";

const CONTACT_INFO = [
  {
    icon: <EmailIcon className="h-4 w-4" />,
    key: "email",
    value: "syedabdullahali380@gmail.com",
    href: "mailto:syedabdullahali380@gmail.com",
  },
  {
    icon: <PhoneIcon className="h-4 w-4" />,
    key: "phone",
    value: "+91 9005126629",
    href: "tel:+919005126629",
  },
  {
    icon: <LocationIcon className="h-4 w-4" />,
    key: "location",
    value: "Chennai, Tamil Nadu, India",
    href: undefined,
  },
  {
    icon: <GithubIcon className="h-4 w-4" />,
    key: "github",
    value: "github.com/syedabdullahali",
    href: "https://github.com/syedabdullahali",
  },
  {
    icon: <LinkedinIcon className="h-4 w-4" />,
    key: "linkedin",
    value: "linkedin.com/in/syedabdullahali",
    href: "https://linkedin.com/in/syedabdullahali",
  },
];

const ContactMe = () => {
  
  return (
    <Container id="contact" className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <Card className="cm-shell">
        <View className="cm-orb cm-orb--tl" />
        <View className="cm-orb cm-orb--br" />

        <View className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Column */}
          <View className="lg:col-span-5 space-y-6">
            <View className="inline-flex items-center gap-3">
              <Span className="cm-pulse-dot" />
              <Span className="uppercase tracking-[0.35em] text-xs text-amber-400 font-mono font-semibold">
                Contact
              </Span>
            </View>

            <H2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 tracking-tight leading-[1.15]">
              Let's Build Something{" "}
              <Span className="italic font-light text-amber-200 cm-underline-word">
                Exceptional
              </Span>
            </H2>

            <Text className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              I'm always interested in discussing enterprise software,
              SaaS platforms, technical leadership, AI-powered applications,
              and large-scale engineering challenges.
              <br />
              <br />
              If you're looking for a Senior Software Engineer or Technical
              Lead to build scalable, production-ready systems, let's connect.
            </Text>

            <View className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={() =>
                  (window.location.href = "mailto:syedabdullahali380@gmail.com")
                }
                className="cm-btn-primary"
              >
                Hire Me
                <span className="cm-btn-arrow">→</span>
              </Button>

              <Button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="cm-btn-ghost"
              >
                Download Resume
              </Button>
            </View>

            <View className="cm-status">
              <span className="cm-status-dot" />
              <Span className="text-stone-400 text-xs font-mono tracking-wide">
                Currently available for new opportunities
              </Span>
            </View>
          </View>

          {/* Right Column — Terminal Panel */}
          <View className="lg:col-span-7">
            <div className="term-window">
              <div className="term-titlebar">
                <span className="term-dot term-dot--red" />
                <span className="term-dot term-dot--yellow" />
                <span className="term-dot term-dot--green" />
                <span className="term-filename">contact.ts</span>
              </div>

              <div className="term-body">
                <div className="term-line">
                  <span className="term-lineno">1</span>
                  <span className="term-code">
                    <span className="term-kw">interface</span>{" "}
                    <span className="term-type">Contact</span> {"{"}
                  </span>
                </div>

                {CONTACT_INFO.map((item, i) => (
                  <div className="term-line" key={item.key}>
                    <span className="term-lineno">{i + 2}</span>
                    <span className="term-code term-code--indent">
                      <span className="term-prop">{item.key}</span>
                      <span className="term-punc">: </span>
                     {item.href ? (
  <a
    href={item.href}
    className="term-str term-str--link"
    target={item.href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
  >
    "{item.value}"
  </a>
) : (
  <span className="term-str">"{item.value}"</span>
)}
                      <span className="term-punc">,</span>
                      <span className="term-icon">{item.icon}</span>
                    </span>
                  </div>
                ))}

                <div className="term-line">
                  <span className="term-lineno">{CONTACT_INFO.length + 2}</span>
                  <span className="term-code">
                    {"}"}
                    <span className="term-cursor" />
                  </span>
                </div>
              </div>
            </div>
          </View>
        </View>
      </Card>
    </Container>
  );
};

export default ContactMe;