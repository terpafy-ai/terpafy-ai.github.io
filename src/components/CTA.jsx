import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const CTA = () => {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+5511960011592';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('cta.whatsappMessage'));
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            onClick={handleWhatsAppClick}
            className="text-lg w-full sm:w-auto"
          >
            <MessageCircle size={24} />
            {t('cta.button')}
          </Button>
          
          <a 
            href="#features" 
            className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors"
          >
            {t('cta.learnMore')}
            <ArrowRight size={20} />
          </a>
        </div>
        
        <p className="mt-8 text-sm opacity-75">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
};

export default CTA;
