import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        {/* Language Button */}
        <button className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 hover:shadow-xl transition-all duration-200 border border-neutral-light">
          <Globe size={20} className="text-primary" />
          <span className="font-semibold text-primary uppercase text-sm">
            {i18n.language}
          </span>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-neutral-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-light transition-colors first:rounded-t-lg last:rounded-b-lg ${
                i18n.language === lang.code ? 'bg-secondary/10 text-primary font-semibold' : 'text-neutral-dark'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span>{lang.name}</span>
              {i18n.language === lang.code && (
                <span className="ml-auto text-success">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
