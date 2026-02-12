import { motion } from "framer-motion";
import { TrendingUp, Brain, BarChart3, Clock, FileCheck, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: TrendingUp, title: "Reduce Days in AR", description: "Our clients see an average 40% reduction in days in accounts receivable within the first 90 days of partnership." },
  { icon: Brain, title: "AI Claim Scrubber", description: "Proprietary AI engine detects 100+ coding errors before submission, achieving a 98% first-pass acceptance rate." },
  { icon: BarChart3, title: "Revenue Analytics", description: "Real-time dashboards showing before & after revenue charts, denial trends, and collection performance metrics." },
  { icon: Clock, title: "48-Hour Turnaround", description: "Claims processed and submitted within 48 hours of receipt. Faster submissions mean faster payments." },
  { icon: FileCheck, title: "Credentialing Support", description: "Full-service provider credentialing and enrollment to ensure maximum payer participation and reimbursement." },
  { icon: Zap, title: "Denial Management", description: "Proactive denial prevention and aggressive follow-up on denied claims to recover every dollar you've earned." },
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
    </>
  );
};

export default PhysiciansPage;
