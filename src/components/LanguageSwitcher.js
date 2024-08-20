import React from 'react';
import { useTranslation } from 'react-i18next';
import '../pages/style.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div >
      {currentLanguage !== 'en' && (
        <button id="langbtn" onClick={() => handleLanguageChange('en')}>
          EN
        </button>
      )}
      {currentLanguage !== 'hu' && (
        <button id="langbtn" onClick={() => handleLanguageChange('hu')}>
          HU
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
