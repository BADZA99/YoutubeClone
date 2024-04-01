import React from 'react';
import { AppContainer, GlobalStyle } from './App.Styled';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './utils/theme';
import { useAppContext } from './context/App.context';
import Header from './components/header/Header';
import ToolTips from './utils/ToolTips';
import Body from './components/Body/Body';
import { Route, Routes } from 'react-router-dom';
import WatchVideoContent from './components/watchVideoContent/WatchVideoContent';


function App() {
 const {theme}=useAppContext();
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <ToolTips />
      <AppContainer>
        <Header />
        <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:id" element={<WatchVideoContent />} />

        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
