
import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

interface RecentPostsCardProps {
  recentPosts: BlogPost[];
}

const RecentPostsCard = ({ recentPosts }: RecentPostsCardProps) => {
  return (
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
  );
};

export default RecentPostsCard;
