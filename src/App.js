import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Display from './components/Display';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
