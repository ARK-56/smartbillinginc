import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, BarChart3, Lock, Zap, Server, RefreshCw, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
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
    details: [
      "NLP-powered code validation",
      "Payer-specific rule sets",
      "Historical denial pattern matching",
      "Real-time feedback loop",
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
    details: [
      "Predictive revenue forecasting",
      "Custom KPI dashboards",
      "Denial trend analytics",
      "Mobile-optimized access",
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
    details: [
      "Zero-trust architecture",
      "Multi-factor authentication",
      "Continuous vulnerability scanning",
      "HIPAA-compliant infrastructure",
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
    details: [
      "Auto eligibility verification",
      "Intelligent claim routing",
      "Automated payment posting",
      "Smart task prioritization",
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
    details: [
      "Auto-scaling architecture",
      "Multi-region redundancy",
      "Disaster recovery built-in",
      "Enterprise SLA guarantee",
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
    details: [
      "Bi-directional data sync",
      "Custom connector API",
      "HL7 FHIR compliance",
      "Plug-and-play onboarding",
    ],
  },
];

const integrations = [
  "Epic", "Cerner", "Athenahealth", "eClinicalWorks", "Allscripts",
  "NextGen", "Greenway Health", "Kareo", "DrChrono", "Practice Fusion",
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

      {/* Overview Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "98%", label: "First-Pass Acceptance" },
              { value: "< 100ms", label: "Processing Speed" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "50+", label: "EHR Integrations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features - Alternating Layout */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Technology That <span className="text-gradient-primary">Drives Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Six core pillars powering the most advanced revenue cycle management platform in healthcare.
            </p>
          </div>
          <div className="space-y-10">
            {techFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-8 lg:p-10"
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "" : ""}`}>
                  {/* Content */}
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-5">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.details.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className={`lg:col-span-3 grid grid-cols-2 gap-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {feature.stats.map((stat) => (
                      <div key={stat.label} className="bg-secondary rounded-xl p-5 text-center">
                        <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Visual element */}
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-3" : ""}`}>
                    <div className="bg-gradient-hero rounded-2xl p-6 h-full flex flex-col items-center justify-center min-h-[160px]">
                      <feature.icon className="w-12 h-12 text-primary-foreground/30 mb-3" />
                      <div className="text-lg font-bold text-primary-foreground">{feature.stats[0].value}</div>
                      <div className="text-xs text-primary-foreground/50">{feature.stats[0].label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Integrations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Works With Your <span className="text-gradient-primary">Existing Systems</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Plug-and-play integrations with all major EHR and practice management systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl px-6 py-4 font-semibold text-sm hover:shadow-card transition-all hover:border-primary/30"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Security</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Security is <span className="text-gradient-primary">Non-Negotiable</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Healthcare data demands the highest level of protection. Our security infrastructure exceeds industry standards at every level.
              </p>
              <div className="space-y-4">
                {[
                  { title: "HIPAA Compliance", desc: "Full compliance with all HIPAA privacy and security rules, with annual third-party audits." },
                  { title: "SOC 2 Type II Certified", desc: "Independent verification of our security controls for availability, confidentiality, and integrity." },
                  { title: "Continuous Monitoring", desc: "24/7 security monitoring with automated threat detection and incident response." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-8 lg:p-10"
            >
              <h3 className="text-xl font-bold text-primary-foreground mb-6">Security at a Glance</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "AES-256", label: "Data Encryption" },
                  { value: "TLS 1.3", label: "Transit Security" },
                  { value: "24/7", label: "SOC Monitoring" },
                  { value: "Annual", label: "Pen Testing" },
                  { value: "99.99%", label: "Uptime SLA" },
                  { value: "Zero", label: "Breaches" },
                ].map((s) => (
                  <div key={s.label} className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-extrabold text-primary-foreground">{s.value}</div>
                    <div className="text-xs text-primary-foreground/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              See the Technology in Action
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Request a live demo and experience how our platform can transform your revenue cycle.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
