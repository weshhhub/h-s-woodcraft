import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";

const spaces = [
  {
    id: "residential",
    title: "Residential Spaces",
    icon: <Home className="w-8 h-8" />,
    description: "From intimate dining rooms to expansive living areas, we create pieces that bring warmth and character to the home.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    categories: ["Living Room", "Dining", "Bedroom", "Home Office"]
  },
  {
    id: "commercial",
    title: "Commercial & Hospitality",
    icon: <Building2 className="w-8 h-8" />,
    description: "Durable, high-impact designs for restaurants, hotels, and creative workspaces that demand both style and performance.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    categories: ["Restaurants", "Hotels", "Retail", "Offices"]
  },
  {
    id: "outdoor",
    title: "Outdoor & Garden",
    icon: <Trees className="w-8 h-8" />,
    description: "Weather-resistant luxury. From architectural gazebos to artisanal garden seating, we extend your living space into nature.",
    image: "https://images.unsplash.com/photo-1590059393150-137889158913?auto=format&fit=crop&q=80&w=1200",
    categories: ["Gazebos", "Garden Seating", "Poolside", "Pergolas"]
  }
];

export default function Spaces() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif">Spaces</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            We design for the way you live and work. Our pieces are tailored to the specific demands of each environment.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {spaces.map((space, idx) => (
            <motion.div 
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative flex flex-col"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative">
                <img 
                  src={space.image} 
                  alt={space.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute bottom-10 left-10 right-10 text-white space-y-4">
                  <div className="w-16 h-16 bg-accent/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    {space.icon}
                  </div>
                  <h2 className="text-3xl font-serif">{space.title}</h2>
                </div>
              </div>
              
              <div className="px-4 space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {space.categories.map(cat => (
                    <span key={cat} className="text-xs uppercase tracking-widest border border-border px-4 py-2 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full px-8 group border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  render={<Link to={`/products?space=${space.id}`} />}
                >
                  View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
