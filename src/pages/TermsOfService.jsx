import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, FileText, AlertTriangle, Scale, MessageCircle, Copyright, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* Header */}
      <header className="bg-primary text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors mb-4">
            <ArrowLeft size={20} />
            {t('legal.backToHome')}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{t('terms.title')}</h1>
          <p className="text-sm opacity-90 mt-2">{t('terms.lastUpdate')}: 10 de Novembro de 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-neutral-dark leading-relaxed">
            {t('terms.intro')}
          </p>
        </section>

        {/* Section 1: Service Nature */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('terms.section1.title')}</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('terms.section1.nature')}</h3>
              <p className="text-neutral-dark">{t('terms.section1.natureText')}</p>
            </div>
            <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle size={20} className="text-warning" />
                {t('terms.section1.limitation')}
              </h3>
              <p className="text-neutral-dark">{t('terms.section1.limitationText')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('terms.section1.mvp')}</h3>
              <p className="text-neutral-dark">{t('terms.section1.mvpText')}</p>
            </div>
          </div>
        </section>

        {/* Section 2: WhatsApp Usage */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('terms.section2.title')}</h2>
          </div>
          <ul className="space-y-3">
            <li>
              <strong>{t('terms.section2.platform')}:</strong> {t('terms.section2.platformText')}
            </li>
            <li>
              <strong>{t('terms.section2.communication')}:</strong> {t('terms.section2.communicationText')}
            </li>
            <li>
              <strong>{t('terms.section2.responsibility')}:</strong> {t('terms.section2.responsibilityText')}
            </li>
          </ul>
        </section>

        {/* Section 3: Intellectual Property */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Copyright className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('terms.section3.title')}</h2>
          </div>
          <ul className="space-y-3">
            <li>
              <strong>{t('terms.section3.content')}:</strong> {t('terms.section3.contentText')}
            </li>
            <li>
              <strong>{t('terms.section3.usage')}:</strong> {t('terms.section3.usageText')}
            </li>
          </ul>
        </section>

        {/* Section 4: Liability Limitation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('terms.section4.title')}</h2>
          </div>
          <div className="bg-error/10 border-l-4 border-error p-6 rounded-lg">
            <p className="font-semibold mb-4 text-error">{t('terms.section4.critical')}</p>
            <ul className="space-y-4">
              <li>
                <strong>{t('terms.section4.noGuarantee')}:</strong> {t('terms.section4.noGuaranteeText')}
              </li>
              <li>
                <strong>{t('terms.section4.noCNPJ')}:</strong> {t('terms.section4.noCNPJText')}
              </li>
              <li>
                <strong>{t('terms.section4.damages')}:</strong> {t('terms.section4.damagesText')}
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: General Provisions */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('terms.section5.title')}</h2>
          </div>
          <ul className="space-y-3">
            <li>
              <strong>{t('terms.section5.acceptance')}:</strong> {t('terms.section5.acceptanceText')}
            </li>
            <li>
              <strong>{t('terms.section5.changes')}:</strong> {t('terms.section5.changesText')}
            </li>
            <li>
              <strong>{t('terms.section5.law')}:</strong> {t('terms.section5.lawText')}
            </li>
            <li>
              <strong>{t('terms.section5.jurisdiction')}:</strong> Goiânia, Goiás
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{t('terms.contact.title')}</h3>
          <p className="mb-4">{t('terms.contact.description')}</p>
          <a href="mailto:terpafy.ai@gmail.com" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Mail size={20} />
            terpafy.ai@gmail.com
          </a>
        </section>

        {/* Legal Disclaimer */}
        <section className="mt-12 p-6 bg-neutral-light rounded-lg border-l-4 border-warning">
          <p className="text-sm text-neutral-dark">
            <strong className="text-warning">{t('terms.disclaimer.title')}:</strong> {t('terms.disclaimer.text')}
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
