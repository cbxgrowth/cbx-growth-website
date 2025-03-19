
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigation = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CAMPAIGN', href: '#campaign' },
    { name: 'SERVICE', href: '#service' },
    { name: 'PR CENTER', href: '#pr-center' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-space-dark/90 backdrop-blur-md py-3 shadow-lg' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.a 
          href="#" 
          className="text-xl font-bold text-white flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-space-cyan mr-1">CBX</span> Growth
          <span className="ml-1 w-2 h-2 rounded-full bg-space-cyan animate-pulse block"></span>
        </motion.a>

        {isMobile ? (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none relative z-50 mt-2 md:mt-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full bg-space-dark/95 backdrop-blur-md shadow-lg py-4 border-t border-space-cyan/20"
                >
                  <div className="container mx-auto px-6 flex flex-col items-center">
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="block py-3 text-space-light hover:text-space-cyan transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                      className="mt-4 px-6 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/80 transition-colors"
                    >
                      INSCREVA-SE
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div 
            className="flex space-x-6 items-center mx-auto md:mx-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navigation.map((item, index) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
              className="ml-4 px-6 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/80 transition-colors"
            >
              INSCREVA-SE
            </motion.button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
