import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  ChevronRight, 
  Check, 
  Plus, 
  Minus, 
  Info, 
  Truck, 
  Wrench, 
  PackageCheck,
  CreditCard,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/constants";
import { cn } from "@/lib/utils";

type Option = {
  id: string;
  label: string;
  price: number;
  description?: string;
};

const WOOD_TYPES: Option[] = [
  { id: "oak", label: "White Oak", price: 0, description: "Durable with a prominent grain." },
  { id: "walnut", label: "American Walnut", price: 450, description: "Rich, dark tones and elegant finish." },
  { id: "mahogany", label: "African Mahogany", price: 300, description: "Classic reddish-brown with high durability." },
  { id: "teak", label: "Grade-A Teak", price: 600, description: "Best for outdoor or high-moisture areas." },
];

const FINISHES: Option[] = [
  { id: "natural", label: "Natural Oil", price: 0, description: "Brings out the organic wood texture." },
  { id: "matte", label: "Matte Lacquer", price: 150, description: "Smooth, protective, non-reflective finish." },
  { id: "dark", label: "Dark Espresso Stain", price: 200, description: "Deep, sophisticated dark coloring." },
];

const DIMENSIONS: Option[] = [
  { id: "standard", label: "Standard Size", price: 0 },
  { id: "large", label: "Large (+20%)", price: 500 },
  { id: "custom", label: "Custom Dimensions", price: 800 },
];

const ADD_ONS = [
  { id: "drawers", label: "Soft-Close Drawers", price: 250, icon: <Plus className="w-4 h-4" /> },
  { id: "shelves", label: "Adjustable Shelving", price: 150, icon: <Plus className="w-4 h-4" /> },
  { id: "lighting", label: "Integrated LED Lighting", price: 350, icon: <Plus className="w-4 h-4" /> },
  { id: "glass", label: "Tempered Glass Top", price: 400, icon: <Plus className="w-4 h-4" /> },
];

export default function QuoteBuilder() {
  const { productId } = useParams();
  const product = products.find(p => p.id === Number(productId)) || products[0];

  const [step, setStep] = useState<"configure" | "summary" | "order">("configure");
  const [quantity, setQuantity] = useState(1);
  const [selectedWood, setSelectedWood] = useState(WOOD_TYPES[0]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [selectedSize, setSelectedSize] = useState(DIMENSIONS[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [services, setServices] = useState({ delivery: true, installation: false });
  const [notes, setNotes] = useState("");

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const pricing = useMemo(() => {
    const base = product.basePrice;
    const woodCost = selectedWood.price;
    const finishCost = selectedFinish.price;
    const sizeCost = selectedSize.price;
    const addOnsCost = selectedAddOns.reduce((acc, id) => {
      const addOn = ADD_ONS.find(a => a.id === id);
      return acc + (addOn?.price || 0);
    }, 0);
    const deliveryCost = services.delivery ? 150 : 0;
    const installationCost = services.installation ? 250 : 0;

    const subtotal = (base + woodCost + finishCost + sizeCost + addOnsCost) * quantity;
    const total = subtotal + deliveryCost + installationCost;

    return {
      base,
      woodCost,
      finishCost,
      sizeCost,
      addOnsCost,
      deliveryCost,
      installationCost,
      subtotal,
      total
    };
  }, [product, selectedWood, selectedFinish, selectedSize, selectedAddOns, quantity, services]);

  if (step === "order") {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center space-y-8 bg-card p-12 rounded-[3rem] border border-border shadow-2xl"
        >
          <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-serif">Order Placed Successfully</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for choosing Furniture by Waweru. Your bespoke order has been received and our master craftsmen are reviewing your configuration.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-2xl text-left space-y-2">
            <p className="text-sm font-medium uppercase tracking-widest opacity-60">Order Reference</p>
            <p className="text-xl font-mono">#WAW-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p className="text-sm text-muted-foreground pt-2">A confirmation email with your detailed quote and next steps has been sent to your inbox.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Button size="lg" className="rounded-full h-14 bg-primary text-primary-foreground" render={<Link to="/products" />}>
              Return to Catalog
            </Button>
            <Button variant="ghost" className="text-accent" render={<Link to="/" />}>
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link to={`/product/${product.id}`} className="inline-flex items-center text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Product
          </Link>
          <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
            <span className={cn(step === "configure" ? "text-accent" : "opacity-40")}>1. Configure</span>
            <ChevronRight className="w-3 h-3 opacity-20" />
            <span className={cn(step === "summary" ? "text-accent" : "opacity-40")}>2. Summary</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Configuration */}
          <div className="lg:col-span-8 space-y-16">
            <AnimatePresence mode="wait">
              {step === "configure" ? (
                <motion.div 
                  key="configure"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Material & Finish</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {WOOD_TYPES.map((wood) => (
                        <button
                          key={wood.id}
                          onClick={() => setSelectedWood(wood)}
                          className={cn(
                            "text-left p-6 rounded-2xl border transition-all duration-300 group",
                            selectedWood.id === wood.id 
                              ? "border-accent bg-accent/5 ring-1 ring-accent" 
                              : "border-border hover:border-accent/50 bg-card"
                          )}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-lg">{wood.label}</h3>
                            {selectedWood.id === wood.id && <Check className="w-5 h-5 text-accent" />}
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{wood.description}</p>
                          <p className="text-sm font-medium text-accent">
                            {wood.price === 0 ? "Included" : `+$${wood.price}`}
                          </p>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6">
                    <h3 className="text-xl font-serif opacity-80">Select Finish</h3>
                    <div className="flex flex-wrap gap-4">
                      {FINISHES.map((finish) => (
                        <button
                          key={finish.id}
                          onClick={() => setSelectedFinish(finish)}
                          className={cn(
                            "px-8 py-4 rounded-full border text-sm font-medium transition-all",
                            selectedFinish.id === finish.id 
                              ? "border-accent bg-accent text-accent-foreground" 
                              : "border-border hover:border-accent/50"
                          )}
                        >
                          {finish.label} {finish.price > 0 && `(+$${finish.price})`}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Dimensions & Scale</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {DIMENSIONS.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSize(size)}
                          className={cn(
                            "p-6 rounded-2xl border text-center transition-all",
                            selectedSize.id === size.id 
                              ? "border-accent bg-accent/5 ring-1 ring-accent" 
                              : "border-border hover:border-accent/50 bg-card"
                          )}
                        >
                          <p className="font-medium mb-1">{size.label}</p>
                          <p className="text-xs text-accent">
                            {size.price === 0 ? "Base Price" : `+$${size.price}`}
                          </p>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Features & Add-ons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ADD_ONS.map((addon) => (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          className={cn(
                            "flex items-center justify-between p-6 rounded-2xl border transition-all",
                            selectedAddOns.includes(addon.id)
                              ? "border-accent bg-accent/5 ring-1 ring-accent" 
                              : "border-border hover:border-accent/50 bg-card"
                          )}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                              selectedAddOns.includes(addon.id) ? "bg-accent text-accent-foreground" : "bg-muted"
                            )}>
                              {selectedAddOns.includes(addon.id) ? <Check className="w-5 h-5" /> : addon.icon}
                            </div>
                            <div className="text-left">
                              <p className="font-medium">{addon.label}</p>
                              <p className="text-xs text-accent">+$${addon.price}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Services</h2>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card cursor-pointer hover:border-accent/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Truck className="w-6 h-6 text-accent" />
                          <div>
                            <p className="font-medium">Premium Delivery</p>
                            <p className="text-sm text-muted-foreground">White-glove delivery to your doorstep.</p>
                          </div>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={services.delivery} 
                          onChange={(e) => setServices(prev => ({ ...prev, delivery: e.target.checked }))}
                          className="w-6 h-6 accent-accent"
                        />
                      </label>
                      <label className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card cursor-pointer hover:border-accent/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Wrench className="w-6 h-6 text-accent" />
                          <div>
                            <p className="font-medium">Professional Installation</p>
                            <p className="text-sm text-muted-foreground">On-site assembly and positioning by our team.</p>
                          </div>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={services.installation} 
                          onChange={(e) => setServices(prev => ({ ...prev, installation: e.target.checked }))}
                          className="w-6 h-6 accent-accent"
                        />
                      </label>
                    </div>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Special Requirements</h2>
                    <textarea 
                      placeholder="Tell us about any specific dimensions, hardware preferences, or site conditions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full h-40 p-6 rounded-3xl bg-muted/30 border-none focus:ring-2 focus:ring-accent resize-none text-lg"
                    />
                  </section>
                </motion.div>
              ) : (
                <motion.div 
                  key="summary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden">
                    <div className="aspect-video relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
                        <h2 className="text-4xl font-serif text-white mb-2">{product.name}</h2>
                        <p className="text-white/70 uppercase tracking-widest text-sm">Bespoke Configuration</p>
                      </div>
                    </div>
                    <div className="p-12 space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h3 className="text-sm uppercase tracking-widest opacity-40 font-bold">Core Selections</h3>
                          <ul className="space-y-4">
                            <li className="flex justify-between border-b border-border pb-2">
                              <span className="text-muted-foreground">Material</span>
                              <span className="font-medium">{selectedWood.label}</span>
                            </li>
                            <li className="flex justify-between border-b border-border pb-2">
                              <span className="text-muted-foreground">Finish</span>
                              <span className="font-medium">{selectedFinish.label}</span>
                            </li>
                            <li className="flex justify-between border-b border-border pb-2">
                              <span className="text-muted-foreground">Scale</span>
                              <span className="font-medium">{selectedSize.label}</span>
                            </li>
                            <li className="flex justify-between border-b border-border pb-2">
                              <span className="text-muted-foreground">Quantity</span>
                              <span className="font-medium">{quantity} units</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-sm uppercase tracking-widest opacity-40 font-bold">Features & Services</h3>
                          <ul className="space-y-4">
                            {selectedAddOns.map(id => (
                              <li key={id} className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">{ADD_ONS.find(a => a.id === id)?.label}</span>
                                <span className="text-accent">Included</span>
                              </li>
                            ))}
                            {services.delivery && (
                              <li className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Premium Delivery</span>
                                <span className="text-accent">Yes</span>
                              </li>
                            )}
                            {services.installation && (
                              <li className="flex justify-between border-b border-border pb-2">
                                <span className="text-muted-foreground">Installation</span>
                                <span className="text-accent">Yes</span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {notes && (
                        <div className="space-y-4">
                          <h3 className="text-sm uppercase tracking-widest opacity-40 font-bold">Custom Notes</h3>
                          <p className="p-6 bg-muted/30 rounded-2xl italic text-muted-foreground">"{notes}"</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full px-12 h-14 border-accent text-accent"
                      onClick={() => setStep("configure")}
                    >
                      Edit Configuration
                    </Button>
                    <Button 
                      size="lg" 
                      className="rounded-full px-12 h-14 bg-accent text-accent-foreground shadow-xl"
                      onClick={() => setStep("order")}
                    >
                      Place Bespoke Order
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Summary Panel (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-xl space-y-8">
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-widest opacity-40 font-bold">Live Quote Summary</h3>
                  <p className="text-2xl font-serif">{product.name}</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Price</span>
                    <span>${pricing.base.toLocaleString()}</span>
                  </div>
                  {pricing.woodCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material Upgrade</span>
                      <span className="text-accent">+${pricing.woodCost.toLocaleString()}</span>
                    </div>
                  )}
                  {pricing.finishCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Finish Upgrade</span>
                      <span className="text-accent">+${pricing.finishCost.toLocaleString()}</span>
                    </div>
                  )}
                  {pricing.sizeCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Scale Adjustment</span>
                      <span className="text-accent">+${pricing.sizeCost.toLocaleString()}</span>
                    </div>
                  )}
                  {pricing.addOnsCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Features Total</span>
                      <span className="text-accent">+${pricing.addOnsCost.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-muted-foreground">Quantity</span>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-medium w-4 text-center">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(q => q + 1)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${pricing.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery</span>
                      <span>${pricing.deliveryCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Installation</span>
                      <span>${pricing.installationCost.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Estimated Total</p>
                      <p className="text-4xl font-serif text-accent">${pricing.total.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {step === "configure" && (
                  <Button 
                    className="w-full h-14 rounded-full bg-primary text-primary-foreground text-lg group"
                    onClick={() => setStep("summary")}
                  >
                    Build Your Piece <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>

              <div className="bg-muted/30 p-6 rounded-2xl flex items-start space-x-4">
                <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Quotes are valid for 30 days. Final pricing may vary slightly based on specific site conditions and material availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
