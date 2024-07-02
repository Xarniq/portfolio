import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Cv from './pages/Cv';
import Projets from './pages/Projets';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/moncv' element={<Cv/>}/>
      <Route path='/mesprojets' element={<Projets/>}/>
    </Routes>
    </> 
  );
}

export default App

