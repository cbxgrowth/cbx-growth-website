
// AI Service for content enhancement and recommendations
// This service provides methods to interact with AI APIs for blog content

import { toast } from 'sonner';

interface AiContentRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
}

interface AiContentResponse {
  content: string;
  success: boolean;
  error?: string;
}

interface AiImageRequest {
  prompt: string;
  size?: string;
}

interface AiImageResponse {
  imageUrl: string;
  success: boolean;
  error?: string;
}

interface AiSummaryRequest {
  text: string;
  maxLength?: number;
}

class AiService {
  private apiKey: string | null = null;
  private apiUrl: string = 'https://api.openai.com/v1';
  
  // Set API key
  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('ai_api_key', key);
  }
  
  // Get API key from storage
  getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('ai_api_key');
    }
    return this.apiKey;
  }
  
  // Check if API key is set
  hasApiKey(): boolean {
    return !!this.getApiKey();
  }
  
  // Helper method to create headers with API key
  private getHeaders() {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('API key is not set');
    }
    
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
  }
  
  // Generate content using AI
  async generateContent(request: AiContentRequest): Promise<AiContentResponse> {
    try {
      if (!this.hasApiKey()) {
        return {
          content: '',
          success: false,
          error: 'API key is not set. Please configure your API key in the settings.'
        };
      }
      
      const response = await fetch(`${this.apiUrl}/chat/completions`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant specializing in digital marketing, growth hacking, and business topics.'
            },
            {
              role: 'user',
              content: request.prompt
            }
          ],
          max_tokens: request.maxTokens || 500,
          temperature: request.temperature || 0.7
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate content');
      }
      
      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        success: true
      };
      
    } catch (error) {
      console.error('AI Content Generation Error:', error);
      return {
        content: '',
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      };
    }
  }
  
  // Generate an image using AI
  async generateImage(request: AiImageRequest): Promise<AiImageResponse> {
    try {
      if (!this.hasApiKey()) {
        return {
          imageUrl: '',
          success: false,
          error: 'API key is not set. Please configure your API key in the settings.'
        };
      }
      
      const response = await fetch(`${this.apiUrl}/images/generations`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: request.prompt,
          n: 1,
          size: request.size || '1024x1024'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate image');
      }
      
      const data = await response.json();
      return {
        imageUrl: data.data[0].url,
        success: true
      };
      
    } catch (error) {
      console.error('AI Image Generation Error:', error);
      return {
        imageUrl: '',
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      };
    }
  }
  
  // Generate a summary of text
  async generateSummary(request: AiSummaryRequest): Promise<AiContentResponse> {
    const prompt = `Por favor, resuma o seguinte texto em um parágrafo de no máximo ${request.maxLength || 150} caracteres:\n\n${request.text}`;
    return this.generateContent({ prompt });
  }
  
  // Generate title suggestions based on content
  async generateTitleSuggestions(content: string): Promise<string[]> {
    const prompt = `Com base no seguinte conteúdo, sugira 5 títulos atrativos para um artigo de blog sobre marketing digital ou growth hacking. Formate cada título em uma nova linha precedida por um número e um ponto (ex: "1. Título aqui"):\n\n${content}`;
    
    const response = await this.generateContent({ prompt });
    
    if (!response.success) {
      toast.error("Erro ao gerar sugestões de título");
      return [];
    }
    
    // Parse the numbered list from the response
    const titles = response.content
      .split('\n')
      .filter(line => /^\d+\./.test(line))
      .map(line => line.replace(/^\d+\.\s*/, '').trim());
    
    return titles;
  }
  
  // Generate SEO metadata suggestions
  async generateSeoSuggestions(title: string, content: string): Promise<{ metaTitle: string, metaDescription: string, keywords: string[] }> {
    const prompt = `
    Com base no título "${title}" e no conteúdo a seguir, gere:
    1. Uma meta title SEO otimizada (máximo 60 caracteres)
    2. Uma meta description atrativa (máximo 160 caracteres)
    3. 5-7 palavras-chave relevantes para SEO
    
    Formate a resposta exatamente assim:
    Meta Title: [título aqui]
    Meta Description: [descrição aqui]
    Keywords: [palavra1, palavra2, palavra3, etc]
    
    Conteúdo:
    ${content.substring(0, 1500)}...
    `;
    
    const response = await this.generateContent({ prompt });
    
    if (!response.success) {
      toast.error("Erro ao gerar sugestões de SEO");
      return {
        metaTitle: '',
        metaDescription: '',
        keywords: []
      };
    }
    
    // Parse the response
    const lines = response.content.split('\n');
    const metaTitle = (lines.find(line => line.startsWith('Meta Title:')) || '')
      .replace('Meta Title:', '')
      .trim();
      
    const metaDescription = (lines.find(line => line.startsWith('Meta Description:')) || '')
      .replace('Meta Description:', '')
      .trim();
      
    const keywordsLine = (lines.find(line => line.startsWith('Keywords:')) || '')
      .replace('Keywords:', '')
      .trim();
      
    const keywords = keywordsLine
      .split(',')
      .map(k => k.trim())
      .filter(k => k.length > 0);
    
    return {
      metaTitle,
      metaDescription,
      keywords
    };
  }
}

// Export a singleton instance
const aiService = new AiService();
export default aiService;
