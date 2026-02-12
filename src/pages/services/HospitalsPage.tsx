import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Network, ShieldCheck, BarChart3, Zap, Globe, CheckCircle, ArrowRight, TrendingUp, Users, Lock, Cpu, HeartPulse, FileSearch, Workflow, Star, Clock, DollarSign } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Building2, title: "Enterprise Scalability", description: "Handle millions of claims across multiple facilities with our cloud-native infrastructure designed for hospital systems." },
  { icon: Zap, title: "Denial Management", description: "Advanced denial analytics and automated workflow for appeals, recovering revenue that would otherwise be lost." },
  { icon: Network, title: "API Interoperability", description: "Seamless integration with Epic, Cerner, and all major EHR/PM systems via HL7 FHIR and custom APIs." },
  { icon: BarChart3, title: "Executive Dashboards", description: "C-suite ready analytics with facility-level breakdowns, trend analysis, and predictive revenue forecasting." },
  { icon: ShieldCheck, title: "Compliance at Scale", description: "Enterprise-grade HIPAA/SOC2 compliance with dedicated compliance officers and audit-ready documentation." },
  { icon: Globe, title: "Multi-Facility Support", description: "Centralized management with facility-specific configurations, reporting, and performance benchmarking." },
];

const enterpriseStats = [
  { value: "$2B+", label: "Claims Processed Annually" },
  { value: "99.5%", label: "Accuracy Rate" },
  { value: "35%", label: "Denial Reduction" },
  { value: "200+", label: "Hospital Partners" },
];

const capabilities = [
  "Multi-facility revenue consolidation",
  "Payer contract optimization",
  "Charge capture integrity audits",
  "Automated payment posting",
  "Custom reporting & BI tools",
  "Dedicated account management",
  "24/7 priority support",
  "Quarterly business reviews",
  "Regulatory compliance monitoring",
  "Staff augmentation options",
];

const caseStudy = {
  title: "Regional Health System",
  subtitle: "450-bed, 3-facility health system",
  results: [
    { metric: "Revenue Increase", value: "$4.2M", period: "First Year" },
    { metric: "Days in AR", value: "32→19", period: "Reduction" },
    { metric: "Clean-Claim Rate", value: "97.8%", period: "Achieved" },
  ],
  quote: "Smart Billing transformed our revenue cycle. The technology and dedicated team have exceeded every benchmark we set.",
};

const implementationSteps = [
  { step: "01", title: "Discovery & Assessment", description: "We conduct a comprehensive analysis of your current revenue cycle, identifying gaps, inefficiencies, and revenue opportunities across all facilities." },
  { step: "02", title: "Custom Integration", description: "Our engineering team builds custom API integrations with your EHR, PM, and financial systems — ensuring zero downtime during transition." },
  { step: "03", title: "Phased Rollout", description: "We deploy facility by facility with dedicated onsite support, training your teams and validating workflows at each location." },
  { step: "04", title: "Optimization & Growth", description: "Continuous performance monitoring, quarterly business reviews, and proactive strategy adjustments to maximize revenue." },
];

const additionalServices = [
  { icon: Cpu, title: "Revenue Integrity", description: "Automated charge capture audits and CDI programs to ensure accurate coding and maximum reimbursement for every encounter." },
  { icon: HeartPulse, title: "Patient Access Services", description: "Pre-registration, insurance verification, and financial counseling to improve patient experience and reduce front-end denials." },
  { icon: FileSearch, title: "Payer Contract Analysis", description: "Deep analysis of your payer contracts to identify underpayments, negotiate better rates, and optimize your payer mix." },
  { icon: Workflow, title: "Workflow Automation", description: "RPA and AI-driven automation for repetitive tasks — payment posting, eligibility checks, and claim status inquiries." },
];

const hospitalTestimonials = [
  { name: "Dr. Robert Hayes", role: "CFO, Metro Health System", quote: "The ROI was immediate. Smart Billing's technology and dedicated team recovered $2.3M in previously lost revenue in our first six months.", rating: 5 },
  { name: "Sandra Williams", role: "VP Revenue Cycle, Regional Medical Center", quote: "Their phased implementation approach meant zero disruption to our operations. Our staff actually enjoys using the new system.", rating: 5 },
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

      {/* Enterprise Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseStats.map((stat, i) => (
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

      {/* Features Grid */}
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

      {/* Implementation Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Implementation</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Seamless Enterprise Onboarding</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our proven four-phase approach ensures zero disruption to your hospital operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-7 h-full">
                  <div className="text-4xl font-extrabold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Beyond Billing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Comprehensive Revenue Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our enterprise offering extends beyond traditional RCM to cover every revenue touchpoint.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background border border-border rounded-2xl p-7 flex gap-5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent flex-shrink-0">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + Case Study */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Enterprise Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Full-Spectrum <span className="text-gradient-primary">RCM Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every aspect of your revenue cycle, managed by a dedicated team with deep hospital billing expertise.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-xs font-semibold text-accent tracking-wider uppercase">Case Study</span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">{caseStudy.title}</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">{caseStudy.subtitle}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((r) => (
                    <div key={r.metric} className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                      <div className="text-xl font-extrabold text-primary-foreground">{r.value}</div>
                      <div className="text-xs text-primary-foreground/50 mt-1">{r.period}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-accent pl-4 text-primary-foreground/70 text-sm italic leading-relaxed">
                  "{caseStudy.quote}"
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Client Voices</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Trusted by Hospital Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hospitalTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Security</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Enterprise-Grade Compliance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "HIPAA Compliant", description: "Full HIPAA compliance with BAA, annual audits, and dedicated privacy officer for your organization." },
              { icon: Lock, title: "SOC 2 Type II", description: "Independently audited security controls covering availability, confidentiality, and processing integrity." },
              { icon: Users, title: "Dedicated Team", description: "Named account manager, compliance officer, and technical lead assigned to your organization." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-accent mb-5">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
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
              Ready for Enterprise RCM?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Schedule a consultation to see how we can optimize your hospital's revenue cycle at scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HospitalsPage;
