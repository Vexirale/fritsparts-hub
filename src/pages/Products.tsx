import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import brakeDisc from "@/assets/brake-disc.jpg";
import airFilter from "@/assets/air-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";
import oilPump from "@/assets/oil-pump.jpg";
import placeholder from "@/assets/fritsparts-logo.jpg";
import ledHeadlight from "@/assets/led-headlight.jpg";

const products = [
  {
    id: 1,
    name: "Prestatie Remschijven",
    description: "Hoogwaardige geventileerde remschijven ontworpen voor optimale warmteafvoer en superieure remkracht. Essentieel voor veilige voertuigbediening onder veeleisende omstandigheden.",
    price: "€149.99",
    image: brakeDisc,
  },
  {
    id: 2,
    name: "Premium Luchtfilter",
    description: "Geavanceerde filtertechnologie die uw motor beschermt tegen schadelijke deeltjes terwijl optimale luchtstroom behouden blijft voor betere prestaties en brandstofefficiëntie.",
    price: "€29.99",
    image: airFilter,
  },
  {
    id: 3,
    name: "Platina Bougies",
    description: "Langdurige platina-tipped bougies die betrouwbare ontsteking, verbeterde brandstofeconomie en verminderde emissies voor moderne motoren garanderen.",
    price: "€39.99",
    image: sparkPlugs,
  },
  {
    id: 4,
    name: "High-Flow Oliepomp",
    description: "Ontworpen voor consistente oliedruk en -stroom, deze pomp zorgt voor goede smering in uw hele motor, waardoor de levensduur en prestaties worden verlengd.",
    price: "€189.99",
    image: oilPump,
  },
  {
    id: 5,
    name: "LED Koplamp Set",
    description: "Ultra-heldere LED-technologie die superieur zicht en veiligheid biedt. Energiezuinig ontwerp met een moderne uitstraling die het uiterlijk van uw voertuig verbetert.",
    price: "€299.99",
    image: ledHeadlight,
  },
  {
    id: 5,
    name: "Placeholder",
    description: "Lorep Ipsum",
    price: "€420.67",
    image: placeholder,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Onze <span className="text-primary">Producten</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium auto-onderdelen ontworpen voor prestaties, betrouwbaarheid en duurzaamheid
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="glass-strong rounded-2xl overflow-hidden glow-hover group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button className="glass glow-hover">
                    <ShoppingCart size={18} className="mr-2" />
                    Meer Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="glass-strong rounded-2xl p-8 mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Kwaliteit Waar Je Op Kunt Vertrouwen</h2>
          <p className="text-foreground/80 leading-relaxed">
            Al onze aanbevolen producten vertegenwoordigen de hoge normen van moderne autotechniek.
            Elk onderdeel is zorgvuldig geselecteerd om de kritieke rol te demonstreren die kwaliteitsonderdelen
            spelen in voertuigprestaties, veiligheid en duurzaamheid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
