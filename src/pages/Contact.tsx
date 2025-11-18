import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Bericht Verzonden!",
      description: "Bedankt voor je bericht. We nemen snel contact met je op.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Neem <span className="text-primary">Contact Op</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vragen over ons project? We horen graag van je
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 glow-hover">
            <h2 className="text-2xl font-bold mb-6">Stuur Ons Een Bericht</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Jouw Naam
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jan Jansen"
                  required
                  className="glass bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mailadres
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jan@voorbeeld.nl"
                  required
                  className="glass bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Jouw Bericht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vertel ons over je vraag..."
                  rows={6}
                  required
                  className="glass bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" className="w-full glass-strong glow-hover" size="lg">
                <Send className="mr-2" size={18} />
                Verstuur Bericht
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="glass-strong rounded-2xl p-8 glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">E-mail Ons</h3>
                  <p className="text-muted-foreground">info@fritsparts.nl</p>
                  <p className="text-muted-foreground">support@fritsparts.nl</p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Bel Ons</h3>
                  <p className="text-muted-foreground">+31 (0) 123 456 789</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Ma-Vr, 9:00-17:00</p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Bezoek Ons</h3>
                  <p className="text-muted-foreground">MAVO School Campus</p>
                  <p className="text-muted-foreground">Amsterdam, Nederland</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Over Dit Project</h3>
              <p className="text-foreground/80 leading-relaxed">
                FritsParts is een MAVO4 profielwerkstuk gemaakt om auto-kennis
                en modern webdesign te tonen. We bespreken graag ons project, beantwoorden
                vragen, of maken contact met mede-autoliefhebbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
