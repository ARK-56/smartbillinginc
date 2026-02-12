import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Eye, FileCheck, DollarSign, HeartPulse } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Eye, title: "Transparent Billing", description: "Clear, itemized statements so you always know exactly what you're paying for. No hidden fees, no surprises." },
  { icon: ShieldCheck, title: "Insurance Eligibility Verification", description: "Real-time verification of your insurance coverage before your appointment, so you know your costs upfront." },
  { icon: CreditCard, title: "Easy Online Payments", description: "Pay your medical bills online with our secure payment portal. Multiple payment options and flexible plans available." },
  { icon: FileCheck, title: "No-Surprise Billing Guarantee", description: "We comply with the No Surprises Act, protecting you from unexpected out-of-network charges." },
  { icon: DollarSign, title: "Payment Plans", description: "Flexible payment arrangements that work with your budget. Interest-free options available for qualifying balances." },
  { icon: HeartPulse, title: "Patient Advocacy", description: "Our dedicated team helps you navigate insurance disputes, appeals, and billing questions with personalized support." },
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
    </>
  );
};

export default PatientsPage;
