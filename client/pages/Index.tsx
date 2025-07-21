import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Youtube
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">OptiRank Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link>
              <Link to="/case-studies" className="text-foreground/80 hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Companies Worldwide</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Ready to Grow Your
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Brand Like Never Before? 🚀</span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with OptiRank Pro to level up with world-class digital strategies.
              We've generated over $50M+ in revenue for our clients with data-driven campaigns that actually work. 💯
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto">
                Get My Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-foreground/20 text-foreground hover:bg-foreground/5 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free 30-min Strategy Session</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-card/50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <p className="text-center text-foreground/60 mb-8">Trusted by leading brands worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">TechCorp</span>
            </div>
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">GrowthCo</span>
            </div>
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">InnovateLab</span>
            </div>
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">ScaleUp</span>
            </div>
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">NextGen</span>
            </div>
            <div className="bg-foreground/10 rounded-lg h-12 flex items-center justify-center">
              <span className="font-semibold text-foreground/80">FutureTech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-foreground/80">
              Our data-driven approach delivers measurable outcomes
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">$50M+</div>
              <div className="text-foreground/70 text-lg">Revenue Generated</div>
              <div className="text-sm text-foreground/50 mt-1">For our clients in 2023</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">350%</div>
              <div className="text-foreground/70 text-lg">Average ROI Increase</div>
              <div className="text-sm text-foreground/50 mt-1">Within first 6 months</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">2.5M+</div>
              <div className="text-foreground/70 text-lg">Qualified Leads</div>
              <div className="text-sm text-foreground/50 mt-1">Generated last year</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">98%</div>
              <div className="text-foreground/70 text-lg">Client Retention</div>
              <div className="text-sm text-foreground/50 mt-1">Long-term partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Proven Digital Marketing Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing solutions 
              that drive growth and maximize your return on investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Search Engine Optimization</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed mb-6">
                Dominate search results with our advanced SEO strategies. We've helped clients achieve 300% increase in organic traffic within 6 months.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Technical SEO Optimization
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Content Strategy & Creation
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Local SEO & Google My Business
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            {/* Service 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MousePointer className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Pay-Per-Click Advertising</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed mb-6">
                Maximize your advertising ROI with precision-targeted PPC campaigns across Google, Facebook, and LinkedIn platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Google Ads Management
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Facebook & Instagram Ads
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  LinkedIn B2B Campaigns
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            {/* Service 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Social Media Marketing</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed mb-6">
                Build brand awareness and engage with your audience through strategic social media campaigns that convert followers into customers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Content Strategy & Creation
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Community Management
                </li>
                <li className="flex items-center text-card-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary mr-3" />
                  Influencer Partnerships
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group">
              <BarChart3 className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Analytics & Reporting</h3>
              <p className="text-card-foreground/70">
                Comprehensive data analysis and reporting to track performance and optimize campaigns.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group">
              <Globe className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Website Optimization</h3>
              <p className="text-card-foreground/70">
                Improve user experience and conversion rates with data-driven website optimization.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group">
              <Mail className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Email Marketing</h3>
              <p className="text-card-foreground/70">
                Nurture leads and retain customers with personalized email marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose OptiRank Pro?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Rapid Growth Acceleration</h3>
              <p className="text-foreground/70">
                Our proven frameworks help businesses achieve 3x faster growth than industry averages.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Precision Targeting</h3>
              <p className="text-foreground/70">
                Advanced audience segmentation and targeting to reach your ideal customers with laser precision.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
              <p className="text-foreground/70">
                Over 500 successful campaigns with an average ROI increase of 350% for our clients.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data-Driven Decisions</h3>
              <p className="text-foreground/70">
                Every strategy backed by comprehensive analytics and real-time performance data.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Team</h3>
              <p className="text-foreground/70">
                Certified digital marketing professionals with 10+ years of experience across industries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Support</h3>
              <p className="text-foreground/70">
                Dedicated account managers and 24/7 support to ensure your campaigns run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-foreground/80">
              Real testimonials from businesses that transformed their growth with OptiRank Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-card-foreground mb-6 text-lg">
                "OptiRank Pro transformed our digital presence completely. We saw a 400% increase in qualified leads within 3 months. Their team is simply exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">CEO, TechInnovate Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-card-foreground mb-6 text-lg">
                "The ROI from their PPC campaigns exceeded our expectations by 250%. Professional, data-driven, and results-focused team."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  JR
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">James Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Marketing Director, GrowthCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-card-foreground mb-6 text-lg">
                "From strategy to execution, they delivered beyond our expectations. Our organic traffic increased by 500% in 6 months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  EW
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Emily Watson</div>
                  <div className="text-sm text-muted-foreground">Founder, E-commerce Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              🚀 Affordable Plans That Actually Work
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              No cap! 💯 Choose your vibe and start growing. All plans come with our results guarantee or your money back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Starter ✨</h3>
                <p className="text-card-foreground/70 mb-4">Perfect for growing your side hustle</p>
                <div className="text-4xl font-bold text-primary mb-2">$497</div>
                <div className="text-card-foreground/60">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  SEO Optimization (Up to 50 keywords)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Google Ads Management ($2K ad spend)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Social Media Management (2 platforms)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Monthly Reporting & Analysis
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Email Support
                </li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-card border-2 border-primary rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Pro 🔥</h3>
                <p className="text-card-foreground/70 mb-4">For serious entrepreneurs</p>
                <div className="text-4xl font-bold text-primary mb-2">$997</div>
                <div className="text-card-foreground/60">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  SEO Optimization (Up to 150 keywords)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Multi-Platform PPC ($5K ad spend)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Social Media Management (4 platforms)
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Content Marketing & Creation
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Weekly Reporting & Strategy Calls
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Priority Phone & Email Support
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Enterprise 💎</h3>
                <p className="text-card-foreground/70 mb-4">For big moves & major scaling</p>
                <div className="text-4xl font-bold text-primary mb-2">Custom</div>
                <div className="text-card-foreground/60">pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Unlimited SEO Keywords
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Enterprise PPC Management
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Full Marketing Automation
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Dedicated Account Manager
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Custom Reporting & Analytics
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  24/7 Priority Support
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/60 mb-4">All plans include a 30-day money-back guarantee</p>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Compare All Features <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/80">
              Everything you need to know about our services and process
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">How quickly can I see results?</h3>
              <p className="text-card-foreground/80">
                Most clients see improvements in their key metrics within 30-60 days. PPC campaigns can show results within days, 
                while SEO typically takes 3-6 months for significant organic growth. We provide detailed progress reports every step of the way.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Do you offer contracts or can I cancel anytime?</h3>
              <p className="text-card-foreground/80">
                We offer both flexible month-to-month plans and discounted annual contracts. You can cancel anytime with 30 days notice. 
                We're confident in our results and don't believe in locking clients into long-term commitments.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">What makes OptiRank Pro different from other agencies?</h3>
              <p className="text-card-foreground/80">
                Our data-driven approach, transparent reporting, and focus on ROI set us apart. We assign dedicated account managers, 
                provide real-time dashboard access, and guarantee measurable results. Plus, our team has generated over $50M in client revenue.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Do you work with businesses in my industry?</h3>
              <p className="text-card-foreground/80">
                We work with businesses across all industries including technology, healthcare, finance, e-commerce, B2B services, and more. 
                Our strategies are customized based on your specific industry, target audience, and business goals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">What's included in the free strategy session?</h3>
              <p className="text-card-foreground/80">
                Our free 30-minute strategy session includes a comprehensive audit of your current marketing efforts, 
                competitor analysis, identification of growth opportunities, and a customized roadmap for your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to 10X Your Business? Let's Go! 🔥
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust OptiRank Pro for their digital marketing.
              Book your free strategy session today and let's turn your business into the next success story! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto">
                Book My Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-foreground/20 text-foreground hover:bg-foreground/5">
                <Phone className="mr-2 w-5 h-5" />
                Call (555) 123-4567
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>ROI-Focused Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-card-foreground">OptiRank Pro</span>
              </div>
              <p className="text-card-foreground/70 max-w-md">
                Accelerating digital marketing success for businesses worldwide. We're committed to delivering 
                measurable results that drive real business growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Services</h4>
              <ul className="space-y-3 text-card-foreground/70">
                <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">PPC Advertising</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Content Marketing</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Email Marketing</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Analytics & Reporting</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Company</h4>
              <ul className="space-y-3 text-card-foreground/70">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Contact</h4>
              <div className="space-y-3 text-card-foreground/70">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@optirankpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span>123 Marketing Street<br />Digital City, DC 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-card-foreground/70">
            <p>&copy; 2024 OptiRank Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
