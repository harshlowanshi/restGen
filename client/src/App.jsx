import React from 'react'
import Navbar from './componets/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';
import DeshBoard from './componets/DeshBoard';

const App = () => {

  return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<DeshBoard/>}/>
   </Routes>
   <ToastContainer/>
   </BrowserRouter>
    </main>
  )
}

export default App
