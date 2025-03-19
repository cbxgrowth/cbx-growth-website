
import React from 'react';
import { Satellite, Cpu, Rocket, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const TechItem = ({ title, description, icon, className, delay = 0 }: TechItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn(
      "relative group glass-panel p-6",
      className
    )}
  >
    <div className="tech-circle w-16 h-16 mb-4 group-hover:border-opacity-80 transition-all duration-300">
      <div className="absolute inset-0 bg-glow-circle opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      {icon}
    </div>
    <h3 className="text-space-pink text-lg font-medium mb-2 group-hover:text-space-cyan transition-colors duration-300">
      {title}
    </h3>
    <p className="text-sm text-space-light max-w-[260px] leading-relaxed">
      {description}
    </p>
    
    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-space-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-space-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.div>
);

const TechGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="service" className="py-24 relative overflow-hidden cyber-grid">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl text-space-cyan font-medium mb-2">SERVICES</h2>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">FUTURE TECHNOLOGY</h1>
          <p className="text-space-light max-w-xl mx-auto">
            Exploring the cutting edge of what's possible with next-generation digital solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="orbit-line w-full h-full animate-rotate-slow"></div>
            <div className="orbit-line w-[70%] h-[70%] top-[15%] left-[15%] animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>

            {/* Connector lines */}
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.6, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'bottom' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.6, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'top' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.6, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute top-1/2 left-0 w-[50%] h-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'right' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.6, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-1/2 right-0 w-[50%] h-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'left' }}
            ></motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="tech-circle w-60 h-60 bg-tech-circle border-2 border-space-cyan/30"
            >
              <div className="text-center p-4">
                <h2 className="text-2xl font-semibold mb-1 text-space-cyan">FUTURE</h2>
                <h2 className="text-2xl font-semibold mb-4 gradient-text">TECHNOLOGY</h2>
                <p className="text-xs text-space-light px-4 leading-relaxed">
                  Tonytm Images produce various kind of high-quality contents constantly updated 
                  and those are being distributed all around the world, after discussion about
                </p>
              </div>
              <div className="absolute inset-0 rounded-full bg-neon-glow-gradient animate-glow-pulse"></div>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <TechItem 
              title="SATELLITE" 
              description="Advanced satellite technology for global communication networks and remote sensing applications."
              icon={<Satellite className="text-space-cyan" size={24} />}
              className="lg:col-start-1 flex flex-col items-center text-center"
              delay={0.1}
            />
            <TechItem 
              title="PROCESSING" 
              description="Cutting-edge quantum computing and processing solutions for complex data analysis challenges."
              icon={<Cpu className="text-space-cyan" size={24} />}
              className="lg:col-start-2 flex flex-col items-center text-center"
              delay={0.2}
            />
            <TechItem 
              title="EXPLORATION" 
              description="Space exploration technologies designed to push the boundaries of what's possible beyond Earth."
              icon={<Rocket className="text-space-cyan" size={24} />}
              className="lg:col-start-3 flex flex-col items-center text-center"
              delay={0.3}
            />
            <TechItem 
              title="GLOBAL NETWORK" 
              description="Interconnected global network infrastructures enabling seamless communication and data sharing."
              icon={<Globe className="text-space-cyan" size={24} />}
              className="lg:col-start-4 flex flex-col items-center text-center"
              delay={0.4}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
