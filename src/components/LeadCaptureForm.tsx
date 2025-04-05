
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from './ui/form';
import { toast } from 'sonner';
import { formSchema, FormValues } from './lead-form/formSchema';
import FormHeader from './lead-form/FormHeader';
import FormFields from './lead-form/FormFields';
import SubmitButton from './lead-form/SubmitButton';
import SidebarContent from './lead-form/SidebarContent';

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
        <FormHeader />
        
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
                <FormFields form={form} />
                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </Form>
          </motion.div>
          
          {/* Info column */}
          <SidebarContent />
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
