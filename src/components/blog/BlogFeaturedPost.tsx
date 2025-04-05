
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

interface BlogFeaturedPostProps {
  post: BlogPost;
}

const BlogFeaturedPost = ({ post }: BlogFeaturedPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="bg-space-dark/60 border border-space-cyan/20 rounded-xl overflow-hidden mb-12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-space-dark/80 via-transparent to-transparent md:bg-gradient-to-t md:from-space-dark/80 md:via-transparent md:to-transparent z-10"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            style={{ minHeight: '380px' }}
          />
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-space-cyan text-space-dark text-sm font-bold rounded-full">
            Destaque
          </div>
          <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-space-dark/80 text-space-cyan text-sm font-medium rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {post.title}
          </h2>
          
          <div className="flex items-center space-x-4 text-sm text-space-light/70 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime} leitura</span>
            </div>
          </div>
          
          <p className="text-space-light mb-6">
            {post.excerpt}
          </p>
          
          <button className="self-start flex items-center text-space-cyan hover:text-space-cyan/80 font-medium transition-colors">
            Ler artigo completo <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogFeaturedPost;
