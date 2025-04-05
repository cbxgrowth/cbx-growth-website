
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-space-dark/60 border border-space-cyan/10 hover:border-space-cyan/40 transition-all duration-300 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <span className="absolute top-4 right-4 px-3 py-1 bg-space-cyan text-space-dark text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold text-white line-clamp-2 hover:text-space-cyan transition-colors">
            {post.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-xs text-space-light/70 mt-2">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{post.readTime} leitura</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-space-light text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter>
          <button className="text-space-cyan hover:text-space-cyan/80 font-medium transition-colors flex items-center text-sm">
            Ler mais <ArrowRight size={16} className="ml-1" />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;
