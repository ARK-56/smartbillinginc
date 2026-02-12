import { motion } from "framer-motion";
import { User, Stethoscope, Building2 } from "lucide-react";

const paths = [
  {
    icon: User,
    title: "Patients",
    description: "Transparent billing, insurance verification & easy online payments.",
    color: "primary",
  },
  {
    icon: Stethoscope,
    title: "Physicians & Practices",
    description: "Reduce Days in AR with AI-powered claim scrubbing & revenue optimization.",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Hospitals & Enterprise",
    description: "Scalable RCM, denial management & seamless API interoperability.",
    color: "primary",
  },
];

const SegmentedPaths = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions Tailored to <span className="text-gradient-primary">Your Needs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're a patient, provider, or hospital system — we have the right solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${path.color === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}>
                <path.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{path.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{path.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentedPaths;
