import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);
