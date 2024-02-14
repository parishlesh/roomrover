import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleLogin =()=>{
    setIsOpen(!isOpen);
  }




  return (<>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RoomRover</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles={"--bs-scroll-height: 100px;"}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Location" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-success" type="submit" onClick={toggleLogin}>Login</button>
          </div>
        </div>
      </nav>
    </div>
            {isOpen && <Login/>}
    
  </>
  )
}

export default Navbar;