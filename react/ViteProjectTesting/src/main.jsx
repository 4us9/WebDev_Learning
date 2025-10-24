// src/main.jsx (The new version)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 👈 NEW IMPORTS

import './index.css';

// The components you want to use as "apps"
import App from './App.jsx';            // Your default app/component
import TestApp from './pages/TestApp.jsx'; // Your first mini-app

// Get the root element once
const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    {/* 1. Use BrowserRouter as the container for all routing
      2. Use Routes to define the set of routes
      3. Use Route to map a URL path to a specific component (your "app")
    */}
    <BrowserRouter>
      <Routes>
        {/* Route 1: The default path (/) renders your original <App /> */}
        <Route path="/" element={<App />} /> 
        
        {/* Route 2: Your first mini-app */}
        <Route path="/test-app" element={<TestApp />} /> 
        
        {/* You can add more mini-apps here: */}
        {/* <Route path="/calculator" element={<CalculatorApp />} /> */}
        
        {/* OPTIONAL: A catch-all route for 404 pages */}
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);