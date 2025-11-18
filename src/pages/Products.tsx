import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import brakeDisc from "@/assets/brake-disc.jpg";
import airFilter from "@/assets/air-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";
import oilPump from "@/assets/oil-pump.jpg";
import ledHeadlight from "@/assets/led-headlight.jpg";

const products = [
  {
    id: 1,
    name: "Performance Brake Discs",
    description: "High-performance ventilated brake discs designed for optimal heat dissipation and superior stopping power. Essential for safe vehicle operation under demanding conditions.",
    price: "€149.99",
    image: brakeDisc,
  },
  {
    id: 2,
    name: "Premium Air Filter",
    description: "Advanced filtration technology that protects your engine from harmful particles while maintaining optimal airflow for better performance and fuel efficiency.",
    price: "€29.99",
    image: airFilter,
  },
  {
    id: 3,
    name: "Platinum Spark Plugs",
    description: "Long-lasting platinum-tipped spark plugs ensuring reliable ignition, improved fuel economy, and reduced emissions for modern engines.",
    price: "€39.99",
    image: sparkPlugs,
  },
  {
    id: 4,
    name: "High-Flow Oil Pump",
    description: "Engineered for consistent oil pressure and flow, this pump ensures proper lubrication throughout your engine, extending its lifespan and performance.",
    price: "€189.99",
    image: oilPump,
  },
  {
    id: 5,
    name: "LED Headlight Set",
    description: "Ultra-bright LED technology providing superior visibility and safety. Energy-efficient design with a modern aesthetic that enhances your vehicle's appearance.",
    price: "€299.99",
    image: ledHeadlight,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium automotive parts engineered for performance, reliability, and longevity
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
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="glass-strong rounded-2xl p-8 mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Quality You Can Trust</h2>
          <p className="text-foreground/80 leading-relaxed">
            All our featured products represent the high standards of modern automotive engineering.
            Each component has been carefully selected to demonstrate the critical role quality parts
            play in vehicle performance, safety, and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
