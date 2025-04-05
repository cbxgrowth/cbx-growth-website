
import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const SearchCard = () => {
  return (
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
  );
};

export default SearchCard;
