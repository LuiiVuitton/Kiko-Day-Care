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
              <Link className="nav-link" to="/about">
                <IoMdPerson />
                {"    "}About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff">
                <IoPeopleSharp />
                {"    "} Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <IoMdMail />
                {"    "} Contact Us
              </Link>
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
                    href="https://calendar.google.com/calendar/u/0?cid=OGZlNzIwOWM1NDRiOTkyMTUzZDQ3YzlmMGIyMzRiODU4ODVjMWJjMjZhYTZjNzY3NzcyMmQ1YjJjNTFlMWJhZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                  >
                    <SlCalender />
                    {"    "}Calendar
                  </a>
                </li>
                <hr />

                <li>
                  <a className="dropdown-item" href="#">
                    <FaDownload />
                    {"    "}Forms
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
