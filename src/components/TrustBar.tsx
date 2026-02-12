import { Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TrustBar = () => {
  const badges = [
    { icon: Shield, label: "HIPAA Compliant" },
    { icon: Award, label: "SOC2 Certified" },
    { icon: CheckCircle, label: "Epic Integrated" },
    { icon: CheckCircle, label: "Cerner Integrated" },
  ];

  return (
    <section className="py-10 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
