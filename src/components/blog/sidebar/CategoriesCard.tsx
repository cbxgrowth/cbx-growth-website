
import React from 'react';
import { Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  name: string;
  value: string;
  count: number;
}

interface CategoriesCardProps {
  categories: Category[];
}

const CategoriesCard = ({ categories }: CategoriesCardProps) => {
  return (
    <Card className="bg-space-dark/60 border border-space-cyan/10">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center">
          <Tag className="mr-2 text-space-cyan" size={18} />
          Categorias
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.filter(cat => cat.value !== 'all').map((category) => (
            <motion.li 
              key={category.value}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between py-2 border-b border-space-cyan/10 last:border-0"
            >
              <a href="#" className="text-space-light hover:text-space-cyan transition-colors">
                {category.name}
              </a>
              <span className="px-2 py-0.5 bg-space-dark text-space-cyan text-xs rounded">
                {category.count}
              </span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
