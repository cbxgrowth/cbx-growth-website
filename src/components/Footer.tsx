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
    <footer className="bg-space-dark text-space-light pt-16 md:pt-24 pb-8 md:pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-1">
            <Logo size="lg" />
            <p className="mt-4 md:mt-6 text-sm md:text-base text-space-light/80 max-w-xs leading-relaxed">
              Transformando negócios através de estratégias inovadoras e soluções de crescimento personalizadas.
            </p>
          </div>
          
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">{column.title}</h3>
              {column.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.href}
                  className="text-sm md:text-base text-space-light/80 hover:text-space-cyan transition-colors block py-1.5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
          
        </div>
        
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-space-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-space-light/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} CBX Growth. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4 mt-2 md:mt-0">
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
