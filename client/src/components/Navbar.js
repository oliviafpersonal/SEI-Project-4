import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link to="/home" className="navbar-item">
            Know You Mp
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">

                <Link to="/about" className="navbar-item">
                  About
                </Link>


                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>


                <hr className="navbar-divider" />
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">





              <div className="buttons">
                <Link to="/register" className="button is-focused">
                  Sign Up
                </Link>

                <Link to="/login" className="button is-focused">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar