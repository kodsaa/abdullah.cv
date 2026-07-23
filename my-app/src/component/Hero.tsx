import {
  Button,
  Container,
  H1,
  H3,
  Span,
  Text,
  View,
} from "strivui";

interface HeroProps {
  setIsTelegraphOpen: (value: boolean) => void;
}

const Hero = ({ setIsTelegraphOpen }: HeroProps) => {
  return (
    <Container style={{background:"#000000B3"}}  className="absolute  top-20 left-28 mt-28 w-screen px-6 py-24 mt-10 bg-stone-900">
      <View className="max-w-5xl">

        {/* Badge */}
        <Span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-amber-700/40
            bg-amber-500/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-amber-400
          "
        >
        </Span>
<Span className="inline-flex items-center rounded-full border border-amber-700/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
  Senior Software Engineer • Technical Lead • Full Stack Architect
</Span>

<H1 className="mt-8 text-5xl md:text-7xl font-serif font-bold leading-[1.05] text-stone-100">
  Engineering Scalable Software
  <br />
  For Modern Enterprises
</H1>

<Text className="mt-8 max-w-4xl text-lg md:text-xl leading-9 text-stone-300">
  Senior Software Engineer with 5 years of experience architecting, building,
  and scaling enterprise software, SaaS platforms, ERP systems, AI-powered
  applications, and high-performance digital products. Passionate about
  transforming complex business challenges into secure, scalable, and
  maintainable software through modern architecture, technical leadership,
  and engineering excellence.
</Text>
        {/* CTA */}
        <View className="mt-12 flex flex-wrap gap-5">
          <Button
            onClick={() => setIsTelegraphOpen(true)}
            className="
              rounded-xl
              bg-amber-500
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-400
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
              border-amber-700
              px-8
              py-4
              text-amber-300
              transition-all
              duration-300
              hover:border-amber-500
              hover:bg-amber-500/10
            "
          >
            Explore Projects
          </Button>
        </View>

  
      </View>
    </Container>
  );
};

export default Hero;