
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, Mail, Phone, Building, Briefcase, Users, DollarSign, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GradientButton from './ui/GradientButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }).refine(email => email.includes('@') && !email.includes('@gmail.com') && !email.includes('@hotmail.com') && !email.includes('@outlook.com'), {
    message: 'Por favor, use seu email corporativo'
  }),
  whatsapp: z.string().min(11, { message: 'WhatsApp inválido, inclua DDD' }),
  company: z.string().min(2, { message: 'Nome da empresa é obrigatório' }),
  segment: z.string().min(1, { message: 'Selecione um segmento' }),
  salespeople: z.string().min(1, { message: 'Selecione uma opção' }),
  revenue: z.string().min(1, { message: 'Selecione uma opção' }),
  goals: z.string().min(10, { message: 'Compartilhe seus objetivos (mín. 10 caracteres)' }),
});

type FormValues = z.infer<typeof formSchema>;

const LeadCaptureForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      segment: '',
      salespeople: '',
      revenue: '',
      goals: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend or CRM
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Um especialista CBX entrará em contato em breve.",
      duration: 5000,
    });
    
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="lead-form" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full">
            <h2 className="text-sm font-medium text-space-cyan">TRANSFORMAÇÃO DIGITAL</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ACELERE SEUS <span className="text-space-cyan">RESULTADOS</span></h1>
          <p className="text-space-light max-w-2xl mx-auto">
            Preencha o formulário abaixo e descubra como nossa metodologia pode impulsionar seu negócio com estratégias de growth personalizadas.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div 
            className="w-full lg:w-1/2 cosmic-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-space-cyan/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-space-cyan/5 rounded-full filter blur-3xl"></div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4 text-space-cyan" />
                          Nome completo
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
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
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-space-cyan" />
                          Email corporativo
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="seu.email@empresa.com" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Utilizamos apenas para comunicação profissional
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-space-cyan" />
                          WhatsApp
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
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
                        <FormLabel className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-space-cyan" />
                          Nome da empresa
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="segment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-space-cyan" />
                          Segmento da empresa
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um segmento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS / Software</SelectItem>
                            <SelectItem value="servicos">Prestação de Serviços</SelectItem>
                            <SelectItem value="industria">Indústria</SelectItem>
                            <SelectItem value="varejo">Varejo</SelectItem>
                            <SelectItem value="b2b">B2B</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="salespeople"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-space-cyan" />
                          Quantidade de vendedores
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-5">1 a 5</SelectItem>
                            <SelectItem value="6-15">6 a 15</SelectItem>
                            <SelectItem value="16-30">16 a 30</SelectItem>
                            <SelectItem value="31-50">31 a 50</SelectItem>
                            <SelectItem value="51+">Mais de 50</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-space-cyan" />
                          Faturamento médio mensal
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ate-50k">Até R$ 50 mil</SelectItem>
                            <SelectItem value="50k-200k">R$ 50 mil a R$ 200 mil</SelectItem>
                            <SelectItem value="200k-500k">R$ 200 mil a R$ 500 mil</SelectItem>
                            <SelectItem value="500k-1M">R$ 500 mil a R$ 1 milhão</SelectItem>
                            <SelectItem value="1M+">Acima de R$ 1 milhão</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-space-cyan" />
                        Objetivos que pretende alcançar conosco
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Compartilhe seus principais desafios e objetivos de negócio" 
                          {...field} 
                          className="h-20" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <GradientButton type="submit" className="w-full md:w-auto md:px-12 group">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Solicitar contato de especialista
                    </span>
                  </GradientButton>
                  
                  <p className="text-xs text-space-light mt-4">
                    Ao enviar o formulário, você concorda com nossa política de privacidade e 
                    permite o contato de um especialista para auxiliá-lo com sua estratégia.
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-space-cyan mb-6">Por que contar com a CBX?</h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <div className="tech-circle w-12 h-12 min-w-12 flex items-center justify-center">
                    <span className="text-space-cyan text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Metodologia exclusiva</h3>
                    <p className="text-space-light">Nossa abordagem de Growth foi desenvolvida especificamente para o mercado brasileiro.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <div className="tech-circle w-12 h-12 min-w-12 flex items-center justify-center">
                    <span className="text-space-cyan text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Equipe multidisciplinar</h3>
                    <p className="text-space-light">Profissionais especialistas em áreas complementares focados em resultados.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <div className="tech-circle w-12 h-12 min-w-12 flex items-center justify-center">
                    <span className="text-space-cyan text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Cases de sucesso</h3>
                    <p className="text-space-light">38+ projetos executados com sucesso e mais de 240 profissionais impactados.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <div className="tech-circle w-12 h-12 min-w-12 flex items-center justify-center">
                    <span className="text-space-cyan text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Foco em resultados</h3>
                    <p className="text-space-light">Estratégias orientadas a dados para maximizar o ROI e impulsionar seu crescimento.</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="mt-6 pt-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <button className="text-space-cyan hover:text-white transition-colors underline underline-offset-4">
                      Ver detalhes da metodologia CBX
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-space-blue border border-space-cyan/30">
                    <DrawerHeader>
                      <DrawerTitle className="text-space-cyan text-2xl">Metodologia CBX Growth</DrawerTitle>
                      <DrawerDescription>
                        Nossa abordagem exclusiva para crescimento acelerado
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 space-y-4">
                      <div className="cosmic-card p-4">
                        <h4 className="text-space-cyan font-medium mb-2">1. Diagnóstico e Estratégia</h4>
                        <p className="text-space-light text-sm">Análise completa do seu negócio, identificação de oportunidades e definição de KPIs.</p>
                      </div>
                      <div className="cosmic-card p-4">
                        <h4 className="text-space-cyan font-medium mb-2">2. Implementação Técnica</h4>
                        <p className="text-space-light text-sm">Configuração de ferramentas, automações e processos para execução do plano.</p>
                      </div>
                      <div className="cosmic-card p-4">
                        <h4 className="text-space-cyan font-medium mb-2">3. Experimentação Contínua</h4>
                        <p className="text-space-light text-sm">Ciclos de testes, medição e otimização para encontrar as estratégias mais eficientes.</p>
                      </div>
                      <div className="cosmic-card p-4">
                        <h4 className="text-space-cyan font-medium mb-2">4. Escala e Otimização</h4>
                        <p className="text-space-light text-sm">Ampliação das ações bem-sucedidas e refinamento contínuo dos resultados.</p>
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <GradientButton>Entendi</GradientButton>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
