import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-success p-2 text-dark bg-opacity-10">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              RoomRover
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles={"--bs-scroll-height: 100px;"}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit" onClick={toggleLogin}>
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
      {isLoginOpen && <Login onClose={toggleLogin} />}
    </>
  );
}

export default Navbar;
