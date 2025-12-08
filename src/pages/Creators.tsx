import { Mail, Linkedin, Github } from "lucide-react";
import Nadir from "@/assets/Nadir.jpg";
import Talha from "@/assets/Talha.jpg";
import Danny from "@/assets/Danny.jpg";

const creators = [
  {
    id: 1,
    name: "Nadir Toujaa",
    role: "Projectleider & WebDesign",
    bio: "Placeholder",
    avatar: Nadir,
  },
  {
    id: 2,
    name: "Danny Tran",
    role: "Onderzoek & Presentatie",
    bio: "Ik ben Danny Tran, Ik ben 16 jaar oud ik zit op mavo 4 en doe voetbal en gamen in mijn vrije tijd. Voor de presentatie heb ik de info opgezocht en de foto's en parts voor de website zodat nadir ze kon bewerken. Mijn specialiteiten zijn onderzoeken en presenteren.",
    avatar: Danny,
  },
  {
    id: 3,
    name: "Talha Demirci",
    role: "Onderzoek & Presentatie & Planning",
    bio: "Placeholder",
    avatar: Talha,
  },
];

const Creators = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            De Makers Achter <span className="text-primary">FritsParts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontmoet het toegewijde team dat dit profielwerkstuk tot leven heeft gebracht
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {creators.map((creator, index) => (
            <div
              key={creator.id}
              className="glass-strong rounded-2xl overflow-hidden glow-hover group"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-52 h-52 object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Creator Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {creator.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-4">
                  {creator.role}
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {creator.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <a
                    href="mailto:20725+PWS@leerling.fritsphilips.eu"
                    className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statement */}
        <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Team Philosophy</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            FritsParts is geboren uit een gedeelde passie voor autotechnologie en innovatie.
            Als team hebben we onze unieke vaardigheden en perspectieven gecombineerd om een uitgebreide
            verkenning van de auto-onderdelenindustrie te creëren.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Door talloze uren van onderzoek, design en samenwerking, hebben we
            ons MAVO4 profielwerkstuk getransformeerd in een professionele showcase die de kloof overbrugt tussen
            technische expertise en toegankelijke educatie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
