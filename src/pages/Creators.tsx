import { Mail, Linkedin, Github } from "lucide-react";

const creators = [
  {
    id: 1,
    name: "Creator Name 1",
    role: "Project Lead & Research",
    bio: "Passionate about automotive technology and innovation, leading our team's research into modern car parts and their impact on vehicle performance. Dedicated to bringing technical knowledge to life through digital media.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=creator1&backgroundColor=00bfff",
  },
  {
    id: 2,
    name: "Creator Name 2",
    role: "Design & Development",
    bio: "Specialist in web design and user experience, crafting the visual identity of FritsParts. Combines creativity with technical expertise to create engaging and informative digital experiences.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=creator2&backgroundColor=00bfff",
  },
  {
    id: 3,
    name: "Creator Name 3",
    role: "Content & Analysis",
    bio: "Expert in automotive systems and technical writing, responsible for researching and presenting complex automotive concepts in an accessible way. Ensures accuracy and depth in all project content.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=creator3&backgroundColor=00bfff",
  },
];

const Creators = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Creators Behind <span className="text-primary">FritsParts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team that brought this profielwerkstuk to life
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
                  className="w-48 h-48 group-hover:scale-110 transition-transform duration-500"
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
                    href="#"
                    className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                    aria-label="Github"
                  >
                    <Github size={18} />
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
            FritsParts was born from a shared passion for automotive technology and innovation.
            As a team, we've combined our unique skills and perspectives to create a comprehensive
            exploration of the automotive parts industry.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Through countless hours of research, design, and collaboration, we've transformed
            our MAVO4 profielwerkstuk into a professional showcase that bridges the gap between
            technical expertise and accessible education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
