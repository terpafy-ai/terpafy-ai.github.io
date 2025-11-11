import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Shield, Activity, Heart } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+5511960011592';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('hero.whatsappMessage'));
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-light to-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Heart className="text-white" size={48} fill="currentColor" />
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-slide-up">
          {t('hero.title')}
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-neutral-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Button */}
        <div className="mb-8">
          <Button 
            variant="primary" 
            onClick={handleWhatsAppClick}
            className="text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle size={24} />
            {t('hero.cta')}
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-medium">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-success" />
            <span>{t('hero.badges.secure')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={20} className="text-success" />
            <span>{t('hero.badges.medical')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={20} className="text-success" />
            <span>{t('hero.badges.easy')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
