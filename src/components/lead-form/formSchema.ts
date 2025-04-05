
import * as z from 'zod';

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;
