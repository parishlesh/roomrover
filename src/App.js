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
import DisplayCard from './components/DisplayCard';
import CreatePost from './components/CreatePost';
import UserProfile from './components/UserProfile';


// import TextOverlay from './components/TextOverlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  function notify() {
    toast.success('logged in successfully!');
    console.log('hello')
  }
  return (<>
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <Navbar notify={notify}></Navbar>
      <Routes>
        <Route exect path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About notify={notify} />} />
        <Route path='/contactUS' element={<ContactUs />}></Route>
        <Route path='/displaySearch' element={<SearchDisplay />}></Route>
        <Route path='/createPost' element={<CreatePost />}></Route>
        <Route path={`/displayCard/:aptId`} element={<DisplayCard />}></Route>
        <Route exact path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
    {/* <TextOverlay/> */}
  </>
  );
}

export default App;
