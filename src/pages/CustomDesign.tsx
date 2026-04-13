import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CustomDesign() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md"
        >
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-serif">Inquiry Received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for sharing your vision. Our design team will review your requirements and contact you within 48 hours to discuss the next steps.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground rounded-full px-8"
            onClick={() => setSubmitted(false)}
          >
            Back to Custom Design
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <header className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif">Custom Design</h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Bring your unique vision to life. From single bespoke pieces to full interior fit-outs, we collaborate with you to create furniture and lighting that is truly yours.
              </p>
            </header>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif">The Process</h3>
                <ol className="space-y-6">
                  {[
                    { step: "01", title: "Initial Inquiry", desc: "Share your ideas, dimensions, and inspiration with us." },
                    { step: "02", title: "Design Proposal", desc: "We provide detailed sketches, material samples, and a quote." },
                    { step: "03", title: "Craftsmanship", desc: "Our artisans begin production, sharing progress updates along the way." },
                    { step: "04", title: "Installation", desc: "We deliver and professionally install your custom piece." }
                  ].map((item) => (
                    <li key={item.step} className="flex gap-6">
                      <span className="text-accent font-serif text-2xl opacity-50">{item.step}</span>
                      <div className="space-y-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-center">Start Your Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium opacity-60">Full Name</label>
                    <Input required placeholder="John Doe" className="bg-muted/30 border-none rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium opacity-60">Email Address</label>
                    <Input required type="email" placeholder="john@example.com" className="bg-muted/30 border-none rounded-xl h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium opacity-60">Project Type</label>
                  <select className="w-full bg-muted/30 border-none rounded-xl h-12 px-4 text-sm outline-none focus:ring-2 focus:ring-accent transition-all">
                    <option>Residential Furniture</option>
                    <option>Commercial/Hospitality</option>
                    <option>Custom Lighting</option>
                    <option>Full Interior Fit-out</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium opacity-60">Project Description</label>
                  <Textarea 
                    required 
                    placeholder="Tell us about the piece you want to create, including approximate dimensions and materials..." 
                    className="bg-muted/30 border-none rounded-xl min-h-[150px] p-4"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium opacity-60">Estimated Budget</label>
                  <Input placeholder="e.g. $2,000 - $5,000" className="bg-muted/30 border-none rounded-xl h-12" />
                </div>
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent text-accent-foreground rounded-full h-14 text-lg group"
              >
                Submit Inquiry <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <p className="text-[10px] text-center opacity-50 uppercase tracking-widest">
                Our team typically responds within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
