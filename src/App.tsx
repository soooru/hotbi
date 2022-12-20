import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaltLayout from './layouts/DefaultLayout';
import EmptyLagout from './layouts/EmptyLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Question from './pages/Question';
import Result from './pages/Result';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaltLayout />}>
          <Route path="/result/:id" element={<Result />} />
          <Route path="/question" element={<Question />} />
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<EmptyLagout />}>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
