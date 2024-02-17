import React from 'react';
import { AppContainer, GlobalStyle } from './App.Styled';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './utils/theme';


function App() {
  const CurrentTheme="dark";
  return (
    <ThemeProvider theme={THEMES[CurrentTheme]}>
      <GlobalStyle />
      <AppContainer>hello react ts</AppContainer>
    </ThemeProvider>
  );
}

export default App;
