
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isInline?: boolean;
}

const BlogSearch = ({ searchQuery, setSearchQuery, isInline = false }: BlogSearchProps) => {
  if (isInline) {
    return (
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar artigos..."
          className="pl-9 bg-space-dark/70 border-space-cyan/20"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-cyan/50" size={15} />
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Pesquisar artigos..."
        className="pl-10 pr-4 py-3 bg-space-dark border border-space-cyan/20 rounded-lg text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-cyan/70" size={18} />
    </div>
  );
};

export default BlogSearch;
