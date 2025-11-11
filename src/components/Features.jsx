import React from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Bell, Shield, BookOpen } from 'lucide-react';
import Card from './ui/Card';

const features = [
  {
    icon: Activity,
    titleKey: 'features.items.monitoring.title',
    descKey: 'features.items.monitoring.description',
    color: 'text-primary'
  },
  {
    icon: Bell,
    titleKey: 'features.items.reminders.title',
    descKey: 'features.items.reminders.description',
    color: 'text-secondary'
  },
  {
    icon: Shield,
    titleKey: 'features.items.security.title',
    descKey: 'features.items.security.description',
    color: 'text-success'
  },
  {
    icon: BookOpen,
    titleKey: 'features.items.education.title',
    descKey: 'features.items.education.description',
    color: 'text-warning'
  },
];

const Features = () => {
  const { t } = useTranslation();
  
  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          {t('features.title')}
        </h2>
        <p className="text-center text-neutral-medium mb-12 max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:scale-105 transition-transform duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={32} className={feature.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-neutral-medium text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
