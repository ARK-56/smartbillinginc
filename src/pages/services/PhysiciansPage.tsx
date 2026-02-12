import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Brain, BarChart3, Clock, FileCheck, Zap, CheckCircle, ArrowRight, Users, Award, Target, Layers, Shield, Stethoscope, Star, DollarSign } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: TrendingUp, title: "Reduce Days in AR", description: "Our clients see an average 40% reduction in days in accounts receivable within the first 90 days of partnership." },
  { icon: Brain, title: "AI Claim Scrubber", description: "Proprietary AI engine detects 100+ coding errors before submission, achieving a 98% first-pass acceptance rate." },
  { icon: BarChart3, title: "Revenue Analytics", description: "Real-time dashboards showing before & after revenue charts, denial trends, and collection performance metrics." },
  { icon: Clock, title: "48-Hour Turnaround", description: "Claims processed and submitted within 48 hours of receipt. Faster submissions mean faster payments." },
  { icon: FileCheck, title: "Credentialing Support", description: "Full-service provider credentialing and enrollment to ensure maximum payer participation and reimbursement." },
  { icon: Zap, title: "Denial Management", description: "Proactive denial prevention and aggressive follow-up on denied claims to recover every dollar you've earned." },
];

const processSteps = [
  { step: "01", title: "Free Revenue Audit", description: "We analyze your current billing to identify revenue leaks and areas for improvement." },
  { step: "02", title: "Seamless Onboarding", description: "We integrate with your EHR/PM system and train your team — zero disruption to operations." },
  { step: "03", title: "AI-Powered Claims", description: "Every claim is scrubbed by our AI engine before submission, catching errors humans miss." },
  { step: "04", title: "Revenue Growth", description: "Watch your collections increase and denials decrease with real-time analytics dashboards." },
];

const specialties = [
  "Family Medicine", "Internal Medicine", "Cardiology", "Orthopedics",
  "Dermatology", "Neurology", "Gastroenterology", "Pediatrics",
  "Urology", "Pulmonology", "Oncology", "OB/GYN",
];

const whySwitch = [
  { icon: Target, title: "Revenue Leakage Detection", description: "Most practices lose 10-15% of revenue to coding errors, missed charges, and slow follow-up. We find and fix those leaks." },
  { icon: Layers, title: "End-to-End RCM", description: "From patient registration and eligibility checks through final payment posting — we manage the entire revenue cycle." },
  { icon: Shield, title: "Compliance Assurance", description: "Stay ahead of regulatory changes with our compliance team monitoring CMS updates, ICD-10 changes, and payer policy shifts." },
  { icon: DollarSign, title: "Cost Reduction", description: "Reduce billing staff overhead by up to 40% while improving collection rates and reducing administrative burden." },
];

const testimonials = [
  { name: "Dr. Michael Chen", specialty: "Cardiology", quote: "Smart Billing increased our collections by 32% in the first quarter. Their AI scrubber catches coding issues we never would have found.", rating: 5 },
  { name: "Dr. Lisa Patel", specialty: "Family Medicine", quote: "The transition was seamless. Within 48 hours our claims were being processed, and we saw results within the first month.", rating: 5 },
];

const PhysiciansPage = () => {
  return (
    <>
      <PageHero
        badge="Physician & Practice"
        title="Maximize Revenue,"
        highlight="Minimize Hassle"
        description="Reduce Days in AR, leverage AI-powered claim scrubbing, and watch your revenue grow with our specialized RCM solutions for physicians and private practices."
        ctaLabel="Request a Revenue Analysis"
        ctaHref="/contact"
      />

      {/* Stats + Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Private Practice</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We understand the unique challenges physicians face — from complex coding requirements to shrinking reimbursements. Our outsourced RCM solution lets you focus on patients while we focus on your revenue.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "40%", label: "AR Reduction" },
                  { value: "98%", label: "Clean-Claim Rate" },
                  { value: "30%", label: "Revenue Increase" },
                  { value: "48hr", label: "Turnaround" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background border border-border rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border rounded-xl p-5"
                >
                  <f.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.slice(4).map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-7 hover:shadow-card transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent mb-5">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why Smart Billing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why Practices Switch to Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              In-house billing teams can't match the technology, scale, and expertise of a dedicated RCM partner.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whySwitch.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-7 flex gap-5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">From Audit to Revenue Growth</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven four-step process that transforms your revenue cycle in as little as 90 days.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-background border border-border rounded-2xl p-7 h-full">
                  <div className="text-4xl font-extrabold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Trusted by Physicians</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.specialty}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Specialties</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                We Serve <span className="text-gradient-primary">Every Specialty</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our certified coders and billing specialists have deep expertise across all major medical specialties. We understand the unique coding and payer requirements for each.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="bg-gradient-hero rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-primary-foreground">500+</div>
                    <div className="text-primary-foreground/60 text-sm">Practices Served</div>
                  </div>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  From solo practitioners to 50+ provider groups, we scale our solutions to match your practice size and specialty needs.
                </p>
              </div>
              <div className="bg-gradient-hero rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-primary-foreground">15+ Years</div>
                    <div className="text-primary-foreground/60 text-sm">Industry Experience</div>
                  </div>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Our leadership team brings decades of healthcare revenue cycle management expertise to every client engagement.
                </p>
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
              Ready to Boost Your Revenue?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Get a free revenue analysis and see how much more you could be collecting.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Request Free Revenue Analysis <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PhysiciansPage;
