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
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Quote,
  Rocket,
  Eye,
  MousePointer,
  TrendingDown,
  Search,
  Share2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Moon,
  Sun,
  Sparkles
} from "lucide-react";

// Floating animation variants
const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.6)",
    "0 0 20px rgba(59, 130, 246, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Particle component
const Particle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
    initial={{ y: 0, x: 0, opacity: 0 }}
    animate={{
      y: [-20, -100, -200],
      x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
      opacity: [0, 0.6, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut"
    }}
  />
);

// Animated counter component
const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Index() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  // Container variants for stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Particle delay={i * 0.2} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="bg-background/80 border-b border-border/20 sticky top-0 z-50 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                animate={pulseAnimation}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OptiRank Pro
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className={`${item === 'Home' ? 'text-foreground font-medium' : 'text-foreground/80'} hover:text-primary transition-colors duration-300 relative group`}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
          style={{ y, opacity }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"
          animate={floatingAnimation}
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            ...floatingAnimation
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: floatingAnimation.transition
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full"
          animate={floatingAnimation}
          style={{ animationDelay: '1s' }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              animate={glowAnimation}
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Award className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Companies Worldwide ✨</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to Grow Your
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Brand Like Never Before?
                <motion.span
                  className="inline-block ml-2"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🚀
                </motion.span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Partner with OptiRank Pro to level up with world-class digital strategies.
              We've generated over <motion.span 
                className="font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                $50M+
              </motion.span> in revenue for our clients with data-driven campaigns that actually work. 💯
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all group">
                  <motion.span className="flex items-center">
                    Get My Free Strategy Call 📞
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary/30 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 group">
                  <motion.div
                    className="mr-2"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  Watch Success Stories 🎥
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-foreground/60"
              variants={containerVariants}
            >
              {[
                "Free 30-min Strategy Session",
                "No Long-term Contracts", 
                "ROI Guarantee"
              ].map((text, index) => (
                <motion.div 
                  key={text}
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <motion.section 
        className="py-16 bg-card/50 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.p 
            className="text-center text-foreground/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by leading brands worldwide
          </motion.p>
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
                className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="font-semibold text-foreground/80">{brand}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              Results That Hit Different 📈
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/80"
              variants={itemVariants}
            >
              Our data-driven approach delivers measurable outcomes that actually matter
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
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
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div 
                  className="text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </motion.div>
                <div className="text-foreground/70 text-lg">{stat.label}</div>
                <div className="text-sm text-foreground/50 mt-1">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20 bg-card/30 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent"
              >
                Our Proven Digital Marketing Services
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              From strategy to execution, we provide end-to-end digital marketing solutions 
              that drive growth and maximize your return on investment.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
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
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl relative overflow-hidden"
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10"
                  animate={pulseAnimation}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-card-foreground mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-card-foreground/80 text-lg leading-relaxed mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-6 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center text-card-foreground/70"
                      variants={itemVariants}
                      whileHover={{ x: 5, color: "var(--primary)" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, delay: featureIndex * 0.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
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
                  <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform relative z-10" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 relative z-10">{service.title}</h3>
                <p className="text-card-foreground/70 relative z-10">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              🚀 Affordable Plans That Actually Work
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              No cap! 💯 Choose your vibe and start growing. All plans come with our results guarantee or your money back.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                name: "Enterprise ����",
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
                className={`bg-card border rounded-2xl p-8 transition-all relative overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg' 
                    : 'border-border hover:border-primary/50'
                }`}
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
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
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
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="text-center mb-8 relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-card-foreground mb-2"
                    animate={plan.popular ? {
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.3)"
                      ]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {plan.name}
                  </motion.h3>
                  <p className="text-card-foreground/70 mb-4">{plan.description}</p>
                  <motion.div 
                    className="text-4xl font-bold text-primary mb-2"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {plan.price}
                  </motion.div>
                  {plan.price !== "Custom" && (
                    <div className="text-card-foreground/60">/month</div>
                  )}
                </div>

                <motion.ul 
                  className="space-y-3 mb-8 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center text-card-foreground/80"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: featureIndex * 0.1 
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
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
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white' 
                        : 'border border-border hover:bg-primary/10'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-foreground/60 mb-4"
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
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Compare All Features 
                <motion.div
                  className="ml-2"
                  animate={{ rotate: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-primary/40" />
          </motion.div>
        ))}

        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Ready to 10X Your Business? Let's Go! 
              <motion.span
                className="inline-block ml-2"
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
                🔥
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join 500+ successful businesses that trust OptiRank Pro for their digital marketing. 
              Book your free strategy session today and let's turn your business into the next success story! ✨
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all">
                  Book My Free Strategy Session
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-foreground/20 text-foreground hover:bg-foreground/5">
                  <motion.div
                    className="mr-2"
                    animate={{ 
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                  Call (555) 123-4567
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-foreground/60"
              variants={containerVariants}
            >
              {[
                "No Obligation",
                "30-Day Guarantee", 
                "ROI-Focused Results"
              ].map((text, index) => (
                <motion.div 
                  key={text}
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.3 
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="md:col-span-2 space-y-4"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={pulseAnimation}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  OptiRank Pro
                </span>
              </motion.div>
              <p className="text-card-foreground/70 max-w-md">
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
                    className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "var(--primary)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            {[
              {
                title: "Services",
                links: ["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"]
              },
              {
                title: "Company", 
                links: ["About Us", "Case Studies", "Contact", "Careers", "Blog", "Resources"]
              }
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
              >
                <h4 className="font-semibold mb-4 text-card-foreground">{section.title}</h4>
                <motion.ul 
                  className="space-y-3 text-card-foreground/70"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      variants={itemVariants}
                    >
                      <motion.a
                        href="#"
                        className="hover:text-primary transition-colors"
                        whileHover={{ x: 5, color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-card-foreground">Contact</h4>
              <motion.div 
                className="space-y-3 text-card-foreground/70"
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
                    className="flex items-start space-x-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      <contact.icon className="w-4 h-4 text-primary mt-1" />
                    </motion.div>
                    <span style={{ whiteSpace: 'pre-line' }}>{contact.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-card-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &copy; 2024 OptiRank Pro. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mt-4 md:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-primary transition-colors"
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
