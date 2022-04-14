import React from 'react'
// import { renderRoutes } from "react-router-config";
// import routes from "./routes/index.js";
import Home from './layouts/HomeLayouts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/index' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
