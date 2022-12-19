import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaltLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Question from './pages/Question';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaltLayout />}>
          <Route path="/result" element={<Result />} />
          <Route path="/question" element={<Question />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
