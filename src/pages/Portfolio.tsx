import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "The Rustic Lounge",
    location: "Nairobi, Westlands",
    type: "Restaurant",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    desc: "Complete custom furniture and lighting for a high-end restaurant, featuring live-edge tables and industrial pendant clusters."
  },
  {
    title: "Modern Minimalist Home",
    location: "Karen, Nairobi",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
    desc: "Bespoke walnut TV unit and integrated wall shelving for a contemporary living room."
  },
  {
    title: "Creative Studio Office",
    location: "Kilimani, Nairobi",
    type: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    desc: "Custom executive desks and decorative lighting installations for a boutique design agency."
  },
  {
    title: "The Grand Chandelier",
    location: "Private Villa, Runda",
    type: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
    desc: "A 3-meter custom oak and brass chandelier designed for a double-height entrance hall."
  },
  {
    title: "Boutique Hotel Lobby",
    location: "Diani, Coast",
    type: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    desc: "Custom reception desk and coastal-inspired lighting fixtures for a luxury beachfront hotel."
  },
  {
    title: "Artisan Coffee Shop",
    location: "Lavington, Nairobi",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
    desc: "Compact furniture solutions and warm ambient lighting for a cozy neighborhood café."
  },
  {
    title: "Luxury Garden Sunroom",
    location: "Gigiri, Nairobi",
    type: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000",
    desc: "A bespoke glass-roofed outdoor living space featuring custom cedar beams, integrated lighting, and artisanal furniture."
  }
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif">Our Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of our recent projects across residential, commercial, and hospitality sectors.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.location}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
                <button className="flex items-center text-accent text-sm font-medium hover:underline pt-2">
                  View Case Study <ExternalLink className="ml-1.5 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 text-center py-20 bg-muted/30 rounded-[3rem] px-6">
          <h2 className="text-3xl font-serif mb-6">Want to see more?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We have hundreds of completed projects. Follow us on Instagram to see our daily workshop updates and latest installations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-8 h-12" render={<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" />}>
              Follow on Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary rounded-full px-8 h-12 hover:bg-primary hover:text-primary-foreground" render={<Link to="/custom-design" />}>
              Start Your Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
