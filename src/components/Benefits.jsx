import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Stethoscope, Lock, Clock } from 'lucide-react';
import Card from './ui/Card';

const Benefits = () => {
  const { t } = useTranslation();
  
  return (
    <section id="benefits" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          {t('benefits.title')}
        </h2>
        <p className="text-center text-neutral-medium mb-12 max-w-2xl mx-auto">
          {t('benefits.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Patients */}
          <Card className="border-l-4 border-primary">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {t('benefits.patients.title')}
                </h3>
                <p className="text-neutral-medium text-sm">
                  {t('benefits.patients.subtitle')}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.patients.items.never.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.patients.items.never.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.patients.items.privacy.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.patients.items.privacy.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.patients.items.communication.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.patients.items.communication.description')}</p>
                </div>
              </li>
            </ul>
          </Card>
          
          {/* For Healthcare Professionals */}
          <Card className="border-l-4 border-secondary">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {t('benefits.professionals.title')}
                </h3>
                <p className="text-neutral-medium text-sm">
                  {t('benefits.professionals.subtitle')}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.professionals.items.realtime.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.professionals.items.realtime.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.professionals.items.insights.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.professionals.items.insights.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users size={20} className="text-success flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary">{t('benefits.professionals.items.workflow.title')}</strong>
                  <p className="text-sm text-neutral-medium">{t('benefits.professionals.items.workflow.description')}</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 bg-neutral-light rounded-lg p-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">LGPD</div>
              <div className="text-sm text-neutral-medium">{t('benefits.trust.lgpd')}</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-medium/20"></div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">256-bit</div>
              <div className="text-sm text-neutral-medium">{t('benefits.trust.encryption')}</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-medium/20"></div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-neutral-medium">{t('benefits.trust.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
