import React, { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import NavBar from './components/NavBar';
import SkillsPage from './components/SkillsPage';
import CarrierPage from './components/CarrierPage';
import ContactPage from './components/ContactPage';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const ButtonStyle = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  position:fixed;
`

function App() {
  const GlobalStyle = createGlobalStyle`
     *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  `
  const lighTheme = {
    theme:'light',
    background: '#fff',
    color: '#6f6f6f'
  }
  const darkTheme = {
    theme:'dark',
    background: '#100e17',
    color: '#fff'
  }
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lighTheme : darkTheme}>
      <GlobalStyle />
      <ButtonStyle onClick={toggleTheme}><img style={{ width: '100%' }} src={theme === 'light' ? process.env.PUBLIC_URL + 'sun.svg' : process.env.PUBLIC_URL + 'moon.svg'} /></ButtonStyle>
      <div className="App">
        <NavBar />
        <MainPage id="MainPage" />
        <AboutPage id="AboutPage" />
        <ServicePage />
        <SkillsPage id="SkillsPage" />
        <CarrierPage id="CarrierPage" />
        <ContactPage id="ContactPage" />
      </div>
    </ThemeProvider>
  );
}

export default App;


