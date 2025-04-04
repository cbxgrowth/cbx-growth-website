
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import GradientButton from './ui/GradientButton';
import { CheckCircle2, Clock, Rocket, Send, Star } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome precisa ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email corporativo inválido' })
    .refine(email => email.includes('@') && !email.includes('@gmail.com') && !email.includes('@hotmail.com') && !email.includes('@outlook.com'), {
      message: 'Por favor, use seu email corporativo'
    }),
  whatsapp: z.string().min(10, { message: 'Número de WhatsApp inválido' }),
  company: z.string().min(2, { message: 'Nome da empresa é obrigatório' }),
  segment: z.string().min(1, { message: 'Selecione um segmento' }),
  salesPeople: z.string().min(1, { message: 'Informe quantos vendedores possui' }),
  revenue: z.string().min(1, { message: 'Selecione o faturamento médio' }),
  objectives: z.string().min(10, { message: 'Descreva seus objetivos em pelo menos 10 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

const LeadCaptureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      segment: '',
      salesPeople: '',
      revenue: '',
      objectives: '',
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast.success('Formulário enviado com sucesso!', {
        description: 'Em breve, nossa equipe entrará em contato com você.',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-space-dark">
      <div className="absolute inset-0 bg-space-mesh opacity-30"></div>
      
      {/* Animated effects */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-space-cyan/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-space-gold/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full">
            <h2 className="text-sm font-medium text-space-cyan">FORMULÁRIO DE CONTATO</h2>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-space-cyan via-white to-space-cyan">
            Transforme Seu Negócio
          </h2>
          
          <p className="text-space-light max-w-2xl mx-auto">
            Preencha o formulário abaixo para iniciar sua jornada de crescimento exponencial.
            Nossa equipe irá analisar suas informações e entrar em contato para uma conversa estratégica.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-space-blue/20 backdrop-blur-md rounded-2xl border border-space-cyan/10 p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Qual seu nome?</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field} 
                            className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Qual seu email corporativo?</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seuemail@empresa.com" 
                            {...field} 
                            className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Qual seu WhatsApp?</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(00) 00000-0000" 
                            {...field} 
                            className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Qual o nome da sua empresa?</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nome da sua empresa" 
                            {...field} 
                            className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="segment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Qual o segmento da empresa?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white">
                              <SelectValue placeholder="Selecione o segmento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-space-dark border-space-cyan/30">
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS / Tecnologia</SelectItem>
                            <SelectItem value="servicos">Serviços</SelectItem>
                            <SelectItem value="saude">Saúde</SelectItem>
                            <SelectItem value="educacao">Educação</SelectItem>
                            <SelectItem value="varejo">Varejo</SelectItem>
                            <SelectItem value="industria">Indústria</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="salesPeople"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-space-light">Quantos vendedores possui?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white">
                              <SelectValue placeholder="Número de vendedores" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-space-dark border-space-cyan/30">
                            <SelectItem value="0">Nenhum vendedor</SelectItem>
                            <SelectItem value="1-5">1 a 5 vendedores</SelectItem>
                            <SelectItem value="6-15">6 a 15 vendedores</SelectItem>
                            <SelectItem value="16-30">16 a 30 vendedores</SelectItem>
                            <SelectItem value="31+">Mais de 30 vendedores</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-space-light">Qual o faturamento médio mensal?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white">
                            <SelectValue placeholder="Selecione o faturamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-space-dark border-space-cyan/30">
                          <SelectItem value="ate-10k">Até R$ 10.000/mês</SelectItem>
                          <SelectItem value="10k-50k">R$ 10.000 a R$ 50.000/mês</SelectItem>
                          <SelectItem value="50k-100k">R$ 50.000 a R$ 100.000/mês</SelectItem>
                          <SelectItem value="100k-500k">R$ 100.000 a R$ 500.000/mês</SelectItem>
                          <SelectItem value="500k-1m">R$ 500.000 a R$ 1 milhão/mês</SelectItem>
                          <SelectItem value="1m+">Acima de R$ 1 milhão/mês</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="objectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-space-light">Quais objetivos pretende alcançar conosco?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva seus principais objetivos..." 
                          {...field} 
                          rows={4}
                          className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <GradientButton 
                  type="submit" 
                  className="w-full mt-6 py-6 group"
                  disabled={isSubmitting}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Enviar Formulário</span>
                      </>
                    )}
                  </div>
                </GradientButton>
              </form>
            </Form>
          </motion.div>
          
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-space-blue/20 backdrop-blur-md rounded-2xl border border-space-cyan/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-space-cyan flex items-center gap-2">
                <Star className="text-space-gold" /> 
                Metodologia CBX
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Rocket className="text-space-cyan" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Análise Completa</h4>
                    <p className="text-space-light text-sm">
                      Analisamos seu negócio, concorrência e mercado para identificar oportunidades de crescimento e áreas de melhoria.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Star className="text-space-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Estratégia Personalizada</h4>
                    <p className="text-space-light text-sm">
                      Desenvolvemos uma estratégia sob medida para seus objetivos, considerando seu orçamento e prazo.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-space-cyan" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Implementação Ágil</h4>
                    <p className="text-space-light text-sm">
                      Implementamos as estratégias com agilidade, ajustando conforme necessário para garantir resultados.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Clock className="text-space-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Monitoramento Contínuo</h4>
                    <p className="text-space-light text-sm">
                      Acompanhamos os resultados em tempo real, otimizando constantemente para maximizar o ROI.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-space-blue/20 backdrop-blur-md rounded-2xl border border-space-cyan/10 p-8">
              <h3 className="text-2xl font-bold mb-4 text-space-cyan">Depoimentos</h3>
              
              <div className="space-y-6">
                <div className="bg-space-blue/30 p-4 rounded-lg">
                  <p className="text-space-light text-sm italic mb-3">
                    "Desde que começamos a trabalhar com a CBX Growth, nosso negócio cresceu mais de 200% em apenas 6 meses. A equipe é extremamente profissional e comprometida com resultados."
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">Ana Clara</p>
                    <p className="text-space-cyan text-xs">CEO, TechSolutions</p>
                  </div>
                </div>
                
                <div className="bg-space-blue/30 p-4 rounded-lg">
                  <p className="text-space-light text-sm italic mb-3">
                    "A metodologia da CBX Growth transformou completamente nossa abordagem de marketing. Os resultados superaram todas as nossas expectativas."
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">Marcelo Santos</p>
                    <p className="text-space-cyan text-xs">Diretor, Innova Inc</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
