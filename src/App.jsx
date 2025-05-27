import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import CrudPage from './pages/CrudPage';
import LoginPages from './pages/LoginPage';  // Tambahkan import ini

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPages />} />  {/* Tambahkan route ini */}
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </Router>
  );
}

export default App;