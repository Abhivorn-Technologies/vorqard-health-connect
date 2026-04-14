import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
