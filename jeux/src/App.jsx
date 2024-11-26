import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import Intro from './components/Intro';
import JeuxEnVedette from './components/JeuxEnVedette';
import UserManager from './components/UserManager';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Africa from './pages/AfricaPage';
import Asia from './pages/AsiaPage';
import Europe from './pages/EuropePage';
import Oceania from './pages/OceaniaPage';
import Namerica from './pages/NamericaPage';
import Samerica from './pages/S-AmericaPage';
import Map from './components/Map';
import CustomCarousel from './components/CustomCarousel'; 
import SubmitGame from './components/SubmitGame';
import AuthPage from './components/Authpage';
import TestGameDetails from './components/TestGameDetails';
import TestGameList from './components/TestGameList';
import ContactPage from './components/ContactPage';
import './App.css';
import GameList from './components/Jeux';

const App = () => {
  return (
    <div>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <JeuxEnVedette />
              <CustomCarousel />
              <Map />
            </>
          } />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contribuer" element={<SubmitGame />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/oceania" element={<Oceania />} />
          <Route path="/namerica" element={<Namerica />} />
          <Route path="/samerica" element={<Samerica />} />
          <Route path="/Jeux" element={<GameList />} />
          <Route path="/" element={<TestGameList />} />
          <Route path="/game/:id" element={<TestGameDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <div />
      <Footer />
    </div>
  );
};

export default App;
