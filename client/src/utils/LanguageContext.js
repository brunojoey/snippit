import React from 'react';

const LanguageContext = React.createContext({
    language: 'javascript',
    updateLanguage: () => {}
});

export default LanguageContext;