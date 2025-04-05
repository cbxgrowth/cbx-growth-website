
import React from 'react';
import SearchCard from './sidebar/SearchCard';
import CategoriesCard from './sidebar/CategoriesCard';
import RecentPostsCard from './sidebar/RecentPostsCard';
import WordPressPanel from './sidebar/WordPressPanel';

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
      <SearchCard />
      <CategoriesCard categories={categories} />
      <RecentPostsCard recentPosts={recentPosts} />
      <WordPressPanel />
    </div>
  );
};

export default BlogSidebar;
