import { Target, Search, Lightbulb, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: 1,
    icon: Target,
    title: "What is FritsParts?",
    content: "FritsParts is a comprehensive digital platform created as part of our MAVO4 profielwerkstuk. It showcases essential automotive components while demonstrating modern web design principles. Our project bridges the gap between technical automotive knowledge and accessible digital education, making complex concepts understandable for everyone.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Why We Chose This Project",
    content: "We selected automotive parts as our focus because of their critical role in vehicle safety and performance. This topic allowed us to explore engineering principles, market analysis, and technical communication. The combination of practical automotive knowledge with cutting-edge web development made this an ideal profielwerkstuk that showcases both technical and creative skills.",
  },
  {
    id: 3,
    icon: Search,
    title: "Our Research Process",
    content: "Our research involved studying automotive engineering fundamentals, analyzing current market trends, and consulting industry resources. We examined how different car parts function, their impact on vehicle performance, and the latest technological innovations. This thorough investigation formed the foundation of our educational content and product selection.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "What We Learned",
    content: "Through this project, we gained invaluable insights into automotive technology, web development, and project management. We learned how to conduct thorough research, present complex information clearly, and create engaging digital experiences. Most importantly, we discovered how to work effectively as a team, combining our individual strengths to achieve a common goal.",
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
            Our <span className="text-primary">Project Explanation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The story behind FritsParts – from concept to completion
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
          <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            FritsParts represents more than just a school project – it's a testament to what
            can be achieved through dedication, teamwork, and a passion for learning. This
            profielwerkstuk has equipped us with valuable skills in research, design, and
            technical communication.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            As we conclude this journey, we carry forward the lessons learned and the
            confidence to tackle future challenges. FritsParts will remain a showcase of
            our capabilities and our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
