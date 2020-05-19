import React from 'react';
import './App.css';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import NavBar from './NavBar';
import SkillsPage from './SkillsPage';
import CarrierPage from './CarrierPage';
import ContactPage from './ContactPage';


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
