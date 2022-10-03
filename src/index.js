import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import App from './App';
import Attribute from './pages/Attribute';
import Compose from './pages/Compose';
import Generate from './pages/Generate';

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Attribute />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/generated" element={<Generate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);