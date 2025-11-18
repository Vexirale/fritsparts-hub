import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
            FritsParts
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Car Parts & Knowledge for the Modern Era
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Exploring automotive excellence through innovation and expertise. A MAVO4 Profielwerkstuk journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="glass-strong glow-hover text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/project">
              <Button size="lg" variant="outline" className="glass-strong glow-hover text-lg px-8">
                Our Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full glass-strong border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto glow-hover">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Welcome to <span className="text-primary">FritsParts</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            FritsParts is more than just a collection of automotive components – it's a comprehensive exploration
            of the automotive industry, created as part of our MAVO4 Profielwerkstuk. We've combined technical
            knowledge with modern web design to showcase the essential parts that keep vehicles running smoothly.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our mission is to educate, inspire, and demonstrate the importance of quality car parts in maintaining
            vehicle performance and safety. Through this project, we've gained invaluable insights into both
            automotive engineering and digital presentation.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our <span className="text-primary">Sections</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Products Card */}
          <Link to="/products" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Products</h3>
              <p className="text-muted-foreground">
                Discover our curated selection of essential car parts
              </p>
            </div>
          </Link>

          {/* Creators Card */}
          <Link to="/creators" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creators</h3>
              <p className="text-muted-foreground">
                Meet the team behind this innovative project
              </p>
            </div>
          </Link>

          {/* Project Card */}
          <Link to="/project" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Project</h3>
              <p className="text-muted-foreground">
                Learn about our research and development process
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
