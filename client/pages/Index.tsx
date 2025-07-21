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
  Zap
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border/20">
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
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Ready to Grow Your
              <br />
              <span className="text-foreground">Brand Like Never Before?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Partner with OptiRank Pro to scale through world-class digital strategies.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto">
              Get My Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">ROI-Focused Campaigns</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                Maximizing your return on investment is our priority. We create data-driven campaigns that deliver measurable results and drive sustainable growth for your business.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Audience Targeting</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                Reach customers across the world with our advanced targeting strategies. We help you expand your market reach and connect with the right audience at the right time.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Personalized Marketing Plans</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                Every business is unique, and so should be your marketing strategy. We create customized plans tailored to your specific goals, industry, and target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Precision Targeting</h3>
              <p className="text-foreground/70">
                Advanced audience segmentation and targeting to reach your ideal customers with laser precision.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Lightning Fast Results</h3>
              <p className="text-foreground/70">
                See improvements in your digital presence and lead generation within the first 30 days.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
              <p className="text-foreground/70">
                Over 500 successful campaigns with an average ROI increase of 250% for our clients.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data-Driven Approach</h3>
              <p className="text-foreground/70">
                Every decision backed by comprehensive analytics and real-time performance data.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Team</h3>
              <p className="text-foreground/70">
                Certified digital marketing professionals with years of experience in various industries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Global Reach</h3>
              <p className="text-foreground/70">
                Expand your business internationally with our global marketing strategies and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70 text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">250%</div>
              <div className="text-foreground/70 text-lg">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-foreground/70 text-lg">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-foreground/70 text-lg">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust OptiRank Pro for their digital marketing needs. 
              Let's discuss your goals and create a winning strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto">
                Start Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-foreground/20 text-foreground hover:bg-foreground/5">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-card-foreground">OptiRank Pro</span>
              </div>
              <p className="text-card-foreground/70">
                Accelerating digital marketing success for businesses worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Services</h4>
              <ul className="space-y-2 text-card-foreground/70">
                <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">PPC Advertising</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Social Media</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Analytics</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Company</h4>
              <ul className="space-y-2 text-card-foreground/70">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Contact</h4>
              <ul className="space-y-2 text-card-foreground/70">
                <li>hello@optirankpro.com</li>
                <li>(555) 123-4567</li>
                <li>123 Marketing St, Digital City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-card-foreground/70">
            <p>&copy; 2024 OptiRank Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
