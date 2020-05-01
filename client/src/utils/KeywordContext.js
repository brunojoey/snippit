import React from 'react';

const KeywordContext = React.createContext({
    keyword: '',
    updateKeyword: () => {}
});

export default KeywordContext;