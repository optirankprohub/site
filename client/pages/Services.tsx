import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  ArrowRight,
  Search,
  Target,
  BarChart3,
  Share2,
  Globe,
  Mail,
  Smartphone,
  PenTool,
  Users,
  Zap,
  Shield,
  CheckCircle,
  ArrowUpRight,
  Play,
  Star,
  Award,
  Clock,
  DollarSign,
  MousePointer,
  Layers,
  Database,
  Cpu,
  TrendingDown,
  Eye,
  FileText,
  Camera,
  Video,
  Mic,
  Edit3,
  Settings,
  Headphones,
  ThumbsUp,
} from "lucide-react";

// Background grid component
const BackgroundGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgb(60, 131, 246) 1px, transparent 1px),
          linear-gradient(90deg, rgb(60, 131, 246) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Floating particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 40 - 20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5,
        }}
      >
        <div className="w-1 h-1 bg-blue-400/40 rounded-full" />
      </motion.div>
    ))}

    {/* Gradient orbs */}
    <motion.div
      className="absolute top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-32 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -25, 0],
        y: [0, 15, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />
  </div>
);

// Service card component
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div
        className={`h-full bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden`}
      >
        {/* Background glow effect */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <service.icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-300 mb-6 leading-relaxed text-lg">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature: string, idx: number) => (
              <motion.li
                key={feature}
                className="flex items-center text-slate-400"
                whileHover={{ x: 5, color: "rgb(96, 165, 250)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: idx * 0.2 },
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                </motion.div>
                <span className="text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-blue-400 mb-1">
              {service.price}
              <span className="text-lg text-slate-400 font-normal">/month</span>
            </div>
            <div className="text-slate-500 text-sm">{service.period}</div>
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl shadow-lg shadow-blue-500/25 text-lg font-medium group/btn">
              Get Started Today
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const mainServices = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Dominate search rankings with our comprehensive SEO strategies that drive organic traffic, improve visibility, and generate qualified leads for your business.",
      features: [
        "Technical SEO Audit & Optimization",
        "Keyword Research & Strategy",
        "On-Page & Off-Page SEO",
        "Local SEO & Google My Business",
        "Content Strategy & Creation",
        "Link Building & Authority Development",
      ],
      price: "Starting at $497",
      period: "Custom packages available",
      gradient: "from-slate-800/50 to-slate-700/30",
    },
    {
      icon: MousePointer,
      title: "Pay-Per-Click Advertising",
      description:
        "Maximize your advertising ROI with precision-targeted PPC campaigns across Google, Facebook, LinkedIn, and other high-converting platforms.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Advertising",
        "LinkedIn B2B Campaigns",
        "Conversion Tracking & Analytics",
        "Landing Page Optimization",
        "Bid Management & Budget Control",
      ],
      price: "Starting at $997",
      period: "Plus ad spend management",
      gradient: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage your audience through strategic social media campaigns that convert followers into loyal customers.",
      features: [
        "Social Media Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnership Management",
        "Social Media Advertising",
        "Performance Analytics & Reporting",
      ],
      price: "Starting at $697",
      period: "Multi-platform packages",
      gradient: "from-slate-800/50 to-slate-700/30",
    },
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      title: "Analytics & Data Intelligence",
      description:
        "Comprehensive data analysis and performance tracking to make informed decisions.",
      features: [
        "Custom Dashboards",
        "ROI Analysis",
        "Performance Tracking",
        "Competitive Intelligence",
      ],
    },
    {
      icon: Globe,
      title: "Website Development & CRO",
      description:
        "High-converting websites optimized for performance and user experience.",
      features: [
        "Responsive Web Design",
        "Conversion Rate Optimization",
        "Speed Optimization",
        "A/B Testing",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description:
        "Nurture leads and retain customers with personalized email campaigns.",
      features: [
        "Email Campaign Design",
        "Marketing Automation",
        "Segmentation",
        "Performance Analytics",
      ],
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description:
        "Engaging content that builds authority and drives organic growth.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Production",
        "Graphic Design",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Reach customers on mobile devices with targeted campaigns.",
      features: [
        "App Store Optimization",
        "Mobile Advertising",
        "SMS Marketing",
        "Push Notifications",
      ],
    },
    {
      icon: Users,
      title: "Brand Strategy & Consulting",
      description:
        "Comprehensive brand development and strategic consulting services.",
      features: [
        "Brand Identity",
        "Market Research",
        "Competitive Analysis",
        "Growth Strategy",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your business, competition, and market opportunities to create a tailored strategy.",
      icon: Eye,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Our experts develop a comprehensive digital marketing strategy aligned with your goals.",
      icon: Target,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute your campaigns with precision, using best practices and proven methodologies.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description:
        "Continuous monitoring, testing, and optimization to maximize your ROI and growth.",
      icon: TrendingUp,
    },
  ];

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
            <Link to="/" className="flex items-center space-x-3 group">
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
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/case-studies" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium group ${
                    item.name === "Services" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {item.name === "Services" && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      layoutId="activeNav"
                    />
                  )}
                </Link>
              ))}

              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 py-2 mb-8"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300 font-medium">
                Complete Digital Marketing Solutions
              </span>
            </motion.div>

            {/* Headlines */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white mb-4">
                Our Digital Marketing
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              From SEO to PPC, social media to analytics - we provide
              comprehensive digital marketing solutions that drive growth,
              increase visibility, and maximize your ROI.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { value: "15+", label: "Services Offered" },
                { value: "500+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "350%", label: "Average ROI" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 text-lg font-medium"
                >
                  Explore All Services
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
                  <Play className="mr-2 w-5 h-5" />
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed to accelerate
              your growth and maximize ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Specialized Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complementary services to complete your digital marketing
              ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="h-full bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25"
                    whileHover={{ rotate: 360, scale: 1.1 }}
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

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-slate-400 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div className="mt-6" whileHover={{ x: 5 }}>
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Proven{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A systematic approach that ensures optimal results for every
              project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center mx-auto border border-blue-500/30"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgb(59, 130, 246)",
                    }}
                  >
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Get Started
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss your digital marketing goals and create a customized
              strategy that drives real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 text-lg font-medium"
                >
                  Start Your Project Today
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
                  Schedule Free Consultation
                </Button>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4 text-blue-400" />
                <span>ROI Guarantee</span>
              </div>
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
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  OptiRank Pro
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                Professional digital marketing services that drive growth and
                maximize ROI for businesses worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        to={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                {[
                  "SEO",
                  "PPC Advertising",
                  "Social Media",
                  "Web Development",
                  "Analytics",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li>hello@optirankpro.com</li>
                <li>(555) 123-4567</li>
                <li>
                  123 Marketing Street
                  <br />
                  Digital City, DC 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
            <p>&copy; 2024 OptiRank Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
