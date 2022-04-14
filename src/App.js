import React from 'react'
// import { renderRoutes } from "react-router-config";
// import routes from "./routes/index.js";
import Home from './layouts/HomeLayouts'
import Index from './pages/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/' element={<Index />}></Route>
      </Routes>
      <Home></Home>
    </BrowserRouter>
  )
}

export default App
