
import React from 'react';
import BlogPostsGrid from './BlogPostsGrid';
import BlogPagination from './BlogPagination';
import BlogCategories from './BlogCategories';

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

interface Category {
  name: string;
  value: string;
  count: number;
}

interface BlogMainContentProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  currentPosts: BlogPost[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const BlogMainContent = ({
  categories,
  selectedCategory,
  onSelectCategory,
  currentPosts,
  currentPage,
  totalPages,
  setCurrentPage
}: BlogMainContentProps) => {
  return (
    <div className="md:col-span-2">
      {/* Categories */}
      <BlogCategories 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={onSelectCategory} 
      />
      
      {/* Blog Posts Grid */}
      <BlogPostsGrid posts={currentPosts} />
      
      {/* Pagination */}
      <BlogPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default BlogMainContent;
