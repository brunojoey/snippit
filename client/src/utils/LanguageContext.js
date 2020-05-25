import React from 'react';

const LanguageContext = React.createContext({
  language: 'javascript',
  icon: '',
  updateLanguage: () => {}
});

export default LanguageContext;