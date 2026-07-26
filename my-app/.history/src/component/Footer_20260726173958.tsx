import { Container, H2, Text, Span, View, Link } from "strivui";

const CFooter = () => {
  const year = new Date().getFullYear();

  // Section ids — these must match the `id` on each corresponding
  // <section> elsewhere on the page (e.g. <section id="experience">).
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Replace these with your real profile URLs.
  const social = [
    { label: "GitHub", href: "https://github.com/syedabdullahali", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-abdullah-ali380/", external: true },
    { label: "Email", href: "mailto:syedabdullahali380@gmail.com", external: false },
  ];

  return (
    <View className="relative bg-black/50 overflow-hidden border-t  backdrop-blur-xl">

      {/* Glow */}
      <View className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <Container>
        <View className="py-14">

          {/* Main Footer */}
          <View className="
            grid 
            grid-cols-1 
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
          ">


            {/* Brand */}
            <View className="space-y-5">

              <H2 className="
                text-2xl
                font-black
                tracking-widest
                text-amber-400
              ">
                SYED ABDULLAH ALI
              </H2>


              <Text className="
                max-w-md
                text-sm
                leading-7
                text-gray-400
              ">
                Senior Software Engineer specializing in enterprise
                platforms, scalable architecture, AI-powered systems,
                cloud infrastructure, and modern product engineering.
              </Text>


              <View className="
                inline-flex
                w-fit
                rounded-full
                border
                border-amber-400/20
                bg-amber-400/10
                px-4
                py-2
              ">
                <Span className="text-xs text-amber-300">
                  Full Stack Architect
                </Span>
              </View>

            </View>



            {/* Navigation */}
            <View className="space-y-5">

              <Span className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-white
              ">
                Navigation
              </Span>


              <View className="
                grid
                grid-cols-2
                gap-3
              ">

                {
                  navigation.map((item)=>(
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        justify-start
                        bg-transparent
                        text-gray-400
                        hover:text-amber-400
                        transition
                      "
                    >
                      {item.label}
                    </Link>
                  ))
                }

              </View>

            </View>




            {/* Connect */}
            <View className="space-y-5">

              <Span className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-white
              ">
                Connect
              </Span>


              <View className="
                flex
                flex-wrap
                gap-3
              ">

                {
                  social.map((item)=>(
                    <Link
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-3
                        text-gray-300
                        hover:border-amber-400/40
                        hover:text-amber-400
                        transition
                      "
                    >
                      {item.label}
                    </Link>
                  ))
                }

              </View>


              <Text className="
                text-sm
                leading-6
                text-gray-500
              ">
                Building enterprise software that scales with
                businesses worldwide.
              </Text>


            </View>


          </View>



          {/* Bottom */}
          <View className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">


            <Span className="
              text-center
              text-xs
              text-gray-500
              sm:text-left
            ">
              © {year} Syed Abdullah Ali. All rights reserved.
            </Span>


            <Span className="
              text-center
              text-xs
              text-gray-500
              sm:text-right
            ">
              React • TypeScript • StrivUI
            </Span>


          </View>


        </View>
      </Container>

    </View>
  );
};

export default CFooter;