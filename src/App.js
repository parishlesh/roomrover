import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import SearchDisplay from './components/SearchDisplay';
import DisplayCard from './components/DisplayCard';
import CreatePost from './components/CreatePost';
import UserProfile from './components/UserProfile';

// import TextOverlay from './components/TextOverlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import UserProfileForOtherUsers from './components/UserProfileForOtherUsers';



function App() {
  function notify() {
    toast.success('logged in successfully!');
    console.log('hello')
  }
  const [progress, setProgress] = useState(0)

  return (<>
    <BrowserRouter>

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
      <LoadingBar
        color='#1A906B'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />      
      <Routes>
        <Route path='/' element={<Home setProgress={setProgress} />}/>
        <Route path='/about' element={<About notify={notify} />} />
        <Route path='/contactUS' element={<ContactUs />}/>
        <Route path='/displaySearch' element={<SearchDisplay />}/>
        <Route path='/createPost' element={<CreatePost />}/>
        <Route path={`/displayCard/:roomId`} element={<DisplayCard />}/>
        <Route exact path="/userProfile" element={<UserProfile setProgress={setProgress} />} />
        <Route wxact path='/userProfileForOtherUsers' element={<UserProfileForOtherUsers setProgress={setProgress} />} />
      </Routes>
    </BrowserRouter>
    {/* <TextOverlay/> */}
  </>
  );
}

export default App;
