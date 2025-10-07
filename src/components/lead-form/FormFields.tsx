
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormValues } from './formSchema';

interface FormFieldsProps {
  form: UseFormReturn<FormValues>;
}

const FormFields: React.FC<FormFieldsProps> = ({ form }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-space-light text-sm md:text-base">Qual seu nome?</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo" 
                  {...field} 
                  className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan h-10 md:h-11"
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
              <FormLabel className="text-space-light text-sm md:text-base">Qual seu email corporativo?</FormLabel>
              <FormControl>
                <Input 
                  placeholder="seuemail@empresa.com" 
                  {...field} 
                  className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan h-10 md:h-11"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-space-light text-sm md:text-base">Qual seu WhatsApp?</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(00) 00000-0000" 
                  {...field} 
                  className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan h-10 md:h-11"
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
              <FormLabel className="text-space-light text-sm md:text-base">Qual o nome da sua empresa?</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Nome da sua empresa" 
                  {...field} 
                  className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan h-10 md:h-11"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <FormField
          control={form.control}
          name="segment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-space-light text-sm md:text-base">Qual o segmento da empresa?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white h-10 md:h-11">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-space-dark border-space-cyan/30 max-h-[200px] overflow-y-auto">
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
              <FormLabel className="text-space-light text-sm md:text-base">Quantos vendedores possui?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white h-10 md:h-11">
                    <SelectValue placeholder="Número de vendedores" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-space-dark border-space-cyan/30 max-h-[200px] overflow-y-auto">
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
            <FormLabel className="text-space-light text-sm md:text-base">Qual o faturamento médio mensal?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-space-blue/30 border-space-cyan/30 text-white h-10 md:h-11">
                  <SelectValue placeholder="Selecione o faturamento" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-space-dark border-space-cyan/30 max-h-[200px] overflow-y-auto">
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
            <FormLabel className="text-space-light text-sm md:text-base">Quais objetivos pretende alcançar conosco?</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Descreva seus principais objetivos..." 
                {...field} 
                rows={4}
                className="bg-space-blue/30 border-space-cyan/30 text-white placeholder:text-space-light/70 focus:border-space-cyan resize-none text-sm md:text-base"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormFields;
