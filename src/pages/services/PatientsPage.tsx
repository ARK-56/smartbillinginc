import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CreditCard, ShieldCheck, Eye, FileCheck, DollarSign, HeartPulse, CheckCircle, ArrowRight, Phone, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Eye, title: "Transparent Billing", description: "Clear, itemized statements so you always know exactly what you're paying for. No hidden fees, no surprises." },
  { icon: ShieldCheck, title: "Insurance Eligibility Verification", description: "Real-time verification of your insurance coverage before your appointment, so you know your costs upfront." },
  { icon: CreditCard, title: "Easy Online Payments", description: "Pay your medical bills online with our secure payment portal. Multiple payment options and flexible plans available." },
  { icon: FileCheck, title: "No-Surprise Billing Guarantee", description: "We comply with the No Surprises Act, protecting you from unexpected out-of-network charges." },
  { icon: DollarSign, title: "Payment Plans", description: "Flexible payment arrangements that work with your budget. Interest-free options available for qualifying balances." },
  { icon: HeartPulse, title: "Patient Advocacy", description: "Our dedicated team helps you navigate insurance disputes, appeals, and billing questions with personalized support." },
];

const processSteps = [
  { step: "01", title: "Receive Your Statement", description: "Get a clear, itemized bill with easy-to-understand charges and insurance adjustments." },
  { step: "02", title: "Verify Coverage", description: "We verify your insurance eligibility and apply all available benefits before billing you." },
  { step: "03", title: "Choose How to Pay", description: "Pay online, by phone, or set up a flexible payment plan that fits your budget." },
  { step: "04", title: "Get Support Anytime", description: "Our patient advocates are available to answer questions and resolve any billing concerns." },
];

const benefits = [
  "No surprise bills — ever",
  "24/7 online payment portal",
  "Interest-free payment plans",
  "Dedicated billing advocate",
  "Insurance dispute assistance",
  "Real-time eligibility checks",
  "Multilingual support available",
  "HIPAA-compliant communications",
];

const PatientsPage = () => {
  return (
    <>
      <PageHero
        badge="Patient Solutions"
        title="Billing Clarity &"
        highlight="Peace of Mind"
        description="Transparent billing, insurance eligibility verification, easy online payments, and our No-Surprise Billing Guarantee — because healthcare billing shouldn't be stressful."
        ctaLabel="Verify Your Coverage"
        ctaHref="/contact"
      />

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient-First Billing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We believe patients deserve the same transparency and technology-driven experience they expect everywhere else.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Simple, Transparent Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From receiving your statement to final payment, we make every step clear and easy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-7 h-full">
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

      {/* Benefits + Support */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Patient Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Why Patients <span className="text-gradient-primary">Trust Us</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We're committed to making healthcare billing as stress-free as possible. Here's what you get when your provider partners with Smart Billing.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-hero rounded-3xl p-8 lg:p-10"
            >
              <h3 className="text-xl font-bold text-primary-foreground mb-6">Need Help? We're Here.</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground">Call Us</div>
                    <p className="text-primary-foreground/60 text-sm">Mon–Fri 8AM–6PM EST</p>
                    <a href="tel:+18005551234" className="text-sky-light font-medium text-sm">(800) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground">Live Chat</div>
                    <p className="text-primary-foreground/60 text-sm">Available 24/7 for quick questions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground">Response Time</div>
                    <p className="text-primary-foreground/60 text-sm">All inquiries answered within 24 hours</p>
                  </div>
                </div>
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
              Have a Billing Question?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Our patient support team is ready to help you understand your bill and explore payment options.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Contact Patient Support <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PatientsPage;
