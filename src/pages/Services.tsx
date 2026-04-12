import { motion } from "motion/react";
import { Hammer, Lightbulb, Ruler, Truck, PenTool, Home, Coffee, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Custom Furniture Design",
    desc: "From dining sets to executive desks, we design and build furniture that fits your space and lifestyle perfectly.",
    features: ["Material selection", "3D visualization", "Custom dimensions", "Unique finishes"]
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Artistic Lighting Fabrication",
    desc: "We create bespoke lighting fixtures that serve as focal points, blending wood, metal, and light.",
    features: ["Chandeliers", "Pendant lights", "Wall sconces", "LED integration"]
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Interior Woodwork",
    desc: "Comprehensive woodwork solutions for interiors, including wall paneling, shelving, and built-in units.",
    features: ["Wall units", "Library shelving", "Kitchen cabinetry", "Staircase details"]
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Installation & Delivery",
    desc: "Professional delivery and on-site installation to ensure your pieces are set up perfectly and safely.",
    features: ["Safe transport", "Expert mounting", "Electrical setup", "Final adjustments"]
  }
];

const sectors = [
  { icon: <Home className="w-6 h-6" />, name: "Residential" },
  { icon: <Coffee className="w-6 h-6" />, name: "Restaurants & Cafés" },
  { icon: <Briefcase className="w-6 h-6" />, name: "Offices & Commercial" }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer end-to-end design and production services for custom furniture and lighting, catering to both private homes and commercial spaces.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-card rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <section className="py-20 bg-muted/30 rounded-[3rem] px-12 mb-32">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-serif">Sectors We Serve</h2>
            <p className="text-muted-foreground">Tailored solutions for every environment.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {sectors.map((sector, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-md text-accent">
                  {sector.icon}
                </div>
                <span className="font-serif text-lg">{sector.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif leading-tight">Ready to Start a Project?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you have a fully developed design or just a rough idea, our team is ready to help you bring it to life. We offer initial consultations to discuss your vision and provide a transparent quote.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <p className="font-medium">Initial Consultation & Briefing</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <p className="font-medium">Design Proposal & Material Selection</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <p className="font-medium">Production & Regular Updates</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <p className="font-medium">Delivery & Professional Installation</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary text-white rounded-full px-10 h-14" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000"
              alt="Consultation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
