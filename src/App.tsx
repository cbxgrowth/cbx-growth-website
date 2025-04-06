
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/animation/SplashScreen';

// Lazy load pages for better performance
const Index = lazy(() => import('./pages/Index'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogAdmin = lazy(() => import('./pages/BlogAdmin'));
const Metodo = lazy(() => import('./pages/Metodo'));
const Cases = lazy(() => import('./pages/Cases'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Contato = lazy(() => import('./pages/Contato'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-space-dark">
        <p className="text-xl text-space-cyan">Carregando...</p>
      </div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
