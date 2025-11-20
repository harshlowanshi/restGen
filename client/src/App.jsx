import React from 'react'

import { useState } from 'react';
import Login from './pages/login';
import Register from './pages/register';
import DeshBoard from './componets/deshBoard';
import Navbar from './componets/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  

  return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<DeshBoard/>}/>
   </Routes>
   </BrowserRouter>
    </main>
  )
}

export default App
