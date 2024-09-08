import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

interface NavProps {
  logoSrcPath: string;
}

const NavBar: React.FC<NavProps> = ({ logoSrcPath }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoSrcPath} alt="Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                <FaHome /> {"    "}Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#About">
                <IoMdPerson />
                {"    "}About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Services">
                <IoPeopleSharp />
                {"    "} Services
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#Contact">
                <IoMdMail />
                {"    "} Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Downloads">
                <FaDownload /> {"    "} Downloads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Staff">
                <GiGraduateCap />
                {"    "} Staff
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Links
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/p/KIKO-Early-Learning-Center-61560540610073/"
                  >
                    <FaFacebook />
                    {"    "}Facebook
                  </a>
                </li>
                <hr />

                <li>
                  <a
                    className="dropdown-item"
                    href="https://calendar.google.com/calendar/u/0?cid=Y185ZGZlMzBjOTlhMjZmNTczOWRjNzZhZDlkMjM4ODEzNWViMjQxNDY4MDI2OGYyN2VhZTJlMzhjNWI5NDI3OTg2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  >
                    <SlCalender />
                    {"    "}Calendar
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
