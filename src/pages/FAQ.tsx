import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you make custom designs?",
    answer: "Yes, customization is at the heart of what we do. We can adapt existing designs to your dimensions or create entirely new pieces based on your vision, sketches, or inspiration images."
  },
  {
    question: "How long does production take?",
    answer: "Production timelines vary depending on the complexity of the piece. Generally, small lighting fixtures take 1-2 weeks, while larger furniture pieces or full interior fit-outs can take 4-8 weeks."
  },
  {
    question: "Do you deliver and install?",
    answer: "Yes, we offer professional delivery and installation services across Nairobi and surrounding areas. For lighting, we ensure all fixtures are safely mounted and connected."
  },
  {
    question: "Can I order from outside Nairobi?",
    answer: "Absolutely. We ship our products across Kenya and East Africa. For orders outside Nairobi, we provide detailed installation guides or can arrange for a team to travel for large-scale projects."
  },
  {
    question: "What materials do you use?",
    answer: "We primarily work with premium hardwoods like Mahogany, Oak, Walnut, and Mvule. For lighting, we use high-quality brass, steel, and certified electrical components to ensure longevity and safety."
  },
  {
    question: "Do you require a deposit before starting?",
    answer: "Yes, we typically require a 50% deposit to confirm your order and begin production. The remaining balance is due upon delivery or installation."
  },
  {
    question: "Can I choose my own design?",
    answer: "Yes! If you have a specific design in mind, you can share it with us. We will review it for structural integrity and provide a quote for fabrication."
  },
  {
    question: "Do you work with restaurants or offices?",
    answer: "Yes, a large portion of our work is for commercial clients. We offer bulk pricing and specialized designs for restaurants, cafés, offices, and boutique hotels."
  },
  {
    question: "Do you repair furniture or lighting?",
    answer: "We primarily focus on new production, but we do offer restoration and repair services for high-quality wooden furniture and vintage lighting fixtures on a case-by-case basis."
  }
];

export default function FAQ() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif">FAQs</h1>
          <p className="text-muted-foreground text-lg">
            Common questions about our process, products, and services.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-2xl px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <section className="mt-20 p-10 bg-accent text-white rounded-3xl text-center space-y-6">
          <h2 className="text-2xl font-serif">Still have questions?</h2>
          <p className="opacity-80">Our team is here to help you with any specific inquiries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/254700000000" className="bg-white text-accent px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
              Chat on WhatsApp
            </a>
            <a href="/contact" className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
