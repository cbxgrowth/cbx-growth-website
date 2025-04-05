
import React from 'react';
import { Calendar, Search, BookOpen, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

interface Category {
  name: string;
  value: string;
  count: number;
}

interface BlogSidebarProps {
  categories: Category[];
  recentPosts: BlogPost[];
}

const BlogSidebar = ({ categories, recentPosts }: BlogSidebarProps) => {
  return (
    <div className="space-y-8">
      {/* Search Card */}
      <Card className="bg-space-dark/60 border border-space-cyan/10">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center">
            <Search className="mr-2 text-space-cyan" size={18} />
            Pesquisar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar artigos..."
              className="pl-9 bg-space-dark/70 border-space-cyan/20"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-cyan/50" size={15} />
          </div>
        </CardContent>
      </Card>

      {/* Categories Card */}
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

      {/* Recent Posts Card */}
      <Card className="bg-space-dark/60 border border-space-cyan/10">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center">
            <BookOpen className="mr-2 text-space-cyan" size={18} />
            Artigos Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ x: 3 }}
                className="flex items-start space-x-3 py-2 border-b border-space-cyan/10 last:border-0"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white hover:text-space-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs text-space-light/70 mt-1">
                    <Calendar size={10} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* WordPress Integration Teaser */}
      <Card className="bg-space-dark/60 border border-space-cyan/20">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            Painel WordPress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-space-light mb-4">
            Acesse o painel WordPress para gerenciar seus artigos, agendar publicações e mais.
          </p>
          <a 
            href="/wp-admin" 
            target="_blank" 
            className="block w-full py-2 bg-space-cyan/20 hover:bg-space-cyan/30 text-space-cyan text-center rounded-md transition-colors"
          >
            Acessar WP Admin
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
