import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ClipboardCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    titleKey: 'howItWorks.steps.connect.title',
    descKey: 'howItWorks.steps.connect.description',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    titleKey: 'howItWorks.steps.track.title',
    descKey: 'howItWorks.steps.track.description',
  },
  {
    icon: TrendingUp,
    number: '03',
    titleKey: 'howItWorks.steps.monitor.title',
    descKey: 'howItWorks.steps.monitor.description',
  },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gradient-to-b from-white to-neutral-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          {t('howItWorks.title')}
        </h2>
        <p className="text-center text-neutral-medium mb-12 max-w-2xl mx-auto">
          {t('howItWorks.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-secondary/30 z-0" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-secondary/20 mb-2">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Icon size={36} className="text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {t(step.titleKey)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-medium leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
