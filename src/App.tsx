import React from 'react';
import Routes from './Routes';
import ScrollIndicator from './components/common/ScrollIndicator';
import { LenisProvider } from './components/common/LenisContext';

const App: React.FC = () => {
  return (
    <LenisProvider>
      <ScrollIndicator />
      <Routes />
    </LenisProvider>
  );
};

export default App;
