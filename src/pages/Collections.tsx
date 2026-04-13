import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: "minimalist",
    title: "The Minimalist Series",
    description: "Clean lines, natural textures, and a focus on essential forms. Crafted from solid walnut and white oak.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "industrial",
    title: "Industrial Heritage",
    description: "A raw, honest aesthetic combining reclaimed timber with hand-forged steel and exposed hardware.",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "artisan",
    title: "Artisan Sculptural",
    description: "Where furniture meets fine art. Each piece features hand-carved details and unique organic silhouettes.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function Collections() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif">Collections</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Our work is organized into distinct aesthetic directions, each representing a unique philosophy of form and material.
          </p>
        </header>

        <div className="space-y-32">
          {collections.map((collection, idx) => (
            <motion.section 
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-serif">{collection.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {collection.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground rounded-full px-8 group"
                  render={<Link to={`/products?collection=${collection.id}`} />}
                >
                  View Collection <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className={`aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
