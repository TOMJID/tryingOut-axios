import React from "react";
import { FaBars, FaCocktail } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="navbar border-0 mb-4 navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <FaCocktail className="mb-1" />
            Dringo
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle navigation">
            <FaBars />
          </button>

          <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link ">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
