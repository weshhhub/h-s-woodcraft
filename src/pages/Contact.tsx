import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database
    alert("Thank you for your message! We will get back to you soon.");
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to inquire about a specific piece? We'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@hslightwood.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Workshop Location</p>
                    <p className="text-muted-foreground">Industrial Area, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Fri: 8am - 6pm<br />Sat: 9am - 3pm</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-serif">Quick Chat</h3>
                <p className="text-sm opacity-70">Prefer a quick conversation? Message us directly on WhatsApp for instant inquiries.</p>
                <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none" asChild>
                  <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    required
                    placeholder="John Doe" 
                    className="rounded-xl border-muted focus-visible:ring-accent"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="john@example.com" 
                    className="rounded-xl border-muted focus-visible:ring-accent"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input 
                    placeholder="+254 7..." 
                    className="rounded-xl border-muted focus-visible:ring-accent"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    required
                    placeholder="Custom Table Inquiry" 
                    className="rounded-xl border-muted focus-visible:ring-accent"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  required
                  placeholder="Tell us about your project..." 
                  className="rounded-xl border-muted focus-visible:ring-accent min-h-[150px]"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-12 h-12 rounded-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
