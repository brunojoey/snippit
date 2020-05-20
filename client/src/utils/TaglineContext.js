import React from 'react';

const TaglineContext = React.createContext({
  taglines: [],
  updateTaglines: () => {}
});

export default TaglineContext;
