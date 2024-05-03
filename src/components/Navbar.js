import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";


function Navbar({notify}) {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSearchBtnClicked = () => {
    navigate('displaySearch')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg bg-success px-2 text-dark bg-opacity-10">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
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
                  <Link className="nav-link active" aria-current="page" to="/">
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
                <li className="nav-item">
                  <Link className="nav-link" to="/createPost">
                    Create Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/userProfile">
                    user Profile
                    </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center ">
                <div className="searchContainer d-flex">
                  <div className="searchBox d-flex align-items-center h-auto">
                    <input type="text" className="searchInput mb-0" placeholder='Enter Location' />
                    <button className="btn btn-outline-success" type="submit" onClick={handleSearchBtnClicked}>
                      Search
                    </button>
                  </div>
                </div>
                <div className="ms-2">
                  {isLoggedIn ? (
                    <Link className="nav-link" to="/userProfile">
                      <IoPersonSharp />
                    </Link>
                  ) : (
                    <button className="btn btn-outline-success" onClick={toggleLogin}>
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isLoginOpen && <Login notify={notify} setIsLoginOpen={setIsLoginOpen} onClose={toggleLogin} />}
    </>
  );
}

export default Navbar;
