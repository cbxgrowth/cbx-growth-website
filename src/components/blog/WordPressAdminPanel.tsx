
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Edit3, Clock, Eye, FileText, BarChart2, Settings, Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import aiService from '@/services/aiService';

const WordPressAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
  const [draftContent, setDraftContent] = useState('');
  const [publishDate, setPublishDate] = useState('');
  
  // Sample scheduled posts
  const scheduledPosts = [
    {
      id: 1,
      title: "SEO para E-commerce: Estratégias Avançadas para 2024",
      status: "scheduled",
      date: "2024-06-15T10:00:00",
      author: "Carlos Mendes"
    },
    {
      id: 2,
      title: "Guia de Growth Hacking para SaaS",
      status: "scheduled",
      date: "2024-06-22T14:30:00",
      author: "Ana Silva"
    },
    {
      id: 3,
      title: "Como Aproveitar o Marketing de Conteúdo",
      status: "scheduled",
      date: "2024-07-05T09:15:00",
      author: "Marina Santos"
    }
  ];
  
  // Sample draft posts
  const draftPosts = [
    {
      id: 4,
      title: "Novas Ferramentas de IA para Marketing em 2024",
      status: "draft",
      lastModified: "2024-05-29T15:42:00",
      author: "Felipe Ramos"
    },
    {
      id: 5,
      title: "Estratégias de Retenção de Clientes para E-commerce",
      status: "draft",
      lastModified: "2024-05-28T10:23:00",
      author: "Juliana Costa"
    }
  ];
  
  // Generate content with AI
  const generateContentWithAI = async () => {
    const prompt = "Escreva uma introdução para um artigo sobre Growth Hacking e estratégias de crescimento para startups em 2024.";
    
    try {
      setIsGeneratingContent(true);
      
      // In a real implementation, use AI service
      const response = await aiService.generateContent({ prompt });
      
      if (response.success) {
        setDraftContent(response.content);
        toast.success("Conteúdo gerado com sucesso!");
      } else {
        toast.error("Erro ao gerar conteúdo: " + (response.error || "Erro desconhecido"));
      }
    } catch (err) {
      console.error('Error generating content:', err);
      toast.error("Erro ao conectar com a API de IA");
    } finally {
      setIsGeneratingContent(false);
    }
  };
  
  // Schedule post
  const schedulePost = () => {
    if (!draftContent.trim() || !publishDate) {
      toast.error("Por favor, adicione conteúdo e uma data de publicação");
      return;
    }
    
    // In a real implementation, this would call the WordPress API
    toast.success("Post agendado com sucesso para " + new Date(publishDate).toLocaleString('pt-BR'));
    setDraftContent('');
    setPublishDate('');
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-space-dark/60 border border-space-cyan/20 rounded-xl overflow-hidden p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">WordPress Admin</h2>
        <p className="text-space-light">
          Gerencie seus posts e agende publicações com integrações de IA
        </p>
      </div>
      
      <Tabs defaultValue="posts" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="posts" className="data-[state=active]:bg-space-cyan/20">
            <FileText size={16} className="mr-2" />
            Posts
          </TabsTrigger>
          <TabsTrigger value="new" className="data-[state=active]:bg-space-cyan/20">
            <Edit3 size={16} className="mr-2" />
            Novo
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-space-cyan/20">
            <Clock size={16} className="mr-2" />
            Agendados
          </TabsTrigger>
          <TabsTrigger value="stats" className="data-[state=active]:bg-space-cyan/20">
            <BarChart2 size={16} className="mr-2" />
            Estatísticas
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">Rascunhos</h3>
              <button className="text-space-cyan hover:text-space-cyan/80 text-sm">
                Ver todos
              </button>
            </div>
            
            {draftPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-space-dark/40 rounded-lg p-4 border border-space-cyan/10 hover:border-space-cyan/30 transition-colors"
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-white">{post.title}</h4>
                  <span className="px-2 py-0.5 bg-space-cyan/10 text-space-cyan text-xs rounded">
                    Rascunho
                  </span>
                </div>
                <div className="flex items-center text-xs text-space-light/70 mt-2">
                  <Clock size={12} className="mr-1" />
                  <span>Modificado em {formatDate(post.lastModified)}</span>
                  <span className="mx-2">•</span>
                  <span>por {post.author}</span>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    Editar
                  </button>
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    Visualizar
                  </button>
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Título do post"
              className="bg-space-dark/60 border-space-cyan/20 text-white"
            />
            
            <Textarea 
              placeholder="Conteúdo do post"
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              className="min-h-[200px] bg-space-dark/60 border-space-cyan/20 text-white"
            />
            
            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={generateContentWithAI}
                disabled={isGeneratingContent}
                className="flex items-center justify-center px-4 py-2 bg-space-cyan/20 text-space-cyan rounded-md hover:bg-space-cyan/30 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  <path d="M12 8v8"/>
                  <path d="M8 12h8"/>
                </svg>
                {isGeneratingContent ? 'Gerando...' : 'Gerar com IA'}
              </button>
              
              <div className="flex items-center">
                <Input
                  type="datetime-local"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="bg-space-dark/60 border-space-cyan/20 text-white"
                />
              </div>
              
              <button 
                onClick={schedulePost}
                className="flex items-center justify-center px-4 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/90 transition-colors"
              >
                <Calendar size={16} className="mr-2" />
                Agendar Publicação
              </button>
            </div>
            
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-space-dark/70 text-space-light rounded-md hover:bg-space-dark/90 transition-colors">
                Salvar Rascunho
              </button>
              
              <button className="px-4 py-2 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/90 transition-colors">
                Publicar Agora
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="schedule">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">Posts Agendados</h3>
              <button className="text-space-cyan hover:text-space-cyan/80 text-sm">
                Ver todos
              </button>
            </div>
            
            {scheduledPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-space-dark/40 rounded-lg p-4 border border-space-cyan/10 hover:border-space-cyan/30 transition-colors"
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-white">{post.title}</h4>
                  <span className="px-2 py-0.5 bg-space-cyan/10 text-space-cyan text-xs rounded">
                    Agendado
                  </span>
                </div>
                <div className="flex items-center text-xs text-space-light/70 mt-2">
                  <Calendar size={12} className="mr-1" />
                  <span>Publicação: {formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>por {post.author}</span>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    Editar
                  </button>
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    <Eye size={12} className="mr-1 inline" />
                    Visualizar
                  </button>
                  <button className="px-2 py-1 bg-space-dark/70 text-space-light text-xs rounded hover:bg-space-cyan/20 hover:text-space-cyan transition-colors">
                    <Clock size={12} className="mr-1 inline" />
                    Reagendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stats">
          <div className="text-center py-12">
            <BarChart2 size={48} className="mx-auto mb-4 text-space-cyan/60" />
            <h3 className="text-xl font-medium text-white mb-2">
              Estatísticas do Blog
            </h3>
            <p className="text-space-light mb-6 max-w-md mx-auto">
              Acompanhe o desempenho dos seus artigos com métricas detalhadas de visualizações, engajamento e conversões.
            </p>
            <button className="px-6 py-2 bg-space-cyan/20 text-space-cyan rounded-md hover:bg-space-cyan/30 transition-colors">
              Ver Analytics Completo
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default WordPressAdminPanel;
