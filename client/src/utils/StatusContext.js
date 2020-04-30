import React from 'react';

const StatusContext = React.createContext({ 
  status: false,
  updateStatus: () => {}
 });

export default StatusContext;
