
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const { controls } = usePageInitialization();

  // Blog post data
  const blogPosts = [
    {
      title: "7 Estratégias de Growth Hacking para Startups em 2024",
      excerpt: "Descubra as táticas mais eficientes para acelerar o crescimento da sua startup com orçamento limitado.",
      date: "12 Mai 2024",
      category: "Growth Hacking",
      image: "/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png"
    },
    {
      title: "Como Implementar uma Cultura de Dados na sua Empresa",
      excerpt: "Um guia prático para transformar sua organização em uma empresa orientada por dados e melhorar a tomada de decisões.",
      date: "28 Abr 2024",
      category: "Data Science",
      image: "/lovable-uploads/6acaec1d-bea8-4509-9dc5-f6f5c21c402b.png"
    },
    {
      title: "O Futuro do Marketing Digital: Tendências para Ficar de Olho",
      excerpt: "Análise das principais tecnologias e estratégias que estão moldando o futuro do marketing digital.",
      date: "15 Abr 2024",
      category: "Marketing Digital",
      image: "/lovable-uploads/3766087c-2b2a-47bc-852d-d8587ce1cb55.png"
    },
    {
      title: "Case Study: Como a Empresa X Aumentou suas Conversões em 200%",
      excerpt: "Uma análise detalhada das estratégias implementadas e os resultados obtidos neste caso de sucesso.",
      date: "3 Abr 2024",
      category: "Case Study",
      image: "/lovable-uploads/8555eb6e-bfd8-4edb-a829-f9b8618e36ff.png"
    }
  ];

  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Blog <span className="text-space-cyan">CBX Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Conteúdo estratégico para impulsionar seus resultados
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-space-dark/50 rounded-lg overflow-hidden border border-space-cyan/10 hover:border-space-cyan/40 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-space-cyan text-space-dark text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-space-light/70 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h3>
                  
                  <p className="text-space-light mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-space-cyan hover:text-space-cyan/80 font-medium transition-colors">
                    Ler mais →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-2 bg-space-dark border border-space-cyan/30 text-space-cyan rounded-md hover:bg-space-cyan/10 transition-colors">
              Ver mais artigos
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Blog;
