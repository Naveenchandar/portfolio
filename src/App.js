import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import NavBar from './components/NavBar';
import SkillsPage from './components/SkillsPage';
import CarrierPage from './components/CarrierPage';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage id="MainPage" />
      <AboutPage id="AboutPage" />
      <ServicePage />
      <SkillsPage id="SkillsPage" />
      <CarrierPage id="CarrierPage" />
      <ContactPage id="ContactPage" />
    </div>
  );
}

export default App;
