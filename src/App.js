import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SearchDisplay from './components/SearchDisplay';


function App() {

  return (<>
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exect path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contactUS' element={<ContactUs/>}></Route>
      <Route path='/displaySearch' element={<SearchDisplay/>}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
