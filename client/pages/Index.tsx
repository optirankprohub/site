import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  TrendingUp, 
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Award,
  Phone,
  Mail,
  MapPin,
  Search,
  Target,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  MousePointer,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Quote,
  Clock,
  DollarSign,
  Layers,
  Cpu,
  Database
} from "lucide-react";

// Animated background grid
const BackgroundGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgb(60, 131, 246) 1px, transparent 1px),
          linear-gradient(90deg, rgb(60, 131, 246) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
    
    {/* Floating geometric shapes */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 60 - 30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2,
        }}
      >
        <div 
          className={`w-2 h-2 ${i % 3 === 0 ? 'bg-blue-500/20 rounded-full' : i % 3 === 1 ? 'bg-blue-400/15 rounded-full' : 'bg-blue-600/10 rounded-sm rotate-45'}`}
        />
      </motion.div>
    ))}
    
    {/* Gradient orbs */}
    <motion.div
      className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5,
      }}
    />
  </div>
);

// Counter animation
const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / 80;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative overflow-hidden">
      <BackgroundGrid />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-900/70 border-b border-slate-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                OptiRank Pro
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Portfolio', path: '/case-studies' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className="relative text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.name === 'Home' && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                        layoutId="activeNav"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Portfolio', path: '/case-studies' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mt-4">
              Get Started
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5"
          style={{ y: heroY, opacity: heroOpacity }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm text-slate-300 font-medium">Trusted by 500+ Companies</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
          </motion.div>

          {/* Main Headlines */}
          <div className="space-y-6 mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-white mb-4">Scale Your Business</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Beyond Limits
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your digital presence with data-driven marketing strategies. 
              We've generated <span className="text-blue-400 font-semibold">$50M+</span> in revenue 
              for our clients through innovative solutions.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 text-lg font-medium group"
              >
                Start Growing Today
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl backdrop-blur-xl text-lg font-medium group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: CheckCircle, text: "Free Strategy Session" },
              { icon: Shield, text: "ROI Guarantee" },
              { icon: Clock, text: "24/7 Support" }
            ].map((item, index) => (
              <motion.div 
                key={item.text}
                className="flex items-center justify-center space-x-2 text-slate-400 group"
                whileHover={{ scale: 1.05, color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <item.icon className="w-4 h-4 text-blue-400" />
                </motion.div>
                <span className="text-sm font-medium group-hover:text-slate-300 transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { value: 50, suffix: "M+", label: "Revenue Generated", color: "from-blue-400 to-blue-500" },
              { value: 350, suffix: "%", label: "ROI Increase", color: "from-blue-500 to-blue-600" },
              { value: 2.5, suffix: "K+", label: "Happy Clients", color: "from-blue-400 to-blue-600" },
              { value: 98, suffix: "%", label: "Success Rate", color: "from-blue-500 to-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <motion.div 
                    className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Services That <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Drive Results</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your growth and maximize ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO Optimization",
                description: "Dominate search rankings with advanced SEO strategies that drive organic traffic and qualified leads.",
                features: ["Technical SEO", "Content Strategy", "Local SEO"],
                gradient: "from-blue-500/20 to-blue-600/10"
              },
              {
                icon: MousePointer,
                title: "PPC Advertising",
                description: "Maximize ROI with precision-targeted campaigns across Google, Facebook, and LinkedIn platforms.",
                features: ["Google Ads", "Social Ads", "Conversion Tracking"],
                gradient: "from-blue-400/20 to-blue-500/10"
              },
              {
                icon: Share2,
                title: "Social Media",
                description: "Build brand awareness and engage audiences through strategic social media campaigns.",
                features: ["Content Creation", "Community Management", "Influencer Marketing"],
                gradient: "from-blue-600/20 to-blue-400/10"
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description: "Data-driven decisions with comprehensive analytics and performance tracking.",
                features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis"],
                gradient: "from-blue-500/20 to-blue-400/10"
              },
              {
                icon: Globe,
                title: "Web Development",
                description: "High-converting websites optimized for performance, user experience, and conversions.",
                features: ["Responsive Design", "Speed Optimization", "CRO"],
                gradient: "from-blue-400/20 to-blue-600/10"
              },
              {
                icon: Target,
                title: "Strategy Consulting",
                description: "Comprehensive growth strategies tailored to your business goals and market opportunities.",
                features: ["Market Research", "Competitor Analysis", "Growth Planning"],
                gradient: "from-blue-600/20 to-blue-500/10"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`h-full bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden`}>
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-slate-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium group/btn"
                      >
                        Learn More
                        <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-300">Real results from real businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OptiRank Pro transformed our digital presence completely. We saw a 400% increase in qualified leads within 3 months.",
                author: "Sarah Chen",
                role: "CEO, TechStart Inc",
                rating: 5,
                avatar: "SC"
              },
              {
                quote: "The ROI from their PPC campaigns exceeded our expectations by 250%. Professional, data-driven, and results-focused.",
                author: "Michael Rodriguez",
                role: "Marketing Director, GrowthCorp",
                rating: 5,
                avatar: "MR"
              },
              {
                quote: "From strategy to execution, they delivered beyond expectations. Our organic traffic increased by 500% in 6 months.",
                author: "Emily Watson",
                role: "Founder, E-commerce Plus",
                rating: 5,
                avatar: "EW"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-400/30 mb-4" />
                  
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Plans That <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Scale With You</span>
            </h2>
            <p className="text-xl text-slate-300">Choose the perfect plan for your growth stage</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$497",
                period: "/month",
                description: "Perfect for growing businesses",
                features: [
                  "SEO Optimization (50 keywords)",
                  "Google Ads Management",
                  "Social Media (2 platforms)",
                  "Monthly Reporting",
                  "Email Support"
                ],
                popular: false,
                gradient: "from-slate-800/50 to-slate-700/30"
              },
              {
                name: "Professional",
                price: "$997",
                period: "/month",
                description: "For ambitious companies",
                features: [
                  "SEO Optimization (150 keywords)",
                  "Multi-Platform PPC",
                  "Social Media (4 platforms)",
                  "Content Marketing",
                  "Weekly Strategy Calls",
                  "Priority Support"
                ],
                popular: true,
                gradient: "from-blue-500/20 to-blue-600/10"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: [
                  "Unlimited Keywords",
                  "Enterprise PPC Management",
                  "Full Marketing Automation",
                  "Dedicated Account Manager",
                  "Custom Reporting",
                  "24/7 Support"
                ],
                popular: false,
                gradient: "from-slate-800/50 to-slate-700/30"
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative group ${plan.popular ? 'scale-105' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.02 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border ${plan.popular ? 'border-blue-500/50' : 'border-slate-700/50'} rounded-2xl p-8 h-full transition-all duration-300 ${plan.popular ? 'hover:border-blue-400/60' : 'hover:border-blue-500/30'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-lg text-slate-400 font-normal">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25' 
                          : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/50'
                      }`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join 500+ successful companies that trust OptiRank Pro for their digital growth. 
              Let's discuss your goals and create a winning strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 text-lg font-medium"
                >
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl backdrop-blur-xl text-lg font-medium"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (555) 123-4567
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/30 backdrop-blur-xl border-t border-slate-700/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  OptiRank Pro
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Accelerating digital marketing success for businesses worldwide with data-driven strategies.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                {["SEO Optimization", "PPC Advertising", "Social Media", "Web Development", "Analytics", "Strategy"].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                {["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  hello@optirankpro.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  (555) 123-4567
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-1" />
                  <span>123 Marketing Street<br />Digital City, DC 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>&copy; 2024 OptiRank Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
