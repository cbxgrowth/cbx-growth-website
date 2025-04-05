import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogMainContent from '@/components/blog/BlogMainContent';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogFeaturedPost from '@/components/blog/BlogFeaturedPost';
import BlogNewsletter from '@/components/blog/BlogNewsletter';

const Blog = () => {
  const { controls } = usePageInitialization();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "7 Estratégias de Growth Hacking para Startups em 2024",
      excerpt: "Descubra as táticas mais eficientes para acelerar o crescimento da sua startup com orçamento limitado.",
      date: "12 Mai 2024",
      category: "Growth Hacking",
      readTime: "8 min",
      image: "/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png",
      featured: true
    },
    {
      id: 2,
      title: "Como Implementar uma Cultura de Dados na sua Empresa",
      excerpt: "Um guia prático para transformar sua organização em uma empresa orientada por dados e melhorar a tomada de decisões.",
      date: "28 Abr 2024",
      category: "Data Science",
      readTime: "12 min",
      image: "/lovable-uploads/6acaec1d-bea8-4509-9dc5-f6f5c21c402b.png",
      featured: false
    },
    {
      id: 3,
      title: "O Futuro do Marketing Digital: Tendências para Ficar de Olho",
      excerpt: "Análise das principais tecnologias e estratégias que estão moldando o futuro do marketing digital.",
      date: "15 Abr 2024",
      category: "Marketing Digital",
      readTime: "6 min",
      image: "/lovable-uploads/3766087c-2b2a-47bc-852d-d8587ce1cb55.png",
      featured: false
    },
    {
      id: 4,
      title: "Case Study: Como a Empresa X Aumentou suas Conversões em 200%",
      excerpt: "Uma análise detalhada das estratégias implementadas e os resultados obtidos neste caso de sucesso.",
      date: "3 Abr 2024",
      category: "Case Study",
      readTime: "10 min",
      image: "/lovable-uploads/8555eb6e-bfd8-4edb-a829-f9b8618e36ff.png",
      featured: false
    },
    {
      id: 5,
      title: "Inteligência Artificial no Marketing: Aplicações Práticas",
      excerpt: "Como utilizar a IA para otimizar campanhas, personalizar experiências e aumentar o ROI do marketing.",
      date: "20 Mar 2024",
      category: "Inteligência Artificial",
      readTime: "9 min",
      image: "/lovable-uploads/57a08f11-3954-4943-bed2-7bb9805bad60.png",
      featured: false
    },
    {
      id: 6,
      title: "SEO para E-commerce: Estratégias Avançadas para 2024",
      excerpt: "Técnicas de otimização para mecanismos de busca específicas para lojas online e marketplaces.",
      date: "10 Mar 2024",
      category: "SEO",
      readTime: "11 min",
      image: "/lovable-uploads/51a211a0-96b2-404e-abcb-f26b0c683071.png",
      featured: false
    },
    {
      id: 7,
      title: "Como Construir uma Presença Digital Autêntica para sua Marca",
      excerpt: "Estratégias para desenvolver uma identidade digital consistente e que ressoe com seu público-alvo.",
      date: "25 Fev 2024",
      category: "Branding",
      readTime: "7 min",
      image: "/lovable-uploads/49a44b66-20bf-4cae-82a7-48164331df1d.png",
      featured: false
    },
    {
      id: 8,
      title: "Análise de Métricas: Como Interpretar os Dados do seu Website",
      excerpt: "Um guia completo sobre quais métricas acompanhar e como utilizá-las para tomar decisões estratégicas.",
      date: "12 Fev 2024",
      category: "Data Science",
      readTime: "13 min",
      image: "/lovable-uploads/5f32dd47-b02f-4a2f-aa54-18e08a899edd.png",
      featured: false
    }
  ];

  const categories = [
    { name: 'Todos', value: 'all', count: blogPosts.length },
    { name: 'Growth Hacking', value: 'Growth Hacking', count: blogPosts.filter(post => post.category === 'Growth Hacking').length },
    { name: 'Data Science', value: 'Data Science', count: blogPosts.filter(post => post.category === 'Data Science').length },
    { name: 'Marketing Digital', value: 'Marketing Digital', count: blogPosts.filter(post => post.category === 'Marketing Digital').length },
    { name: 'Case Study', value: 'Case Study', count: blogPosts.filter(post => post.category === 'Case Study').length },
    { name: 'Inteligência Artificial', value: 'Inteligência Artificial', count: blogPosts.filter(post => post.category === 'Inteligência Artificial').length },
    { name: 'SEO', value: 'SEO', count: blogPosts.filter(post => post.category === 'SEO').length },
    { name: 'Branding', value: 'Branding', count: blogPosts.filter(post => post.category === 'Branding').length }
  ];

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20 bg-space-dark/50">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header with search */}
          <BlogHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Featured Post Section */}
          {featuredPost && searchQuery === '' && selectedCategory === 'all' && currentPage === 1 && (
            <BlogFeaturedPost post={featuredPost} />
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Main Content - Posts, Categories, Pagination */}
            <BlogMainContent 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              currentPosts={currentPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
            
            {/* Sidebar */}
            <BlogSidebar 
              categories={categories} 
              recentPosts={blogPosts.slice(0, 4)} 
            />
          </div>

          {/* Newsletter Subscription */}
          <BlogNewsletter />
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Blog;
