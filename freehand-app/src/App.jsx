import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Services from './pages/Services'
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='o-mne' element={<About />}/>
            <Route path='kontakt' element={<Contact />}/>
            <Route path='sluzby' element={<Services />}/>
            <Route path="*" element={<NoPage />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
