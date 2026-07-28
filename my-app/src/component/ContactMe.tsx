import {
  Button,
  Card,
  Container,
  H2,
  Link,
  Span,
  Text,
  View,
} from "strivui";

const CONTACT_INFO = [
  {
    icon: "📧",
    title: "Email",
    value: "syedabdullahali380@gmail.com",
    href: "mailto:syedabdullahali380@gmail.com",
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+91 9005126629",
    href: "tel:+919005126629",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    icon: "💻",
    title: "GitHub",
    value: "github.com/syedabdullahali",
    href: "https://github.com/syedabdullahali",
  },
  {
    icon: "🌐",
    title: "LinkedIn",
    value: "linkedin.com/in/syedabdullahali",
    href: "https://linkedin.com/in/syedabdullahali",
  },
];

const ContactMe = () => {
  return (
    <Container id="contact" className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <Card
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          bg-stone-900
          to-black
          p-8
          sm:p-12
          lg:p-16
          shadow-2xl
        "
      >
        {/* Ambient Glow Effects */}
        <View className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <View className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" />
        
        {/* Subtle Decorative Grid Pattern */}
        <View 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
   
        />

        <View className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Hero Column */}
          <View className="lg:col-span-6 space-y-6">
            
            <View className="inline-flex items-center gap-3">
              <Span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <Span className="uppercase tracking-[0.35em] text-xs text-amber-400 font-mono font-semibold">
                Contact
              </Span>
            </View>

            <H2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 tracking-tight leading-[1.15]">
              Let's Build Something{" "}
              <Span className="italic font-light text-amber-200">
                Exceptional
              </Span>
            </H2>

            <Text className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              I'm always interested in discussing enterprise software,
              SaaS platforms, technical leadership, AI-powered applications,
              and large-scale engineering challenges.
              <br /><br />
              If you're looking for a Senior Software Engineer or Technical
              Lead to build scalable, production-ready systems, let's connect.
            </Text>

            <View className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={() => window.location.href = "mailto:syedabdullahali380@gmail.com"}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-amber-400
                  to-amber-500
                  text-stone-950
                  font-semibold
                  px-8
                  py-3.5
                  text-sm
                  shadow-lg
                  shadow-amber-500/20
                  hover:scale-[1.02]
                  hover:shadow-amber-500/30
                  active:scale-95
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                Hire Me
              </Button>

              <Button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="
                  rounded-xl
                  bg-stone-900/60
                  border
                  border-amber-500/30
                  text-amber-300
                  font-medium
                  px-8
                  py-3.5
                  text-sm
                  backdrop-blur-sm
                  hover:bg-amber-500/10
                  hover:border-amber-500/50
                  hover:text-amber-200
                  active:scale-95
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                Download Resume
              </Button>
            </View>

          </View>

          {/* Right Contact Cards Column */}
          <View className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

            {CONTACT_INFO.map((item) => (
              <Card
                key={item.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-stone-800/80
                  bg-stone-900/50
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ease-out
                  hover:border-amber-500/40
                  hover:bg-stone-900/90
                  hover:shadow-xl
                  hover:shadow-amber-500/5
                  hover:-translate-y-1
                  ${item.title === "Email" ? "sm:col-span-2" : ""}
                `}
              >
                {/* Micro Ambient Hover Glow */}
                <View className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-amber-500/0 blur-xl transition-all duration-300 group-hover:bg-amber-500/10" />

                <View className="flex items-start gap-4">
                  
                  {/* Icon Container */}
                  <View className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-500/20">
                    {item.icon}
                  </View>

                  <View className="space-y-1 overflow-hidden">
                    <Text className="text-stone-400 text-xs font-mono uppercase tracking-widest font-medium">
                      {item.title}
                    </Text>

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-1.5
                          text-stone-200
                          text-sm
                          sm:text-base
                          font-medium
                          transition-colors
                          duration-200
                          hover:text-amber-300
                          truncate
                          w-full
                        "
                      >
                        <span className="truncate">{item.value}</span>
                        <span className="text-amber-400 text-xs opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0 shrink-0">
                          ↗
                        </span>
                      </Link>
                    ) : (
                      <Text className="text-stone-200 text-sm sm:text-base font-medium truncate">
                        {item.value}
                      </Text>
                    )}
                  </View>

                </View>
              </Card>
            ))}

          </View>

        </View>
      </Card>
    </Container>
  );
};

export default ContactMe;