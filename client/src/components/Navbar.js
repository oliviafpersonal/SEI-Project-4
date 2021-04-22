/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import { userIsAuthenticated } from './helpers/auth'

const Navbar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }



  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link to="/mps" className="navbar-item">
            Know Your Mp
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

          </div>

          {!userIsAuthenticated() && (
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
          )}

          {userIsAuthenticated() && (
            <div className="navbar-end">
              <div className="navbar-item">

                <a className="button is-focused" onClick={handleLogout}>
                  Log out
                </a>

                <Link to="/profile" className="button is-focused">
                  Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
