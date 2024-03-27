import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
   <div>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='About' element={<About />}/>
    <Route path='Contact' element={<Contact />}/>
   </Routes>
   
  
   </div>
  );
}

export default App;
