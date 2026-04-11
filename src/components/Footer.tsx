import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight">
              H & S LIGHT
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-sans -mt-1 opacity-80">
              & WOODCRAFT
            </span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Crafting premium custom furniture and artistic lighting solutions that transform spaces into experiences.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/products" className="hover:text-accent transition-colors">Our Catalog</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Custom Orders</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Categories</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/products?cat=lighting" className="hover:text-accent transition-colors">Lighting Fixtures</Link></li>
            <li><Link to="/products?cat=furniture" className="hover:text-accent transition-colors">Custom Furniture</Link></li>
            <li><Link to="/products?cat=woodwork" className="hover:text-accent transition-colors">Interior Woodwork</Link></li>
            <li><Link to="/products?cat=decor" className="hover:text-accent transition-colors">Decorative Pieces</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
              <span>Nairobi, Kenya<br />Workshop District</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 shrink-0" />
              <span>hello@hslightwood.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-xs opacity-50 space-y-4 md:space-y-0">
        <p>© 2026 H & S Light and Woodcraft. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
