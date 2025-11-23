import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Users, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/fritsparts-logo.png";

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
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center animate-glow-pulse drop-shadow-[0_0_30px_rgba(0,112,210,0.6)]">
              <Target className="text-primary" size={64} strokeWidth={2} />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Auto-onderdelen & Kennis voor het Moderne Tijdperk
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Verkenning van automotive excellentie door innovatie en expertise. Een MAVO4 Profielwerkstuk reis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="glass-strong glow-hover text-lg px-8">
                Verken Producten
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/project">
              <Button size="lg" variant="outline" className="glass-strong glow-hover text-lg px-8">
                Ons Project
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
            Welkom bij <span className="text-primary">FritsParts</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            FritsParts is meer dan alleen een verzameling auto-onderdelen – het is een uitgebreide verkenning
            van de auto-industrie, gemaakt als onderdeel van ons MAVO4 Profielwerkstuk. We hebben technische
            kennis gecombineerd met modern webdesign om de essentiële onderdelen te tonen die voertuigen soepel laten rijden.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Onze missie is om te onderwijzen, inspireren en het belang van kwaliteitsonderdelen aan te tonen bij het
            behouden van voertuigprestaties en veiligheid. Door dit project hebben we waardevolle inzichten verkregen in zowel
            autotechniek als digitale presentatie.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Verken Onze <span className="text-primary">Secties</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Products Card */}
          <Link to="/products" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Producten</h3>
              <p className="text-muted-foreground">
                Ontdek onze zorgvuldig geselecteerde essentiële auto-onderdelen
              </p>
            </div>
          </Link>

          {/* Creators Card */}
          <Link to="/creators" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Makers</h3>
              <p className="text-muted-foreground">
                Ontmoet het team achter dit innovatieve project
              </p>
            </div>
          </Link>

          {/* Project Card */}
          <Link to="/project" className="group">
            <div className="glass-strong rounded-2xl p-8 glow-hover text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ons Project</h3>
              <p className="text-muted-foreground">
                Leer over ons onderzoeks- en ontwikkelingsproces
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
