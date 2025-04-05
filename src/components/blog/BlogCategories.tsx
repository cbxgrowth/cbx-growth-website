
import React from 'react';
import { Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  value: string;
  count: number;
}

interface BlogCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const BlogCategories = ({ categories, selectedCategory, onSelectCategory }: BlogCategoriesProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-3"
    >
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={`flex items-center px-4 py-2 rounded-full text-sm ${
            selectedCategory === category.value
              ? 'bg-space-cyan text-space-dark font-medium'
              : 'bg-space-dark/70 text-space-light border border-space-cyan/20 hover:border-space-cyan/50'
          } transition-all duration-300`}
        >
          {category.name === 'Todos' ? null : <Tag size={12} className={`mr-1 ${selectedCategory === category.value ? 'text-space-dark' : 'text-space-cyan'}`} />}
          {category.name} 
          <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
            selectedCategory === category.value
              ? 'bg-space-dark/40 text-space-cyan'
              : 'bg-space-cyan/10 text-space-cyan'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </motion.div>
  );
};

export default BlogCategories;
