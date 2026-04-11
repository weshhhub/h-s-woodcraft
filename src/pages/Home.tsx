import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Hammer, Lightbulb, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Lighting",
    description: "Chandeliers, pendant lights, and decorative fixtures.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
    href: "/products?cat=lighting"
  },
  {
    name: "Furniture",
    description: "Dining tables, TV units, and custom woodwork.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
    href: "/products?cat=furniture"
  },
  {
    name: "Custom Pieces",
    description: "Unique designs tailored to your specific space.",
    image: "https://images.unsplash.com/photo-1611079830811-865ff4428d17?auto=format&fit=crop&q=80&w=800",
    href: "/products?cat=custom"
  }
];

const features = [
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Custom-Made",
    description: "Every piece is crafted to your exact specifications and style."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Quality Materials",
    description: "We use premium hardwoods and high-grade lighting components."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Unique Designs",
    description: "Artistic solutions that you won't find in any standard showroom."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Professional Finish",
    description: "Meticulous attention to detail in every joint and surface."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920"
            alt="Premium Furniture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Custom Furniture and Lighting <br />
            <span className="italic">Crafted to Transform Your Space</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto font-sans font-light tracking-wide"
          >
            Bespoke woodwork and artistic lighting solutions for residential and commercial interiors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg rounded-full" asChild>
              <Link to="/products">View Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary px-8 h-14 text-lg rounded-full" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Where Craftsmanship <br /> Meets Artistic Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At H & S Light and Woodcraft, we believe that furniture and lighting are more than just functional items—they are the soul of a space. Our studio specializes in blending the natural warmth of wood with innovative lighting designs to create pieces that are both practical and artistic.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From grand chandeliers to minimalist coffee tables, every piece is handcrafted in our Nairobi workshop with a commitment to quality that lasts generations.
            </p>
            <Button variant="link" className="p-0 text-accent text-lg group" asChild>
              <Link to="/about">
                Read Our Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000"
              alt="Workshop"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
              <p className="text-2xl font-serif italic mb-2">"Quality is not an act, it is a habit."</p>
              <p className="text-sm opacity-70 uppercase tracking-widest">— Our Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">Explore Our Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our range of handcrafted pieces designed to elevate your living and working environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
                  <p className="text-sm opacity-80 mb-6 font-light">{cat.description}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full" asChild>
                    <Link to={cat.href}>Explore Collection</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif">The Crafting Process</h2>
              <p className="opacity-70">From the first sketch to the final installation, we ensure a seamless experience for our clients.</p>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary rounded-full" asChild>
              <Link to="/services">Learn More About Services</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, space requirements, and style preferences." },
              { step: "02", title: "Design & Quote", desc: "Detailed sketches and material selection with a transparent quotation." },
              { step: "03", title: "Production", desc: "Handcrafting your piece in our workshop with regular updates." },
              { step: "04", title: "Installation", desc: "Professional delivery and setup to ensure the perfect fit." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <span className="text-5xl font-serif opacity-20 block mb-6">{item.step}</span>
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h2>
            <p className="text-muted-foreground">Trusted by homeowners and businesses across Nairobi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Wanjiku",
                role: "Homeowner",
                text: "The custom dining table H & S created for us is the centerpiece of our home. The quality of the oak and the finish is simply world-class."
              },
              {
                name: "David Maina",
                role: "Café Owner",
                text: "We needed unique lighting for our new coffee shop. The pendant lights they designed are exactly what we envisioned. Highly recommend!"
              },
              {
                name: "Anita Kerubo",
                role: "Interior Designer",
                text: "As a designer, I'm very picky about details. H & S consistently delivers pieces that meet my high standards and my clients' expectations."
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-muted/30 rounded-3xl space-y-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-muted-foreground">"{t.text}"</p>
                <div>
                  <p className="font-serif font-bold">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Ready to furnish or light your space?</h2>
          <p className="text-xl opacity-90 font-light">
            Let's collaborate to create something truly unique for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 px-10 h-14 text-lg rounded-full" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 text-lg rounded-full" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
