import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (<>
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exect path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
