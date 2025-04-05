
import React from 'react';
import { motion } from 'framer-motion';
import BlogSearch from './BlogSearch';

interface BlogHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogHeader = ({ searchQuery, setSearchQuery }: BlogHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
        Blog <span className="text-space-cyan">CBX Growth</span>
      </h1>
      <p className="text-lg md:text-xl text-space-light mb-8">
        Conteúdo estratégico para impulsionar seus resultados
      </p>
      
      <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </motion.div>
  );
};

export default BlogHeader;
