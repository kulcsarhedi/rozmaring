import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
  const { t } = useTranslation(); // Destructure t function from useTranslation hook

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('goodbye')}</p>
    </div>
  );
};

export default ExampleComponent;
