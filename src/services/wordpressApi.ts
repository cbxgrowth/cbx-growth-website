
// WordPress REST API integration
// This service provides methods to interact with the WordPress REST API

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  featured_image_url?: string;
  categories: number[];
  tags: number[];
  author: number;
  author_name?: string;
  category_names?: string[];
  reading_time?: string;
}

export interface WordPressCategory {
  id: number;
  count: number;
  name: string;
  slug: string;
}

export interface WordPressTag {
  id: number;
  count: number;
  name: string;
  slug: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  media_details: {
    sizes: {
      [key: string]: {
        source_url: string;
      };
    };
  };
}

class WordPressApi {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://seu-site.com.br/wp-json/wp/v2') {
    this.baseUrl = baseUrl;
  }
  
  // Helpers for request handling
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json() as T;
  }
  
  private estimateReadingTime(content: string): string {
    // Strip HTML tags
    const text = content.replace(/<\/?[^>]+(>|$)/g, "");
    // Count words (approximate)
    const words = text.split(/\s+/).length;
    // Assume average reading speed of 200 words per minute
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  }
  
  // POSTS
  
  // Get all posts with optional parameters
  async getPosts(params: Record<string, any> = {}): Promise<WordPressPost[]> {
    const queryParams = new URLSearchParams({
      _embed: 'true', // Include embedded resources
      per_page: '10',
      ...params
    }).toString();
    
    const response = await fetch(`${this.baseUrl}/posts?${queryParams}`);
    const posts = await this.handleResponse<WordPressPost[]>(response);
    
    // Process posts to include additional data
    return await Promise.all(posts.map(async (post) => {
      // Add reading time
      post.reading_time = this.estimateReadingTime(post.content.rendered);
      
      // Get featured image if available
      if (post.featured_media && post._embedded && post._embedded['wp:featuredmedia']) {
        post.featured_image_url = post._embedded['wp:featuredmedia'][0].source_url;
      }
      
      // Get category names
      if (post._embedded && post._embedded['wp:term']) {
        const categories = post._embedded['wp:term'][0];
        post.category_names = categories.map((cat: WordPressCategory) => cat.name);
      }
      
      // Get author name
      if (post._embedded && post._embedded['author']) {
        post.author_name = post._embedded['author'][0].name;
      }
      
      return post;
    }));
  }
  
  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    const posts = await this.getPosts({ slug });
    return posts.length > 0 ? posts[0] : null;
  }
  
  // Get a single post by ID
  async getPostById(id: number): Promise<WordPressPost> {
    const response = await fetch(`${this.baseUrl}/posts/${id}?_embed=true`);
    return this.handleResponse<WordPressPost>(response);
  }
  
  // CATEGORIES
  
  // Get all categories
  async getCategories(): Promise<WordPressCategory[]> {
    const response = await fetch(`${this.baseUrl}/categories`);
    return this.handleResponse<WordPressCategory[]>(response);
  }
  
  // Get posts by category slug
  async getPostsByCategory(categorySlug: string): Promise<WordPressPost[]> {
    // First get the category ID from slug
    const categories = await this.getCategories();
    const category = categories.find(cat => cat.slug === categorySlug);
    
    if (!category) {
      return [];
    }
    
    return this.getPosts({ categories: category.id });
  }
  
  // TAGS
  
  // Get all tags
  async getTags(): Promise<WordPressTag[]> {
    const response = await fetch(`${this.baseUrl}/tags`);
    return this.handleResponse<WordPressTag[]>(response);
  }
  
  // Search functionality
  async searchPosts(query: string): Promise<WordPressPost[]> {
    return this.getPosts({ search: query });
  }
}

// Export a singleton instance with the default base URL
const wpApi = new WordPressApi();
export default wpApi;

// Export the class for custom instances
export { WordPressApi };
