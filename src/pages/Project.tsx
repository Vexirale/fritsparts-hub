import { Target, Search, Lightbulb, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: 1,
    icon: Target,
    title: "Wat is FritsParts?",
    content: "FritsParts is een uitgebreid digitaal platform gemaakt als onderdeel van ons MAVO4 profielwerkstuk. Het toont essentiële auto-onderdelen terwijl moderne webdesign principes worden gedemonstreerd. Ons project overbrugt de kloof tussen technische automotive kennis en toegankelijke digitale educatie, waardoor complexe concepten voor iedereen begrijpelijk worden.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Waarom We Dit Project Kozen",
    content: "We selecteerden auto-onderdelen als onze focus vanwege hun kritieke rol in voertuigveiligheid en prestaties. Dit onderwerp stelde ons in staat om technische principes, marktanalyse en technische communicatie te verkennen. De combinatie van praktische automotive kennis met geavanceerde webontwikkeling maakte dit een ideaal profielwerkstuk dat zowel technische als creatieve vaardigheden toont.",
  },
  {
    id: 3,
    icon: Search,
    title: "Ons Onderzoeksproces",
    content: "Ons onderzoek omvatte het bestuderen van automotive engineering fundamenten, het analyseren van huidige markttrends en het raadplegen van industriële bronnen. We onderzochten hoe verschillende auto-onderdelen functioneren, hun impact op voertuigprestaties, en de nieuwste technologische innovaties. Dit grondige onderzoek vormde de basis van onze educatieve content en productselectie.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Wat We Geleerd Hebben",
    content: "Door dit project hebben we waardevolle inzichten verkregen in autotechnologie, webontwikkeling en projectmanagement. We leerden hoe we grondig onderzoek moeten uitvoeren, complexe informatie helder moeten presenteren en boeiende digitale ervaringen moeten creëren. Het belangrijkste is dat we ontdekten hoe we effectief als team kunnen werken, door onze individuele sterktes te combineren om een gemeenschappelijk doel te bereiken.",
  },
];

const Project = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ons <span className="text-primary">Project Uitleg</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Het verhaal achter FritsParts – van concept tot voltooiing
          </p>
        </div>

        {/* Timeline Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className={`glass-strong rounded-2xl p-8 md:p-12 transition-all duration-700 ${
                visibleSections.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-border">
                    <section.icon className="text-primary" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {section.title}
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>

              {/* Step Number */}
              <div className="mt-6 pt-6 border-t border-border/50 text-right">
                <span className="text-sm font-semibold text-muted-foreground">
                  Step {section.id} of {sections.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="glass-strong rounded-2xl p-8 md:p-12 mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Als we in de toekomst kijken..</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            FritsParts represents more than just a school project – it's a testament to what
            can be achieved through dedication, teamwork, and a passion for learning. This
            profielwerkstuk heeft ons waardevolle vaardigheden opgeleverd in onderzoek, design en
            technische communicatie.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Terwijl we deze reis afsluiten, nemen we de geleerde lessen en het
            vertrouwen mee om toekomstige uitdagingen aan te gaan. FritsParts zal een showcase blijven van
            onze capaciteiten en onze toewijding aan excellentie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
