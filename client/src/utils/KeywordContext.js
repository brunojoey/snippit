import React from 'react';

const KeywordContext = React.createContext({
  keywords: [],
  updateKeywords: () => {}
});

export default KeywordContext;