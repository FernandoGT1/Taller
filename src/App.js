// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Buttons from './components/Buttons/Buttons';
import Table from './components/Table/Table';
import ServicesTable from './components/ServicesTable/ServicesTable';
import PartsTable from './components/PartsTable/PartsTable'; // Importa la nueva tabla de piezas

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('Mecánicos'); // Nuevo estado para gestionar la vista

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && <Header onLogout={handleLogout} />}
      {isLoggedIn && <Buttons onViewChange={handleViewChange} />}
      {isLoggedIn && currentView === 'Mecánicos' && <Table />}
      {isLoggedIn && currentView === 'Servicios' && <ServicesTable />}
      {isLoggedIn && currentView === 'Piezas' && <PartsTable />} {/* Agrega la vista de Piezas */}
    </div>
  );
}

export default App;
