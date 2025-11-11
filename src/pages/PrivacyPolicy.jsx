import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Shield, Lock, Eye, FileText, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold">{t('privacy.title')}</h1>
          <p className="text-sm opacity-90 mt-2">{t('privacy.lastUpdate')}: 10 de Novembro de 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-neutral-dark leading-relaxed">
            {t('privacy.intro')}
          </p>
        </section>

        {/* Section 1: Identification */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section1.title')}</h2>
          </div>
          <div className="bg-neutral-light p-6 rounded-lg">
            <p className="mb-4">{t('privacy.section1.description')}</p>
            <ul className="space-y-2 text-neutral-dark">
              <li><strong>{t('privacy.section1.status')}:</strong> {t('privacy.section1.statusText')}</li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <strong>{t('privacy.section1.contact')}:</strong> terpafy.ai@gmail.com
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Data Collected */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section2.title')}</h2>
          </div>
          <p className="mb-6">{t('privacy.section2.description')}</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">{t('privacy.section2.table.category')}</th>
                  <th className="p-3 text-left">{t('privacy.section2.table.examples')}</th>
                  <th className="p-3 text-left">{t('privacy.section2.table.purpose')}</th>
                  <th className="p-3 text-left">{t('privacy.section2.table.legal')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">{t('privacy.section2.table.personal')}</td>
                  <td className="p-3">{t('privacy.section2.table.personalExamples')}</td>
                  <td className="p-3">{t('privacy.section2.table.personalPurpose')}</td>
                  <td className="p-3">{t('privacy.section2.table.personalLegal')}</td>
                </tr>
                <tr className="border-b bg-neutral-light">
                  <td className="p-3 font-semibold">{t('privacy.section2.table.sensitive')}</td>
                  <td className="p-3">{t('privacy.section2.table.sensitiveExamples')}</td>
                  <td className="p-3">{t('privacy.section2.table.sensitivePurpose')}</td>
                  <td className="p-3">{t('privacy.section2.table.sensitiveLegal')}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">{t('privacy.section2.table.usage')}</td>
                  <td className="p-3">{t('privacy.section2.table.usageExamples')}</td>
                  <td className="p-3">{t('privacy.section2.table.usagePurpose')}</td>
                  <td className="p-3">{t('privacy.section2.table.usageLegal')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Sensitive Data */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section3.title')}</h2>
          </div>
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
            <p className="mb-4">{t('privacy.section3.description')}</p>
            <ul className="space-y-3">
              <li><strong>{t('privacy.section3.consent')}:</strong> {t('privacy.section3.consentText')}</li>
              <li><strong>{t('privacy.section3.anonymization')}:</strong> {t('privacy.section3.anonymizationText')}</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Data Sharing */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section4.title')}</h2>
          </div>
          <p className="mb-4">{t('privacy.section4.description')}</p>
          <ul className="space-y-3 list-disc list-inside text-neutral-dark">
            <li><strong>{t('privacy.section4.doctor')}:</strong> {t('privacy.section4.doctorText')}</li>
            <li><strong>{t('privacy.section4.operators')}:</strong> {t('privacy.section4.operatorsText')}</li>
            <li><strong>{t('privacy.section4.legal')}:</strong> {t('privacy.section4.legalText')}</li>
          </ul>
        </section>

        {/* Section 5: Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section5.title')}</h2>
          </div>
          <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-lg">
            <p className="mb-4">{t('privacy.section5.description')}</p>
            <ul className="space-y-3">
              <li><strong>{t('privacy.section5.measures')}:</strong> {t('privacy.section5.measuresText')}</li>
              <li><strong>{t('privacy.section5.risk')}:</strong> {t('privacy.section5.riskText')}</li>
              <li><strong>{t('privacy.section5.whatsapp')}:</strong> {t('privacy.section5.whatsappText')}</li>
            </ul>
          </div>
        </section>

        {/* Section 6: User Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section6.title')}</h2>
          </div>
          <p className="mb-4">{t('privacy.section6.description')}</p>
          <ul className="space-y-2 list-disc list-inside text-neutral-dark">
            <li>{t('privacy.section6.right1')}</li>
            <li>{t('privacy.section6.right2')}</li>
            <li>{t('privacy.section6.right3')}</li>
            <li>{t('privacy.section6.right4')}</li>
            <li>{t('privacy.section6.right5')}</li>
          </ul>
        </section>

        {/* Section 7: Data Retention */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section7.title')}</h2>
          </div>
          <p>{t('privacy.section7.description')}</p>
        </section>

        {/* Section 8: Policy Changes */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-primary">{t('privacy.section8.title')}</h2>
          </div>
          <p>{t('privacy.section8.description')}</p>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{t('privacy.contact.title')}</h3>
          <p className="mb-4">{t('privacy.contact.description')}</p>
          <a href="mailto:terpafy.ai@gmail.com" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Mail size={20} />
            terpafy.ai@gmail.com
          </a>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
