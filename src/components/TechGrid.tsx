
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
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={cn(
      "relative group",
      className
    )}
  >
    <div className="tech-circle w-16 h-16 mb-4 group-hover:border-opacity-60 transition-all duration-300">
      <div className="absolute inset-0 bg-glow-circle opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      {icon}
    </div>
    <h3 className="text-space-pink text-lg font-medium mb-2 group-hover:text-space-cyan transition-colors duration-300">TECHNOLOGY</h3>
    <p className="text-sm text-space-light max-w-[200px]">
      {description}
    </p>
  </motion.div>
);

const TechGrid = () => {
  return (
    <section id="service" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="orbit-line w-full h-full animate-rotate-slow"></div>
            <div className="orbit-line w-[70%] h-[70%] top-[15%] left-[15%] animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>

            {/* Connector lines */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'bottom' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'top' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute top-1/2 left-0 w-[50%] h-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'right' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
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
              transition={{ duration: 0.8 }}
              className="tech-circle w-60 h-60 bg-tech-circle border-2"
            >
              <div className="text-center p-4">
                <h2 className="text-2xl font-semibold mb-1">FUTURE</h2>
                <h2 className="text-2xl font-semibold mb-4">TECHNOLOGY</h2>
                <p className="text-xs text-space-light px-4">
                  Tonytm Images produce various kind of high-quality contents constantly updated 
                  and those are being distributed all around the world, after discussion about
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            <TechItem 
              title="TECHNOLOGY" 
              description="Tonytm Images produce various kind of high-quality contents constantly updated and those are being distributed all around the world."
              icon={<Satellite className="text-space-cyan" size={24} />}
              className="lg:col-start-1 flex flex-col items-center text-center"
              delay={0.1}
            />
            <TechItem 
              title="TECHNOLOGY" 
              description="Tonytm Images produce various kind of high-quality contents constantly updated and those are being distributed all around the world."
              icon={<Cpu className="text-space-cyan" size={24} />}
              className="lg:col-start-2 lg:col-end-3 flex flex-col items-center text-center"
              delay={0.2}
            />
            <TechItem 
              title="TECHNOLOGY" 
              description="Tonytm Images produce various kind of high-quality contents constantly updated and those are being distributed all around the world."
              icon={<Rocket className="text-space-cyan" size={24} />}
              className="lg:col-start-3 lg:col-end-4 flex flex-col items-center text-center"
              delay={0.3}
            />
            <TechItem 
              title="TECHNOLOGY" 
              description="Tonytm Images produce various kind of high-quality contents constantly updated and those are being distributed all around the world."
              icon={<Globe className="text-space-cyan" size={24} />}
              className="lg:col-start-4 flex flex-col items-center text-center"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
