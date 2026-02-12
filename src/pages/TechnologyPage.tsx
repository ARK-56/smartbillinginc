import { motion } from "framer-motion";
import { Brain, BarChart3, Lock, Zap, Server, RefreshCw } from "lucide-react";
import PageHero from "@/components/PageHero";

const techFeatures = [
  {
    icon: Brain,
    title: "AI Scrubbing Engine",
    description: "Our proprietary AI engine analyzes every claim against 100+ potential coding errors, payer-specific rules, and historical denial patterns before submission.",
    stats: [
      { value: "100+", label: "Error Checks" },
      { value: "85%", label: "Denial Reduction" },
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Live cash-flow monitoring with predictive forecasting, KPI tracking, and customizable reports accessible from any device.",
    stats: [
      { value: "Live", label: "Data Updates" },
      { value: "50+", label: "Report Templates" },
    ],
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. Every transaction is protected with multi-layer security.",
    stats: [
      { value: "AES-256", label: "Encryption" },
      { value: "SOC2", label: "Certified" },
    ],
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automated eligibility verification, claim status tracking, and payment posting that reduces manual work by 70%.",
    stats: [
      { value: "70%", label: "Less Manual Work" },
      { value: "24/7", label: "Automation" },
    ],
  },
  {
    icon: Server,
    title: "Cloud-Native Infrastructure",
    description: "Built on enterprise-grade cloud infrastructure with 99.99% uptime SLA, auto-scaling, and disaster recovery built in.",
    stats: [
      { value: "99.99%", label: "Uptime" },
      { value: "< 100ms", label: "Response Time" },
    ],
  },
  {
    icon: RefreshCw,
    title: "EHR/PM Integration",
    description: "Native integrations with Epic, Cerner, Athenahealth, and 50+ other systems via HL7 FHIR, REST APIs, and custom connectors.",
    stats: [
      { value: "50+", label: "Integrations" },
      { value: "FHIR", label: "Compliant" },
    ],
  },
];

const TechnologyPage = () => {
  return (
    <>
      <PageHero
        badge="Technology"
        title="The 'Smart' Behind"
        highlight="Smart Billing"
        description="Our proprietary technology stack combines artificial intelligence, real-time analytics, and enterprise-grade security to deliver unmatched accuracy and speed."
      />
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {techFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`grid lg:grid-cols-5 gap-8 items-center bg-background border border-border rounded-2xl p-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className={`lg:col-span-2 grid grid-cols-2 gap-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {feature.stats.map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-xl p-5 text-center">
                      <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
