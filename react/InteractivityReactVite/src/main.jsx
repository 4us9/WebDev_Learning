import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'; // 👈 NEW IMPORTS

//Styling or TailwindCSS?
import './index.css'

//Components of each App
import App from './App.jsx'
import Play from './pages/button.jsx'
import Form from './pages/chat.jsx'
import Form2 from './pages/updatingObj.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
          {/*Route 1: */}
          <Route path="/" element={<App />} />

          {/*Route 2: */}
          <Route path="/button-app" element={<Play/>} />

          {/*Route 3:*/}
          <Route path ="/form" element = {<Form /> } />

          {/*Route 4:*/}
          <Route path="/form2" element = {<Form2/>} />
          


      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
