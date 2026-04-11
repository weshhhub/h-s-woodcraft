import { motion } from "motion/react";
import { ArrowRight, Award, Users, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif">Our Story</h1>
              <p className="text-accent font-medium tracking-widest uppercase text-sm">Crafting Excellence Since 2015</p>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                H & S Light and Woodcraft began as a small workshop with a simple vision: to create furniture and lighting that tells a story. Founded by master craftsmen who felt the market was saturated with mass-produced, soul-less items, we set out to bring back the art of bespoke production.
              </p>
              <p>
                Based in the heart of Nairobi, our studio has grown from a two-person team to a collective of skilled artisans, designers, and lighting specialists. We combine traditional woodworking techniques with modern electrical engineering to produce pieces that are as safe and functional as they are beautiful.
              </p>
              <p>
                Every piece of timber we use is carefully selected for its grain, strength, and character. We believe in sustainable sourcing and meticulous finishing, ensuring that every product leaving our workshop is a masterpiece in its own right.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000"
                alt="Craftsman at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-xl hidden md:block border border-border/50">
              <div className="text-center">
                <p className="text-5xl font-serif text-accent mb-2">10+</p>
                <p className="text-sm uppercase tracking-widest opacity-60">Years of Craft</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-muted/30 p-12 rounded-3xl space-y-6">
            <h2 className="text-3xl font-serif">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To transform living and working spaces through handcrafted furniture and lighting that balances artistic expression with practical utility, while promoting the heritage of fine craftsmanship in Kenya.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground p-12 rounded-3xl space-y-6">
            <h2 className="text-3xl font-serif">Our Vision</h2>
            <p className="opacity-70 leading-relaxed">
              To be the leading bespoke studio in East Africa, recognized for innovative design, sustainable practices, and pieces that bring warmth and character to every interior they inhabit.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The core principles that guide every cut, every joint, and every wire in our workshop.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Integrity", desc: "We use the materials we promise and build pieces that last a lifetime." },
              { icon: <Heart className="w-8 h-8" />, title: "Passion", desc: "Every artisan in our team loves the craft, and it shows in the final product." },
              { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "We work closely with clients to ensure their vision is perfectly realized." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Safety", desc: "Our lighting fixtures meet rigorous safety standards for your peace of mind." }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4 p-8 border border-border/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Experience the Craftsmanship</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Whether it's a single lamp or a full office fit-out, we bring the same level of dedication to every project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 px-10 h-14 rounded-full" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 rounded-full" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
