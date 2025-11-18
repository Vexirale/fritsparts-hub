import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-strong border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FritsParts
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              MAVO4 Profielwerkstuk © 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors glow-hover"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors glow-hover"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
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
