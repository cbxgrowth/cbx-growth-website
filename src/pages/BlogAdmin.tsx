
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';
import { FileText, Settings, Users, Clock, Plus, Upload, Search } from 'lucide-react';
import WordPressAdminPanel from '@/components/blog/WordPressAdminPanel';
import { Input } from '@/components/ui/input';

const BlogAdmin = () => {
  const { controls } = usePageInitialization();

  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-64 flex-shrink-0"
            >
              <div className="sticky top-32 bg-space-dark/60 border border-space-cyan/20 rounded-xl p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-space-cyan/20 flex items-center justify-center">
                    <img 
                      src="/WordPress-logotype-wmark-white.png" 
                      alt="WordPress Logo" 
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">WordPress</h3>
                    <p className="text-xs text-space-light/70">Administração do Blog</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-space-cyan/20 text-space-cyan">
                    <FileText size={16} />
                    <span>Posts</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-space-light hover:bg-space-dark/40 hover:text-space-cyan/80 transition-colors">
                    <Users size={16} />
                    <span>Usuários</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-space-light hover:bg-space-dark/40 hover:text-space-cyan/80 transition-colors">
                    <Upload size={16} />
                    <span>Mídia</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-space-light hover:bg-space-dark/40 hover:text-space-cyan/80 transition-colors">
                    <Clock size={16} />
                    <span>Programação</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-space-light hover:bg-space-dark/40 hover:text-space-cyan/80 transition-colors">
                    <Settings size={16} />
                    <span>Configurações</span>
                  </a>
                </div>
                
                <div className="pt-4 border-t border-space-cyan/10">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/90 transition-colors">
                    <Plus size={16} />
                    <span>Novo Post</span>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-grow"
            >
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">
                  Painel de <span className="text-space-cyan">Administração</span>
                </h1>
                
                <div className="relative w-64">
                  <Input
                    type="text"
                    placeholder="Buscar posts..."
                    className="pl-9 bg-space-dark/60 border-space-cyan/20 text-white"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-cyan/70" size={16} />
                </div>
              </div>
              
              <p className="text-space-light mb-8">
                Gerencie seus posts, agende publicações e veja estatísticas do seu blog.
              </p>
              
              <WordPressAdminPanel />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default BlogAdmin;
