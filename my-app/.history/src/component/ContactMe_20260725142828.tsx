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
    <Container className=" mx-auto  px-6">

      <Card
        className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        bg-stone-900
        bg-gradient-to-br
        from-stone-950
        via-stone-900
        to-black
        p-12
        "
      >
        {/* Background Glow */}


        <View className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <View>

            <Span className="uppercase tracking-[0.35em] text-xs text-amber-500 font-mono">
              Contact
            </Span>

            <H2 className="mt-4 text-5xl font-serif text-amber-100">
              Let's Build Something Exceptional
            </H2>

            <Text className="mt-6 text-stone-400 leading-8 max-w-xl">
              I'm always interested in discussing enterprise software,
              SaaS platforms, technical leadership, AI-powered applications,
              and large-scale engineering challenges.

              If you're looking for a Senior Software Engineer or Technical
              Lead to build scalable, production-ready systems, let's connect.
            </Text>

            <View className="flex flex-wrap gap-4 mt-10">

              <Button
                className="
                bg-amber-500
                text-black
                px-8
                py-3
                hover:scale-105
                transition
                "
              >
                Hire Me
              </Button>

              <Button
                variant="outline"
                className="
                border-amber-700
                text-amber-400
                px-8
                py-3
                "
              >
                Download Resume
              </Button>

            </View>

          </View>

          {/* Right */}

          <View className="grid xl:grid-cols-2 gap-8" >

            {CONTACT_INFO.map((item) => (

              <Card
                key={item.title}
                className="
                rounded-2xl
                bg-stone-800
                p-5
                transition
                hover:bg-stone-900
                "
              >


                <View>

                  <Text className="text-stone-500 text-xs uppercase tracking-widest">
                    {item.title}
                  </Text>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-amber-100 text-lg hover:text-amber-400"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <Text className="text-amber-100 text-lg">
                      {item.value}
                    </Text>
                  )}

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