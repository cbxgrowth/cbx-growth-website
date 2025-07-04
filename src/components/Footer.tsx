import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Serviços',
      links: [
        { name: 'Consultoria de Marketing', href: '#' },
        { name: 'Estratégias de Crescimento', href: '#' },
        { name: 'Otimização de SEO', href: '#' },
        { name: 'Gestão de Redes Sociais', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Cases de Sucesso', href: '/cases' },
        { name: 'Ebooks Gratuitos', href: '#' },
        { name: 'Webinars', href: '#' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { name: 'Fale Conosco', href: '/contato' },
        { name: 'Agende uma Demonstração', href: '#' },
        { name: 'Suporte Técnico', href: '#' },
        { name: 'Dúvidas Frequentes', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'FaFacebook', href: '#' },
    { icon: 'FaTwitter', href: '#' },
    { icon: 'FaInstagram', href: '#' },
    { icon: 'FaLinkedin', href: '#' },
  ];
  
  return (
    <footer className="bg-space-dark text-space-light pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Logo size="lg" />
            <p className="mt-4 text-sm text-space-light/80 max-w-xs">
              Transformando negócios através de estratégias inovadoras e soluções de crescimento personalizadas.
            </p>
          </div>
          
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              {column.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.href}
                  className="text-space-light/80 hover:text-space-cyan transition-colors block py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-space-light/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-space-light/60">
            &copy; {new Date().getFullYear()} CBX Growth. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-space-light/60 hover:text-space-cyan transition-colors"
                aria-label={`Follow us on ${social.icon}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
