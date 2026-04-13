import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/constants";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[0];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/products" className="inline-flex items-center text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-accent text-sm uppercase tracking-[0.3em] font-medium">{product.category}</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">{product.name}</h1>
              <p className="text-2xl font-serif text-accent">{product.price}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-border/50">
              {product.specs.map(spec => (
                <div key={spec.label} className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest opacity-50">{spec.label}</p>
                  <p className="font-medium">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-accent text-accent-foreground rounded-full h-14 text-lg"
                  render={<Link to={`/quote/${product.id}`} />}
                >
                  Customize & Get Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-accent text-accent rounded-full h-14 text-lg hover:bg-accent hover:text-accent-foreground"
                  render={<Link to={`/quote/${product.id}`} />}
                >
                  Build Your Piece
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center space-y-2">
                  <Ruler className="w-5 h-5 mx-auto opacity-40" />
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Custom Sizes</p>
                </div>
                <div className="text-center space-y-2">
                  <ShieldCheck className="w-5 h-5 mx-auto opacity-40" />
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Lifetime Warranty</p>
                </div>
                <div className="text-center space-y-2">
                  <Truck className="w-5 h-5 mx-auto opacity-40" />
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Global Shipping</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Placeholder */}
        <section className="mt-32 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-serif">Related Pieces</h2>
            <Link to="/products" className="text-accent text-sm uppercase tracking-widest hover:underline flex items-center">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-4 group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                   <div className="w-full h-full bg-muted/50 flex items-center justify-center text-muted-foreground italic">Image Placeholder</div>
                </div>
                <h3 className="font-serif text-xl group-hover:text-accent transition-colors">Artisan Piece {i}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
