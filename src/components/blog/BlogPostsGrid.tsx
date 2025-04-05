
import React from 'react';
import { BookOpen } from 'lucide-react';
import BlogPostCard from './BlogPostCard';

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

interface BlogPostsGridProps {
  posts: BlogPost[];
}

const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="col-span-2 text-center py-10">
          <BookOpen className="mx-auto mb-4 text-space-cyan/60" size={40} />
          <h3 className="text-xl text-white mb-2">Nenhum artigo encontrado</h3>
          <p className="text-space-light">Tente ajustar os filtros ou termos de busca</p>
        </div>
      )}
    </div>
  );
};

export default BlogPostsGrid;
