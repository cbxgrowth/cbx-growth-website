
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigation = [
    { name: 'INÍCIO', href: '/' },
    { name: 'MÉTODO', href: '/metodo' },
    { name: 'CASES', href: '/cases' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTATO', href: '/contato' },
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

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-space-dark/90 backdrop-blur-md py-3 shadow-lg' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="text-xl font-bold text-white flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center">
            <div className="mr-2 w-6 h-6 bg-space-blue/30 rounded-full border border-space-cyan/50 flex items-center justify-center">
              <Star className="w-3 h-3 text-space-cyan" />
            </div>
            <span className="text-space-cyan mr-1">CBX</span> Growth
            <span className="ml-1 w-2 h-2 rounded-full bg-space-cyan animate-pulse block"></span>
          </Link>
        </motion.div>

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
                      <motion.div
                        key={item.name}
                        className="w-full text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link 
                          to={item.href}
                          className="block py-3 text-space-light hover:text-space-cyan transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                      className="mt-4 px-6 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/80 transition-colors"
                    >
                      Iniciar conversa
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div 
            className="flex space-x-6 items-center mx-auto md:mx-0"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item, index) => (
              <motion.div 
                key={item.name}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                custom={index}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={item.href} 
                  className="nav-link text-space-light hover:text-space-cyan transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/80 transition-colors"
            >
              Iniciar conversa
            </motion.button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
