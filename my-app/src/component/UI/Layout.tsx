import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { Button, Main, View } from 'strivui'
import Header from '../Header'
import CFooter from '../Footer'
import Loader from '../Loader'
import { useEffect, useRef, useState  } from 'react'
import { createMatrixSystem, Firefly, Particle, Ripple, Lightning, MatrixDrop } from '../../utils/effect'
import Sidebar from '../Sidebar'
import { RippleIcon,ThunderIcon,FireBallIcon,ParticleIcon, MetrixIcon } from '../../icon/icon'
import { useTranslation } from "react-i18next";


interface ActiveEffects {
  ripple: boolean;
  thunder: boolean;
  fireflies: boolean;
  particles: boolean;
  matrix: boolean;
}

const Layout = () => {
  const [saloonLights, setSaloonLights] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [season, setSeason] = useState("summer");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [theme, setTheme] = useState("system");
  const [music, setMusic] = useState(true);
  const [effects, setEffects] = useState(true);
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

const handleLanguageChange = (value: string) => {
  setTimeOfDay(value);
  i18n.changeLanguage(value);
};
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active effect toggle flags
  const [activeEffects, setActiveEffects] = useState<ActiveEffects>({
    ripple: true,
    thunder: false,
    fireflies: false,
    particles: false,
    matrix: false,
  });

  const icons = {
    ripple:<RippleIcon className="h-5 w-5" />,
    thunder:<ThunderIcon className="h-5 w-5" />,
    fireflies:<FireBallIcon className="h-5 w-5" />,
    particles:<ParticleIcon className="h-5 w-5" />,
    matrix:<MetrixIcon className="h-5 w-5" />
  }

  const toggleEffect = (name: keyof ActiveEffects) => {
    setActiveEffects((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    let ripples: Ripple[] = [];
    let lightnings: Lightning[] = [];
    let fireflies: Firefly[] = [];
    let particles: Particle[] = [];
    let matrixDrops: MatrixDrop[] = [];

    // Throttling for ripple ripples
    let lastRippleTime = 0;
    const RIPPLE_INTERVAL = 35; // MS delay between ripples
    const MAX_RIPPLES = 30;     // Max active ripples limit

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize system arrays on viewport resize
      fireflies = Array.from({ length: 45 }, () => new Firefly(canvas.width, canvas.height));
      particles = Array.from({ length: 60 }, () => new Particle(canvas.width, canvas.height));
      matrixDrops = createMatrixSystem(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse Tracking for Ripples
    const handleMouseMove = (e:MouseEvent) => {
      const now = Date.now();
      if (
        activeEffects.ripple &&
        now - lastRippleTime > RIPPLE_INTERVAL &&
        ripples.length < MAX_RIPPLES
      ) {
        ripples.unshift(new Ripple(e.clientX, e.clientY));
        lastRippleTime = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Main Canvas Render Loop
    const animate = () => {
      if (!canvas || !ctx) return;

      // Clear canvas cleanly without breaking transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Matrix Rain Effect
      if (activeEffects.matrix) {
        for (const drop of matrixDrops) {
          drop.update();
          drop.draw(ctx);
        }
      }

      // 2. Fireflies Effect
      if (activeEffects.fireflies) {
        for (const f of fireflies) {
          f.update(canvas.width, canvas.height);
          f.draw(ctx);
        }
      }

      // 3. Constellation / Connected Particles Effect
      if (activeEffects.particles) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.strokeStyle = "rgba(180, 200, 255, 0.15)";

        for (let i = 0; i < particles.length; i++) {
          particles[i].update(canvas.width, canvas.height);
          
          // Use the particle's own draw method if available, or fall back to canvas drawing
          if (typeof particles[i].draw === "function") {
            particles[i].draw(ctx);
          } else {
            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
            ctx.fill();
          }

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // 4. ripple Ripple Effect
      if (activeEffects.ripple) {
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.update();

          if (r.opacity <= 0) {
            ripples.splice(i, 1);
          } else {
            r.draw(ctx);
          }
        }
      }

      // 5. Thunder Lightning Effect
      if (activeEffects.thunder) {
        if (Math.random() < 0.015) {
          lightnings.push(new Lightning(canvas.width, canvas.height));
        }
        for (let i = lightnings.length - 1; i >= 0; i--) {
          const l = lightnings[i];
          l.draw(ctx);
          if (l.opacity <= 0) lightnings.splice(i, 1);
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeEffects]);

  useEffect(() => {
    const hideLoader = () => {
      // Small delay for smoother transition
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);
useEffect(() => {
    // Show loader when route changes
    setIsNavigating(true);

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 2000); // Adjust duration for visual feedback

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading || isNavigating) {
    return <Loader />;
  }


  
  const ExtraEffect =()=>{
    return  <View className='grid grid-cols-2 gap-4'>
    {(Object.keys(activeEffects) as Array<keyof ActiveEffects>).map((effect) => (
          <Button
            key={effect}
            onClick={() => toggleEffect(effect)}
            className={`${activeEffects[effect] ? "theme-effect-button" : "theme-effect-button-select"}   font-normal text-xs gap-1`}
          >
           {icons[effect]}   {effect}
          </Button>
        ))}
        </View>
        
  } 
  const isRTL = ['ar', 'ur'].includes(i18n.language);

  return (
    <Main
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen overflow-x-hidden p-0 m-0 ${
        saloonLights
          ? "mainContainer_background"
          : "bg-amber-900 text-amber-50"
      } ${i18n.language}`}
    >
 

      {/* Background Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
         background:"transparent",
         pointerEvents: "none", // <-- Add this line back!
        }}
      />
      <Header setSidebarOpen={()=>{setSidebarOpen(true)}} />
           <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        season={season}
        setSeason={setSeason}
        timeOfDay={timeOfDay}
       setTimeOfDay={handleLanguageChange} 
        saloonLights={saloonLights}
        setSaloonLights={setSaloonLights}
        theme={theme}
        setTheme={setTheme}
        music={music}
        setMusic={setMusic}
        effects={effects}
        setEffects={setEffects}
      >
        <ExtraEffect/>
      </Sidebar>
      <Outlet />
      <CFooter />
    </Main>
  )
}

export default Layout