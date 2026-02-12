import { motion } from "framer-motion";
import { FileCheck, DollarSign, BarChart3, ShieldCheck, Zap, HeartPulse } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Claims Management",
    description: "End-to-end claim submission, tracking, and follow-up with AI-powered error detection.",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Maximize reimbursements with proactive denial management and underpayment recovery.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards for cash-flow monitoring, KPI tracking, and financial forecasting.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    description: "HIPAA/SOC2 compliant with end-to-end encryption and audit-ready reporting.",
  },
  {
    icon: Zap,
    title: "AI Claim Scrubber",
    description: "Detects 100+ coding errors before submission, reducing denials by up to 85%.",
  },
  {
    icon: HeartPulse,
    title: "Patient Billing",
    description: "Transparent statements, insurance eligibility checks, and No-Surprise Billing Guarantee.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Comprehensive RCM Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From claim submission to payment collection, we streamline every step of your revenue cycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-7 hover:shadow-card transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-5 group-hover:bg-gradient-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
