import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/react-fontawesome';

import './App.css';

import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import Category from './pages/Category';

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />

          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
