import { Github, Mail } from "lucide-react";
import logo from "@/assets/fritsparts-logo.png";

const Footer = () => {
  return (
    <footer className="glass-strong border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
            <img src={logo} alt="FritsParts Logo" className="h-12" />
            <p className="text-muted-foreground text-sm">
              MAVO4 Profielwerkstuk © 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vexirale/fritsparts-hub"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors glow-hover"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:20725+PWS@leerling.fritsphilips.eu"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors glow-hover"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
