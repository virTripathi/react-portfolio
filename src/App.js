import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Work from './Pages/Work';
import TechStack from './Pages/TechStack';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import ErrorPage from "./Pages/ErrorPage";
import GuestLayout from "./Layouts/GuestLayout";
import './index.css';

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
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
