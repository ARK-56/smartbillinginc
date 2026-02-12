import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(207_90%_54%/0.2),transparent_50%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              Ready for a Free Revenue Audit?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Discover how much revenue you're leaving on the table. Our experts will analyze your billing process and identify immediate opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity"
              >
                Schedule Your Audit <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+18001234567"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-foreground/5 transition-colors"
              >
                Call (800) 123-4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
