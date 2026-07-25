import {
  Button,
  Container,
  H1,
  Span,
  Text,
  View,
} from "strivui";

import imageCTown from "../assets/CTown.png";

interface HeroProps {
  setIsTelegraphOpen: (value: boolean) => void;
}

const Hero = ({ setIsTelegraphOpen }: HeroProps) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(233, 176, 115, 0.75), rgba(8,8,8,.85)), url(${imageCTown})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        lg:px-16
      "
    >
      <View
        className="
          w-full
          max-w-7xl
          py-16
          md:py-24
          mt-10
        "
      >
        {/* Badge */}

        <Span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-amber-500/30
            bg-amber-500/10
            backdrop-blur-md
            px-4
            py-2
            text-[10px]
            sm:text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-amber-300
          "
        >
          Senior Software Engineer • Technical Lead • Full Stack Architect
        </Span>

        {/* Heading */}

        <H1
          className="
            mt-8
            max-w-5xl
            font-black
            leading-none
            text-stone-50
            text-5xl
            sm:text-6xl
            md:text-7xl
            xl:text-8xl
          "
        >
          Engineering
          <br />

          <Span className="text-amber-400">
            Scalable Software
          </Span>

          <br />

          For Modern Enterprises
        </H1>

        {/* Description */}

        <Text
          className="
            mt-8
            max-w-3xl
            text-base
            sm:text-lg
            lg:text-xl
            leading-8
            text-stone-300
          "
        >
          Senior Software Engineer with 5+ years of experience designing,
          developing and scaling enterprise platforms, SaaS products,
          ERP systems, AI-powered applications and cloud-native solutions.
          I specialize in building secure, maintainable and high-performance
          software that solves real business problems.
        </Text>

        {/* Buttons */}

        <View
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          <Button
            onClick={() => setIsTelegraphOpen(true)}
            className="
              rounded-xl
              bg-amber-500
              text-black
              font-semibold
              px-8
              py-4
              hover:bg-amber-400
              transition-all
              duration-300
              hover:-translate-y-1
              shadow-xl
              shadow-amber-500/30
            "
          >
            Let's Connect
          </Button>

          <Button
            href="#projects"
            variant="outline"
            className="
              rounded-xl
              border
              border-stone-500
              bg-white/5
              backdrop-blur-md
              text-stone-100
              px-8
              py-4
              hover:bg-white/10
              hover:border-amber-400
              transition-all
              duration-300
            "
          >
            Explore Projects
          </Button>
        </View>

        {/* Stats */}

        <View
          className="
            mt-20
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {[
            ["5+", "Years Experience"],
            ["40+", "Projects Delivered"],
            ["20+", "Technologies"],
            ["∞", "Passion for Code"],
          ].map(([number, label]) => (
            <View
              key={label}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
              "
            >
              <Text className="text-4xl font-black text-amber-400">
                {number}
              </Text>

              <Text className="mt-2 text-stone-300">
                {label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
};

export default Hero;