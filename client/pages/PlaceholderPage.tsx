import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OptiRank Pro</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link>
              <Link to="/case-studies" className="text-foreground/80 hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="w-10 h-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{description}</p>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              This page is currently under development. We're working hard to bring you amazing content and features.
              In the meantime, feel free to explore our homepage or get in touch with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Have questions? Feel free to reach out at{" "}
            <a href="mailto:hello@optirankpro.com" className="text-primary hover:underline">
              hello@optirankpro.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+15551234567" className="text-primary hover:underline">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OptiRank Pro</span>
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
