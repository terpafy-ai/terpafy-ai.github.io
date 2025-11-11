import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="text-primary" size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold">Terpafy</h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+5511960011592" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={16} />
                {t('footer.phone')}
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.quickLinks.features')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.quickLinks.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.quickLinks.benefits')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.quickLinks.about')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('footer.legal.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-secondary transition-colors opacity-90 hover:opacity-100">
                  {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <a 
                  href={`https://wa.me/5511960011592?text=${encodeURIComponent(t('footer.legal.contactMessage'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors opacity-90 hover:opacity-100"
                >
                  {t('footer.legal.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {currentYear} Terpafy. {t('footer.copyright')}</p>
            <p className="mt-2 text-xs text-center md:text-right">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
