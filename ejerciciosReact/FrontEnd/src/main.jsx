import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Activities from "./Activities.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>} />
              <Route index element={<Home />} />
              <Route path="/actividades" element={<Activities/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>,
  </StrictMode>,

)
