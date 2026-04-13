import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/constants";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get("cat") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = currentCat === "all" || p.category === currentCat;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [currentCat, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif">Our Collections</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our curated selection of handcrafted furniture and lighting. Each piece is made to order and can be customized to your needs.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <Tabs 
            value={currentCat} 
            onValueChange={(val) => setSearchParams({ cat: val })}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-muted/50 p-1 rounded-full">
              <TabsTrigger value="all" className="rounded-full px-6">All Pieces</TabsTrigger>
              <TabsTrigger value="furniture" className="rounded-full px-6">Furniture</TabsTrigger>
              <TabsTrigger value="lighting" className="rounded-full px-6">Lighting</TabsTrigger>
              <TabsTrigger value="outdoor" className="rounded-full px-6">Outdoor</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 rounded-full bg-muted/30 border-none focus-visible:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group border-none bg-transparent shadow-none overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-card/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-0 space-y-2">
                    <h3 className="text-xl font-serif group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-medium text-accent">{product.price}</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent hover:text-accent group/btn" render={<Link to={`/product/${product.id}`} />}>
                        View Details <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground italic">No products found matching your search.</p>
            <Button variant="link" onClick={() => { setSearchQuery(""); setSearchParams({ cat: "all" }); }}>
              Clear all filters
            </Button>
          </div>
        )}

        <section className="mt-24 p-12 bg-primary text-primary-foreground rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-serif">Don't see exactly what you're looking for?</h2>
            <p className="opacity-70">We specialize in custom orders. Send us your inspiration or dimensions, and we'll bring your vision to life.</p>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8" render={<Link to="/custom-design" />}>Start Your Project</Button>
        </section>
      </div>
    </div>
  );
}
