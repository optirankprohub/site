import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useSpring, useMousePosition } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Quote,
  Rocket,
  Eye,
  MousePointer,
  Search,
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Moon,
  Sun,
  Sparkles,
  ArrowUpRight,
  Layers,
  Cpu,
  Briefcase
} from "lucide-react";

// Custom hook for magnetic hover effect
const useMagneticHover = (strength = 0.2) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return { ref, position };
};

// Floating orb component
const FloatingOrb = ({ size = 200, duration = 20, delay = 0, opacity = 0.1 }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"
    style={{
      width: size,
      height: size,
      opacity: opacity,
    }}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -100, 50, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

// Advanced particle system
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Text reveal animation component
const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

// Animated counter with smooth spring
const AnimatedCounter = ({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, target, spring]);

  useEffect(() => {
    return spring.onChange((value) => {
      setDisplayValue(Math.floor(value));
    });
  }, [spring]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function Index() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const magneticLogo = useMagneticHover(0.15);
  const magneticCTA = useMagneticHover(0.1);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  // Sophisticated animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Advanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Moving gradient orbs */}
        <FloatingOrb size={300} duration={25} delay={0} opacity={0.03} />
        <FloatingOrb size={200} duration={30} delay={5} opacity={0.02} />
        <FloatingOrb size={400} duration={35} delay={10} opacity={0.025} />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navigation with glassmorphism */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              ref={magneticLogo.ref}
              className="flex items-center space-x-3"
              style={{
                x: magneticLogo.position.x,
                y: magneticLogo.position.y,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-primary via-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <TrendingUp className="w-7 h-7 text-white" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-0"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                OptiRank Pro
              </motion.span>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/case-studies' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className={`relative text-lg font-medium transition-all duration-300 group ${
                      item.name === 'Home' 
                        ? 'text-foreground' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.name === 'Home' && (
                      <motion.div
                        className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-accent rounded-full"
                        layoutId="activeNav"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div className="flex items-center space-x-4">
                <motion.button
                  onClick={toggleTheme}
                  className="p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 backdrop-blur-sm border border-border/20"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                  >
                    Get Started
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          style={{ y: heroY, opacity: heroOpacity }}
        />
        
        <div className="container mx-auto text-center relative z-10 pt-20">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust badge */}
            <motion.div 
              className="inline-flex items-center space-x-3 bg-background/60 backdrop-blur-xl border border-primary/20 rounded-full px-6 py-3 mb-12 shadow-xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Award className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-foreground font-medium">Trusted by 500+ Companies Worldwide</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.div>
            </motion.div>
            
            {/* Main headline */}
            <div className="mb-8">
              <TextReveal delay={0.2}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                  Ready to Grow Your
                </h1>
              </TextReveal>
              <TextReveal delay={0.4}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent">
                    <motion.span
                      animate={{
                        backgroundPosition: ["0%", "100%", "0%"]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ backgroundSize: "300%" }}
                    >
                      Brand Like Never Before?
                    </motion.span>
                  </span>
                  <motion.span
                    className="inline-block ml-4"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🚀
                  </motion.span>
                </h1>
              </TextReveal>
            </div>
            
            {/* Subtitle */}
            <TextReveal delay={0.6}>
              <p className="text-2xl sm:text-3xl text-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                Partner with OptiRank Pro to level up with world-class digital strategies.
                We've generated over <motion.span 
                  className="font-bold text-primary"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 10px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  $50M+
                </motion.span> in revenue for our clients with data-driven campaigns that actually work.
              </p>
            </TextReveal>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              variants={itemVariants}
            >
              <motion.div
                ref={magneticCTA.ref}
                style={{
                  x: magneticCTA.position.x,
                  y: magneticCTA.position.y,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group"
                >
                  <span className="flex items-center">
                    Get My Free Strategy Call
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-xl px-10 py-6 rounded-2xl border-2 border-primary/30 bg-background/60 backdrop-blur-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <motion.div
                    className="mr-3"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Play className="w-6 h-6" />
                  </motion.div>
                  Watch Success Stories
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {[
                { icon: CheckCircle, text: "Free 30-min Strategy Session" },
                { icon: Shield, text: "No Long-term Contracts" },
                { icon: Target, text: "ROI Guarantee" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center justify-center space-x-3 text-foreground/70 group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    color: "var(--primary)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity, delay: index * 0.3 },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="font-medium group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <motion.section 
        className="py-24 bg-background/60 backdrop-blur-xl relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <TextReveal>
            <p className="text-center text-foreground/60 mb-12 text-lg">
              Trusted by leading brands worldwide
            </p>
          </TextReveal>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['TechCorp', 'GrowthCo', 'InnovateLab', 'ScaleUp', 'NextGen', 'FutureTech'].map((brand, index) => (
              <motion.div
                key={brand}
                className="bg-background/80 backdrop-blur-xl rounded-2xl h-16 flex items-center justify-center border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  },
                  hover: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors text-lg">
                  {brand}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-32 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextReveal>
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Results That Hit Different
                <motion.span
                  className="inline-block ml-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  📈
                </motion.span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-2xl text-foreground/80 max-w-3xl mx-auto">
                Our data-driven approach delivers measurable outcomes that actually matter
              </p>
            </TextReveal>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: 50, suffix: "M+", label: "Revenue Generated", sublabel: "For our clients in 2023" },
              { value: 350, suffix: "%", label: "Average ROI Increase", sublabel: "Within first 6 months" },
              { value: 2.5, suffix: "M+", label: "Qualified Leads", sublabel: "Generated last year" },
              { value: 98, suffix: "%", label: "Client Retention", sublabel: "Long-term partnerships" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  },
                  hover: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
              >
                <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-500 h-full">
                  <motion.div 
                    className="text-6xl lg:text-7xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-xl font-semibold text-foreground/90 mb-2">{stat.label}</div>
                  <div className="text-sm text-foreground/60">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Continued in next part... */}
      <motion.section 
        className="py-32 bg-background/80 backdrop-blur-xl relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextReveal>
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                <motion.span
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Our Proven Digital Solutions
                </motion.span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-2xl text-foreground/80 max-w-4xl mx-auto">
                From strategy to execution, we provide end-to-end digital marketing solutions 
                that drive growth and maximize your return on investment.
              </p>
            </TextReveal>
          </motion.div>
          
          {/* Main services grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Search,
                title: "Search Engine Optimization",
                description: "Dominate search results with our advanced SEO strategies. We've helped clients achieve 300% increase in organic traffic within 6 months.",
                features: ["Technical SEO Optimization", "Content Strategy & Creation", "Local SEO & Google My Business"],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: MousePointer,
                title: "Pay-Per-Click Advertising",
                description: "Maximize your advertising ROI with precision-targeted PPC campaigns across Google, Facebook, and LinkedIn platforms.",
                features: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn B2B Campaigns"],
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build brand awareness and engage with your audience through strategic social media campaigns that convert followers into customers.",
                features: ["Content Strategy & Creation", "Community Management", "Influencer Partnerships"],
                color: "from-pink-500 to-pink-600"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  rotateY: 5
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  },
                  hover: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                <div className="bg-background/80 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  />
                  
                  {/* Service icon */}
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-6 relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed mb-8 relative z-10">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-foreground/70"
                        whileHover={{ x: 5, color: "var(--primary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary mr-4" />
                        </motion.div>
                        <span className="text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 rounded-2xl py-6 text-lg"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional services */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive data analysis and reporting to track performance and optimize campaigns." },
              { icon: Globe, title: "Website Optimization", description: "Improve user experience and conversion rates with data-driven website optimization." },
              { icon: Mail, title: "Email Marketing", description: "Nurture leads and retain customers with personalized email marketing campaigns." }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 5
                }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  },
                  hover: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }
                }}
              >
                <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <service.icon className="w-14 h-14 text-primary mb-6 group-hover:text-accent transition-colors" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-lg relative z-10">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-32 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextReveal>
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Affordable Plans That Actually Work
                <motion.span
                  className="inline-block ml-4"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  🚀
                </motion.span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-2xl text-foreground/80 max-w-4xl mx-auto">
                No cap! 💯 Choose your vibe and start growing. All plans come with our results guarantee or your money back.
              </p>
            </TextReveal>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Starter",
                emoji: "✨",
                price: "$497",
                description: "Perfect for growing your side hustle",
                features: [
                  "SEO Optimization (Up to 50 keywords)",
                  "Google Ads Management ($2K ad spend)",
                  "Social Media Management (2 platforms)",
                  "Monthly Reporting & Analysis",
                  "Email Support"
                ],
                buttonText: "Get Started",
                popular: false,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                name: "Pro",
                emoji: "🔥",
                price: "$997",
                description: "For serious entrepreneurs",
                features: [
                  "SEO Optimization (Up to 150 keywords)",
                  "Multi-Platform PPC ($5K ad spend)",
                  "Social Media Management (4 platforms)",
                  "Content Marketing & Creation",
                  "Weekly Reporting & Strategy Calls",
                  "Priority Phone & Email Support"
                ],
                buttonText: "Get Started",
                popular: true,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                name: "Enterprise",
                emoji: "💎",
                price: "Custom",
                description: "For big moves & major scaling",
                features: [
                  "Unlimited SEO Keywords",
                  "Enterprise PPC Management",
                  "Full Marketing Automation",
                  "Dedicated Account Manager",
                  "Custom Reporting & Analytics",
                  "24/7 Priority Support"
                ],
                buttonText: "Contact Sales",
                popular: false,
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`group relative ${plan.popular ? 'scale-105' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }
                }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-xl">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <motion.div
                  className={`bg-background/80 backdrop-blur-xl border rounded-3xl p-10 transition-all duration-500 h-full relative overflow-hidden ${
                    plan.popular 
                      ? 'border-2 border-primary shadow-2xl' 
                      : 'border border-border/20 hover:border-primary/30'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -10,
                    boxShadow: plan.popular 
                      ? "0 40px 80px rgba(59, 130, 246, 0.3)" 
                      : "0 30px 60px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  />

                  <div className="text-center mb-10 relative z-10">
                    <motion.h3 
                      className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center"
                      animate={plan.popular ? {
                        textShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 40px rgba(59, 130, 246, 0.5)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {plan.name}
                      <motion.span 
                        className="ml-2"
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.2
                        }}
                      >
                        {plan.emoji}
                      </motion.span>
                    </motion.h3>
                    <p className="text-foreground/70 mb-6 text-lg">{plan.description}</p>
                    <motion.div 
                      className="text-5xl font-bold text-primary mb-2"
                      animate={{
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {plan.price}
                    </motion.div>
                    {plan.price !== "Custom" && (
                      <div className="text-foreground/60 text-lg">/month</div>
                    )}
                  </div>

                  <motion.ul 
                    className="space-y-4 mb-10 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-foreground/80 text-lg"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 360] 
                          }}
                          transition={{ 
                            scale: { duration: 2, repeat: Infinity, delay: featureIndex * 0.1 },
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                          }}
                        >
                          <CheckCircle className="w-6 h-6 text-primary mr-4" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    <Button 
                      className={`w-full py-6 text-lg rounded-2xl transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl' 
                          : 'border-2 border-border hover:bg-primary/10 hover:border-primary/50'
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                      <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-foreground/60 mb-6 text-lg"
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              All plans include a 30-day money-back guarantee
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 text-lg"
              >
                Compare All Features 
                <motion.div
                  className="ml-2"
                  animate={{ rotate: [0, 180, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-32 px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Enhanced animated sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-primary/30" />
          </motion.div>
        ))}

        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TextReveal>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8">
                Ready to 10X Your Business? Let's Go!
                <motion.span
                  className="inline-block ml-4"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  🔥
                </motion.span>
              </h2>
            </TextReveal>
            
            <TextReveal delay={0.2}>
              <p className="text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 500+ successful businesses that trust OptiRank Pro for their digital marketing. 
                Book your free strategy session today and let's turn your business into the next success story!
                <motion.span
                  className="inline-block ml-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ✨
                </motion.span>
              </p>
            </TextReveal>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 20px 40px rgba(59, 130, 246, 0.2)",
                    "0 25px 50px rgba(59, 130, 246, 0.4)",
                    "0 20px 40px rgba(59, 130, 246, 0.2)"
                  ]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  hover: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-2xl px-12 py-8 rounded-3xl shadow-2xl border-0 group"
                >
                  Book My Free Strategy Session
                  <motion.div
                    className="ml-4"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-2xl px-12 py-8 rounded-3xl border-2 border-primary/30 bg-background/60 backdrop-blur-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <motion.div
                    className="mr-4"
                    animate={{ 
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Phone className="w-6 h-6" />
                  </motion.div>
                  Call (555) 123-4567
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {[
                { icon: Shield, text: "No Obligation" },
                { icon: Award, text: "30-Day Guarantee" },
                { icon: Target, text: "ROI-Focused Results" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center justify-center space-x-3 text-foreground/70 group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    color: "var(--primary)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity, delay: index * 0.3 },
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="font-medium text-lg group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="bg-background/80 backdrop-blur-xl border-t border-border/20 py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company info */}
            <motion.div 
              className="md:col-span-2 space-y-6"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <TrendingUp className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  OptiRank Pro
                </span>
              </motion.div>
              <p className="text-foreground/70 text-lg max-w-md leading-relaxed">
                Accelerating digital marketing success for businesses worldwide. We're committed to delivering 
                measurable results that drive real business growth.
              </p>
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "var(--primary)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Services</h4>
              <motion.ul 
                className="space-y-4 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"].map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    variants={itemVariants}
                  >
                    <motion.a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 text-lg"
                      whileHover={{ x: 5, color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Company</h4>
              <motion.ul 
                className="space-y-4 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["About Us", "Case Studies", "Contact", "Careers", "Blog", "Resources"].map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    variants={itemVariants}
                  >
                    <motion.a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 text-lg"
                      whileHover={{ x: 5, color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Contact</h4>
              <motion.div 
                className="space-y-4 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Mail, text: "hello@optirankpro.com" },
                  { icon: Phone, text: "(555) 123-4567" },
                  { icon: MapPin, text: "123 Marketing Street\nDigital City, DC 12345" }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <contact.icon className="w-5 h-5 text-primary mt-1 group-hover:text-accent transition-colors" />
                    </motion.div>
                    <span style={{ whiteSpace: 'pre-line' }} className="text-lg">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Footer bottom */}
          <motion.div 
            className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &copy; 2024 OptiRank Pro. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-8 mt-4 md:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-primary transition-colors duration-300 text-lg"
                  variants={itemVariants}
                  whileHover={{ y: -2, color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}