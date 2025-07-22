import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
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
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Quote,
  Rocket,
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
  MousePointer
} from "lucide-react";

// Floating animation component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 2, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

// Particle background
const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
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

// Animated counter
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function Index() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
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
            
            <div className="hidden lg:flex items-center space-x-8">
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
              
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
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
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 rounded-2xl shadow-xl"
                >
                  Get Started
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
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
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
            </motion.div>
            
            {/* Main headline */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Ready to Grow Your
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent">
                  Brand Like Never Before?
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
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              className="text-2xl sm:text-3xl text-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
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
              </motion.span> in revenue for our clients with data-driven campaigns that actually work. 💯
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
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
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-xl px-10 py-6 rounded-2xl shadow-2xl border-0 group"
                >
                  Get My Free Strategy Call 📞
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
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
                  Watch Success Stories 🎥
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
            <motion.h2 
              className="text-5xl sm:text-6xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
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
            </motion.h2>
            <motion.p 
              className="text-2xl text-foreground/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our data-driven approach delivers measurable outcomes that actually matter
            </motion.p>
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
                  y: -10
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

      {/* Services Section */}
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
            <motion.h2 
              className="text-5xl sm:text-6xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
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
            </motion.h2>
            <motion.p 
              className="text-2xl text-foreground/80 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              From strategy to execution, we provide end-to-end digital marketing solutions 
              that drive growth and maximize your return on investment.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
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
                features: ["Technical SEO Optimization", "Content Strategy & Creation", "Local SEO & Google My Business"]
              },
              {
                icon: MousePointer,
                title: "Pay-Per-Click Advertising",
                description: "Maximize your advertising ROI with precision-targeted PPC campaigns across Google, Facebook, and LinkedIn platforms.",
                features: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn B2B Campaigns"]
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build brand awareness and engage with your audience through strategic social media campaigns that convert followers into customers.",
                features: ["Content Strategy & Creation", "Community Management", "Influencer Partnerships"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10
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
                  }
                }}
              >
                <div className="bg-background/80 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  />
                  
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
            <motion.h2 
              className="text-5xl sm:text-6xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              🚀 Affordable Plans That Actually Work
            </motion.h2>
            <motion.p 
              className="text-2xl text-foreground/80 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              No cap! 💯 Choose your vibe and start growing. All plans come with our results guarantee or your money back.
            </motion.p>
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
                name: "Starter ✨",
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
                popular: false
              },
              {
                name: "Pro 🔥",
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
                popular: true
              },
              {
                name: "Enterprise 💎",
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
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`group relative ${plan.popular ? 'scale-105' : ''}`}
                variants={cardVariants}
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
                >
                  <div className="text-center mb-10 relative z-10">
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
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

                  <ul className="space-y-4 mb-10 relative z-10">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-foreground/80 text-lg"
                        whileHover={{ x: 5 }}
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
                  </ul>

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
        </div>
      </motion.section>

      {/* Final CTA */}
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
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8"
              variants={itemVariants}
            >
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
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Join 500+ successful businesses that trust OptiRank Pro for their digital marketing. 
              Book your free strategy session today and let's turn your business into the next success story! ✨
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-2xl px-12 py-8 rounded-3xl shadow-2xl border-0"
                >
                  Book My Free Strategy Session
                  <motion.div
                    className="ml-4"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-2xl px-12 py-8 rounded-3xl border-2 border-primary/30 bg-background/60 backdrop-blur-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <Phone className="mr-4 w-6 h-6" />
                  Call (555) 123-4567
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-background/80 backdrop-blur-xl border-t border-border/20 py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
            <motion.div 
              className="md:col-span-2 space-y-6"
              variants={itemVariants}
            >
              <FloatingElement>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    OptiRank Pro
                  </span>
                </div>
              </FloatingElement>
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
                    className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Services</h4>
              <motion.ul 
                className="space-y-4 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"].map((link) => (
                  <motion.li key={link} variants={itemVariants}>
                    <motion.a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Company</h4>
              <motion.ul 
                className="space-y-4 text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["About Us", "Case Studies", "Contact", "Careers", "Blog", "Resources"].map((link) => (
                  <motion.li key={link} variants={itemVariants}>
                    <motion.a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
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
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <contact.icon className="w-5 h-5 text-primary mt-1" />
                    <span style={{ whiteSpace: 'pre-line' }} className="text-lg">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              &copy; 2024 OptiRank Pro. All rights reserved.
            </p>
            <motion.div 
              className="flex space-x-8 mt-4 md:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-primary transition-colors duration-300 text-lg"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
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
