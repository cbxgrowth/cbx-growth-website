
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, User, Share2, BookmarkPlus, MessageCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import BlogSidebar from '@/components/blog/BlogSidebar';
import wpApi, { WordPressPost } from '@/services/wordpressApi';
import aiService from '@/services/aiService';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { controls } = usePageInitialization();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  
  // Categories and recent posts (for sidebar)
  const [categories, setCategories] = useState<any[]>([]);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  
  // Load the post
  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        // In a real implementation, this would fetch from WordPress API
        // For demo purposes, we'll use a sample post
        const post = await wpApi.getPostBySlug(slug);
        
        if (post) {
          setPost(post);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPost();
  }, [slug]);
  
  // Load categories and recent posts for sidebar
  useEffect(() => {
    const loadSidebarData = async () => {
      try {
        // In a real implementation, fetch from WordPress API
        // For demo purposes, we'll use sample data
        const categories = [
          { name: 'Growth Hacking', value: 'growth-hacking', count: 5 },
          { name: 'Data Science', value: 'data-science', count: 3 },
          { name: 'Marketing Digital', value: 'marketing-digital', count: 8 },
          { name: 'Case Study', value: 'case-study', count: 4 },
          { name: 'Inteligência Artificial', value: 'inteligencia-artificial', count: 2 },
        ];
        
        const recentPosts = [
          {
            id: 1,
            title: "7 Estratégias de Growth Hacking para Startups em 2024",
            date: "12 Mai 2024",
            image: "/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png",
            category: "Growth Hacking"
          },
          {
            id: 2,
            title: "Como Implementar uma Cultura de Dados na sua Empresa",
            date: "28 Abr 2024",
            image: "/lovable-uploads/6acaec1d-bea8-4509-9dc5-f6f5c21c402b.png",
            category: "Data Science"
          },
          {
            id: 3,
            title: "O Futuro do Marketing Digital: Tendências para Ficar de Olho",
            date: "15 Abr 2024",
            image: "/lovable-uploads/3766087c-2b2a-47bc-852d-d8587ce1cb55.png",
            category: "Marketing Digital"
          },
        ];
        
        setCategories(categories);
        setRecentPosts(recentPosts);
      } catch (err) {
        console.error('Error loading sidebar data:', err);
      }
    };
    
    loadSidebarData();
  }, []);
  
  // Generate AI summary of the post
  const generateAiSummary = async () => {
    if (!post || !post.content.rendered) return;
    
    try {
      setIsSummaryLoading(true);
      
      // Strip HTML tags for better summary
      const textContent = post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      
      // In a real implementation, use AI service
      const response = await aiService.generateSummary({
        text: textContent,
        maxLength: 250
      });
      
      if (response.success) {
        setAiSummary(response.content);
      } else {
        toast.error("Erro ao gerar resumo com IA");
      }
    } catch (err) {
      console.error('Error generating AI summary:', err);
      toast.error("Não foi possível gerar o resumo com IA");
    } finally {
      setIsSummaryLoading(false);
    }
  };
  
  // Handle social sharing
  const handleShare = (platform: string) => {
    if (!post) return;
    
    const url = window.location.href;
    const title = post.title.rendered;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;
        break;
      default:
        // Copy link to clipboard
        navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência!");
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };
  
  // Sample post for demonstration
  const samplePost = {
    title: {
      rendered: "7 Estratégias de Growth Hacking para Startups em 2024"
    },
    content: {
      rendered: `<p>O growth hacking se tornou uma abordagem essencial para startups que buscam crescimento rápido com recursos limitados. Em 2024, com o cenário digital cada vez mais competitivo, é fundamental adotar estratégias inovadoras que gerem resultados expressivos.</p>
      
      <h2>1. Marketing Orientado por Dados</h2>
      <p>Utilize análise de dados aprofundada para identificar padrões de comportamento do usuário, otimizar funis de conversão e personalizar interações. Ferramentas como Google Analytics 4, Mixpanel e Amplitude podem fornecer insights valiosos sobre o comportamento do usuário.</p>
      
      <h2>2. Automação de Marketing com IA</h2>
      <p>Implemente soluções de automação alimentadas por inteligência artificial para personalizar a comunicação em escala. Chatbots, emails segmentados e recomendações personalizadas podem melhorar significativamente a experiência do usuário.</p>
      
      <h2>3. Conteúdo Interativo</h2>
      <p>Desenvolva conteúdo que engaje ativamente os usuários, como quizzes, calculadoras, pesquisas e ferramentas interativas. Esse tipo de conteúdo não apenas melhora o engajamento como também gera dados valiosos sobre seu público.</p>
      
      <h2>4. Estratégias de Virabilidade Incorporadas ao Produto</h2>
      <p>Projete seu produto com recursos que incentivem naturalmente o compartilhamento e a indicação. Exemplos incluem convites para colaboração, recursos exclusivos para membros indicados e incentivos para compartilhamento em redes sociais.</p>
      
      <h2>5. Otimização de Canais Emergentes</h2>
      <p>Explore plataformas emergentes como TikTok, Reddit ou comunidades nicho onde seu público-alvo esteja presente, mas a concorrência ainda seja menor. Ser pioneiro em novos canais pode resultar em custos de aquisição significativamente mais baixos.</p>
      
      <h2>6. Parcerias Estratégicas e Co-marketing</h2>
      <p>Estabeleça parcerias com empresas complementares para atingir públicos semelhantes e compartilhar recursos de marketing. Webinars conjuntos, e-books colaborativos e promoções cruzadas podem ampliar seu alcance sem aumentar o orçamento.</p>
      
      <h2>7. Testes A/B Contínuos e Iteração Rápida</h2>
      <p>Implemente uma cultura de experimentação constante, testando diferentes abordagens de messaging, design e funcionalidades. A chave é iterar rapidamente com base nos resultados, amplificando o que funciona e descartando o que não traz resultados.</p>
      
      <h2>Conclusão</h2>
      <p>O growth hacking em 2024 não se trata apenas de táticas isoladas, mas de uma abordagem sistemática que integra produto, marketing e dados. As startups que conseguirem implementar essas estratégias de forma coerente terão uma vantagem competitiva significativa no mercado.</p>`
    },
    date: "2024-05-12T10:30:00",
    author_name: "Ana Silva",
    category_names: ["Growth Hacking", "Startups", "Marketing Digital"],
    featured_image_url: "/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png",
    reading_time: "8 min"
  };
  
  // If no real post is loaded yet, use the sample post
  const displayPost = post || samplePost;
  
  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-8">
            <Link to="/blog" className="inline-flex items-center text-space-cyan hover:text-space-cyan/80 mb-6 transition-colors">
              <ChevronLeft size={16} className="mr-1" />
              Voltar para o blog
            </Link>
            
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full bg-space-dark/60" />
                <Skeleton className="h-6 w-3/4 bg-space-dark/60" />
                <Skeleton className="h-[300px] w-full bg-space-dark/60" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <h2 className="text-2xl text-white mb-4">Artigo não encontrado</h2>
                <p className="text-space-light mb-6">O artigo que você está procurando não existe ou foi removido.</p>
                <Link to="/blog" className="px-6 py-2 bg-space-cyan text-space-dark rounded-md hover:bg-space-cyan/90 transition-colors">
                  Voltar para o blog
                </Link>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  {displayPost.category_names?.map((category: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-space-cyan/20 text-space-cyan text-sm rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  {displayPost.title.rendered}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-space-light/70 mb-8">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{displayPost.author_name || 'Autor desconhecido'}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>
                      {new Date(displayPost.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{displayPost.reading_time} leitura</span>
                  </div>
                </div>
                
                {displayPost.featured_image_url && (
                  <div className="mb-8 rounded-xl overflow-hidden">
                    <img 
                      src={displayPost.featured_image_url} 
                      alt={displayPost.title.rendered} 
                      className="w-full h-auto"
                    />
                  </div>
                )}
                
                {/* AI Summary Section */}
                {aiSummary ? (
                  <div className="mb-8 p-6 bg-space-dark/60 border border-space-cyan/20 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-space-cyan">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                        <path d="M12 8v8"/>
                        <path d="M8 12h8"/>
                      </svg>
                      Resumo IA
                    </h3>
                    <p className="text-space-light italic">
                      {aiSummary}
                    </p>
                  </div>
                ) : (
                  <div className="mb-8">
                    <button 
                      onClick={generateAiSummary}
                      disabled={isSummaryLoading}
                      className="text-space-cyan hover:text-space-cyan/80 flex items-center text-sm font-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                        <path d="M12 8v8"/>
                        <path d="M8 12h8"/>
                      </svg>
                      {isSummaryLoading ? 'Gerando resumo...' : 'Gerar resumo com IA'}
                    </button>
                  </div>
                )}
                
                {/* Post content */}
                <div 
                  className="prose prose-invert prose-lg max-w-none prose-headings:text-space-cyan prose-a:text-space-cyan"
                  dangerouslySetInnerHTML={{ __html: displayPost.content.rendered }}
                />
                
                {/* Social sharing */}
                <div className="mt-12 pt-8 border-t border-space-cyan/10">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <span className="text-white mr-4">Compartilhar:</span>
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => handleShare('twitter')}
                          className="w-9 h-9 rounded-full bg-space-dark/70 flex items-center justify-center text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors"
                          aria-label="Compartilhar no Twitter"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('facebook')}
                          className="w-9 h-9 rounded-full bg-space-dark/70 flex items-center justify-center text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors"
                          aria-label="Compartilhar no Facebook"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')}
                          className="w-9 h-9 rounded-full bg-space-dark/70 flex items-center justify-center text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors"
                          aria-label="Compartilhar no LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('whatsapp')}
                          className="w-9 h-9 rounded-full bg-space-dark/70 flex items-center justify-center text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors"
                          aria-label="Compartilhar no WhatsApp"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('copy')}
                          className="w-9 h-9 rounded-full bg-space-dark/70 flex items-center justify-center text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors"
                          aria-label="Copiar link"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-space-dark/70 rounded-md text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                        <BookmarkPlus size={16} />
                        <span>Salvar</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-space-dark/70 rounded-md text-space-light hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                        <MessageCircle size={16} />
                        <span>Comentar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Related posts */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">Artigos Relacionados</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-space-dark/60 border border-space-cyan/10 rounded-lg overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-space-light/70 mb-2 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-space-cyan hover:text-space-cyan/80 text-sm"
                    >
                      Ler artigo →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default BlogPost;
