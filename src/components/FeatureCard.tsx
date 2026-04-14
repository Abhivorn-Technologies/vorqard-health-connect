import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
    >
      <div className="mb-5 inline-flex rounded-xl gradient-primary p-3 text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
