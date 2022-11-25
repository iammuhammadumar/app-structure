import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Main} from './src/screens';
import theme from './src/theme';

const App = () => {
  return <Main />;
};

const AppStoreWrapped = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default AppStoreWrapped;
