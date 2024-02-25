import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
// import searchCardImg from './room-pics.jpg';
import SearchDisplay from './SearchDisplay';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [showSearchDisplay, setShowSearchDisplay] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSearchBtnClicked = () => {
    navigate('displaySearch')
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
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/displaySearch">
                    Search Display
                  </Link>
                </li> */}
              </ul>
              <div className="searchContainer">
                <div className="searchBox">
                  <input type="text" className="searchInput" placeholder='Enter Location' />
                  <button className="btn btn-outline-success" type="submit" onClick={handleSearchBtnClicked}>
                    Search
                  </button>
                </div>
              </div>
              <button className="btn btn-outline-success" type="submit" onClick={toggleLogin}>
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* {showSearchDisplay && <SearchDisplay />} */}
      {isLoginOpen && <Login onClose={toggleLogin} />}
    </>
  );
}

export default Navbar;
