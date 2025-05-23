import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import components
import Navigation from './components/Navigation';
import FireGolem from './pages/FireGolem';
import AirGolem from './pages/AirGolem';
import IceGolem from './pages/IceGolem';
import EarthGolem from './pages/EarthGolem';
import Homunculus from './pages/Homunculus';
import Altar from './pages/Altar';
import Settings from './pages/Settings';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import { Login, AuthProvider } from './utils/auth';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AuthProvider>
      <AppContainer className="bg-arcane text-gold">
        <Router>
          <Navigation />
          <main className="flex-1 container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Altar />} />
              <Route path="/altar" element={<Altar />} />
              <Route path="/golem/fire" element={<FireGolem />} />
              <Route path="/golem/air" element={<AirGolem />} />
              <Route path="/golem/ice" element={<IceGolem />} />
              <Route path="/golem/earth" element={<EarthGolem />} />
              <Route path="/golem/aether" element={<Homunculus />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </Router>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
