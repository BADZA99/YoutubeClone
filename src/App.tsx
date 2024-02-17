import React from 'react';
import { AppContainer, GlobalStyle } from './App.Styled';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './utils/theme';
import { useAppContext } from './context/App.context';


function App() {
 const {theme}=useAppContext();
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>hello react ts</AppContainer>
    </ThemeProvider>
  );
}

export default App;
