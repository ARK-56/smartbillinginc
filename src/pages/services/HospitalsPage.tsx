import { motion } from "framer-motion";
import { Building2, Network, ShieldCheck, BarChart3, Zap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Building2, title: "Enterprise Scalability", description: "Handle millions of claims across multiple facilities with our cloud-native infrastructure designed for hospital systems." },
  { icon: Zap, title: "Denial Management", description: "Advanced denial analytics and automated workflow for appeals, recovering revenue that would otherwise be lost." },
  { icon: Network, title: "API Interoperability", description: "Seamless integration with Epic, Cerner, and all major EHR/PM systems via HL7 FHIR and custom APIs." },
  { icon: BarChart3, title: "Executive Dashboards", description: "C-suite ready analytics with facility-level breakdowns, trend analysis, and predictive revenue forecasting." },
  { icon: ShieldCheck, title: "Compliance at Scale", description: "Enterprise-grade HIPAA/SOC2 compliance with dedicated compliance officers and audit-ready documentation." },
  { icon: Globe, title: "Multi-Facility Support", description: "Centralized management with facility-specific configurations, reporting, and performance benchmarking." },
];

const HospitalsPage = () => {
  return (
    <>
      <PageHero
        badge="Hospital & Enterprise"
        title="Enterprise RCM"
        highlight="at Scale"
        description="Scalable revenue cycle management, advanced denial analytics, and seamless API interoperability for hospital systems and large healthcare organizations."
        ctaLabel="Schedule a Consultation"
        ctaHref="/contact"
      />
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Hospital Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From community hospitals to multi-state health systems, our enterprise solutions scale with your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background border border-border rounded-2xl p-7 hover:shadow-card transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-5">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalsPage;
