import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-nav py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-serif font-bold tracking-tight text-primary">
            H & S LIGHT
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans -mt-1 opacity-80">
            & WOODCRAFT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Phone className="w-4 h-4 mr-2" />
            Inquire
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-2xl font-serif transition-colors hover:text-accent",
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-foreground/80"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-primary text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
