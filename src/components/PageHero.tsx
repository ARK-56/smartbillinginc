import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const PageHero = ({ badge, title, highlight, description, ctaLabel, ctaHref }: PageHeroProps) => {
  return (
    <section className="bg-gradient-hero pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold text-sky-light tracking-wider uppercase bg-sky/10 border border-sky/20 rounded-full px-4 py-1.5 mb-5"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-5"
          >
            {title}{" "}
            {highlight && <span className="text-gradient-primary">{highlight}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/70 mb-8 max-w-2xl"
          >
            {description}
          </motion.p>
          {ctaLabel && ctaHref && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                {ctaLabel} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
