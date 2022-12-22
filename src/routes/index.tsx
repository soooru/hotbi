import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaltLayout from 'layouts/DefaultLayout'
import EmptyLagout from 'layouts/EmptyLayout'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Question from 'pages/Question'
import Result from 'pages/Result'
import Developer from 'pages/Developer'
import Store from 'pages/Store'

function Router() {
  return (
    <Routes>
      <Route element={<DefaltLayout />}>
        <Route path="/result/:id" element={<Result />} />
        <Route path="/question" element={<Question />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<EmptyLagout />}>
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
