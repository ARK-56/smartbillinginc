import { motion } from "framer-motion";
import { Brain, BarChart3, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Scrubbing Engine",
    description: "Detects 100+ coding errors before submission, dramatically reducing denial rates.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboard for cash-flow monitoring, performance metrics, and financial insights.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade security protecting all patient data and financial transactions.",
  },
  {
    icon: Zap,
    title: "API Interoperability",
    description: "Seamless integration with Epic, Cerner, and all major EHR/PM systems.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              The <span className="text-gradient-primary">'Smart'</span> Behind Smart Billing
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our proprietary technology stack combines artificial intelligence with industry-leading security to deliver unmatched accuracy and speed in medical billing.
            </p>

            <div className="grid gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-primary-foreground/70">Claims Processed Today</span>
                    <span className="text-xs text-teal-light font-semibold">↑ 12.5%</span>
                  </div>
                  <div className="text-3xl font-extrabold text-primary-foreground">2,847</div>
                  <div className="mt-4 flex gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 bg-sky/30 rounded-full overflow-hidden">
                        <div className="bg-gradient-primary rounded-full" style={{ height: `${h}px` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5">
                    <div className="text-2xl font-extrabold text-primary-foreground">98%</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">First-Pass Rate</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5">
                    <div className="text-2xl font-extrabold text-teal-light">$2.4M</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">Recovered This Month</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
