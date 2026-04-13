import { motion } from "motion/react";
import { Droplets, Trees, Zap } from "lucide-react";

const materialSections = [
  {
    title: "Timbers",
    icon: <Trees className="w-10 h-10" />,
    description: "We source only the finest sustainable hardwoods, selected for their structural integrity and visual depth.",
    items: [
      { name: "American Black Walnut", desc: "Rich, dark tones with elegant grain patterns.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400" },
      { name: "White Oak", desc: "Strong, versatile, and beautifully textured.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
      { name: "Mahogany", desc: "Deep reddish-brown with a lustrous finish.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Finishes",
    icon: <Droplets className="w-10 h-10" />,
    description: "Our hand-applied finishes protect the wood while enhancing its natural tactile quality.",
    items: [
      { name: "Natural Oil", desc: "A matte, breathable finish that feels like raw wood.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
      { name: "Satin Lacquer", desc: "Subtle sheen with enhanced durability.", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=400" },
      { name: "Ebonized", desc: "Deep black finish that retains the wood grain.", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Lighting Elements",
    icon: <Zap className="w-10 h-10" />,
    description: "We integrate high-quality electrical components with artisanal materials.",
    items: [
      { name: "Solid Brass", desc: "Hand-polished or aged for a timeless look.", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400" },
      { name: "Hand-Blown Glass", desc: "Organic shapes that diffuse light beautifully.", image: "https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&q=80&w=400" },
      { name: "Textile Cables", desc: "Braided fabric cords in curated colors.", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0bc0bc?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];

export default function Materials() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 space-y-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">Materials & Finishes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            The soul of our work lies in the materials we choose. We believe in honesty, quality, and the inherent beauty of natural substances.
          </p>
        </header>

        <div className="space-y-40">
          {materialSections.map((section, idx) => (
            <section key={section.title} className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                  {section.icon}
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-4xl font-serif">{section.title}</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {section.items.map((item, itemIdx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                    className="space-y-6 group"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif">{item.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
