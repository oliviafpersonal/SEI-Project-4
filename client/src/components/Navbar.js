/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import { userIsAuthenticated } from './helpers/auth'

const Navbar = () => {
  const [searchValues, setSearchValues] = useState({
    searchMps: '',
  })
  console.log(searchValues, setSearchValues)
  const [mp, setMp] = useState('')
  console.log(mp, setMp)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('api/mp/')
      setMp(response.data)
    }
    getData()
  }, [])

  const handleChange = (event) => {
    const newSearchValues = {
      ...searchValues,
      [event.target.name]: event.target.value,
    }
    setSearchValues(newSearchValues)
  }

  const navigateToSearched = (id) => {
    history.push(`/mps/${id}`)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const mpResult = searchValues.searchMps

    //if (mpResult === '' && mpResult === '') return null
    //if (mpResult !== '' && mpResult !== '')

    if (mpResult === '') navigateToSearched(mpResult)

  }







  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/home')
  }



  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link to="/mps" className="navbar-item">
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

                <form onSubmit={handleSubmit}>
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="text" placeholder="Find your MP" onChange={handleChange} />
                    </div>
                    <div className="control">
                      <a className="button is-info">
                        Search
                      </a>
                    </div>
                  </div>
                </form>



                {/*
                <div className="search-bar">
                  <form className="search-container" onSubmit={handleSubmit}>
                    <div className="location">
                      <label className="location-label">MP</label>
                      <input
                        placeholder="Who's Your MP?"
                        className="search-input"
                        name="searchCity"
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="search-divider"></div>
              <div className="location">
                <label className="location-label">Search Mps</label>
                <input
                  placeholder="Got a specific pub in mind?"
                  className="search-input"
                  name="searchPubs"
                  onChange={handleChange}
                ></input>
              </div>
              
                    <button className="search-button button">Search</button>
                  </form>
                </div>
*/ }




                <hr className="navbar-divider" />
              </div>
            </div>
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
