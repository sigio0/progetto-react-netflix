import React from "react";
import logo from '../img/logo.png'
import bell from '../img/bell.svg'
import person from '../img/person.svg'
import search from '../img/searc.svg'
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyNavBar = () =>{
return (
    <>
    <nav
        className="navbar navbar-expand-lg bg-black"
        data-bs-theme="dark"
       
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
            ><img src={logo}/></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/tv-shows" className="nav-link fw-bold" href="#">TV Shows</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Recently Added</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">My List</a>
              </li>
          
            </ul>
            <div className="d-flex align-items-center">
            <img src={search} className="mx-3"style={{width: "20px"}}alt="My SVG" />
              <div id="kids" className="fw-bold">KIDS</div>
              <img src={bell} className="mx-3" style={{width: "20px"}}></img>
              <img src={person} className="mx-3" style={{width: "20px"}}></img>
              
            </div>
          </div>
        </div>
      </nav>
      </>
)
}

export default MyNavBar