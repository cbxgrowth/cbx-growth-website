
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EventCardProps {
  icon: React.ReactNode;
  date: string;
  title: string;
  description: string;
  delay: number;
  color?: string;
}

const EventCard = ({ icon, date, title, description, delay, color = "bg-space-cyan" }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative glass-panel p-6 backdrop-blur-xl border-space-cyan/30 mb-8 md:mb-10"
  >
    <div className={cn(
      "absolute -left-3 -top-3 w-10 h-10 rounded-full flex items-center justify-center",
      `${color}/90 backdrop-blur-xl border border-white/20`
    )}>
      {icon}
    </div>
    <div className="ml-2">
      <div className="text-space-cyan text-sm mb-1">{date}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-space-light text-sm">{description}</p>
    </div>
  </motion.div>
);

export default EventCard;
