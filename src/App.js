import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Work from './Pages/Work';
import TechStack from './Pages/TechStack';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import GuestLayout from "./Layouts/GuestLayout";
import './index.css';
import { MobiusStrip } from './Components/Animations';
import Maze from './Components/Animations/Maze';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/mobius-strip" element={<MobiusStrip/>} />
        <Route path="/maze" element={<Maze/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
