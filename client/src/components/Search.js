/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


const Search = () => {

  const history = useHistory()

  const [search, setSearch] = useState('')
  const [filteredMps, setFilteredMps] = useState([])

  /*
  const handleChange = (event) => {
    const newSearchTerm = {
      ...searchTerm,
      [event.target.name]: event.target.value,
    }
    setSearchTerm(newSearchTerm)
  }
  */

  const [mp, setMp] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('api/mp/')
      setMp(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    setFilteredMps(
      mp.filter(mp => {
        return mp.name.toLowerCase().includes(search.toLowerCase())
      })
    )

  }, [search, mp])

  /*
  const navigateToSearched = (id) => {
    history.push(`/api/mp/${id}`)
  }

  const navigateToFiltered = (location) => {
    history.push(`/api/mp/${location}`)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const mpResult = searchTerm.searchMp
    const locationResult = searchTerm.searchLocation
    if (mpResult === '' && locationResult === '') return null
    if (locationResult !== '' && mpResult !== '')
      window.alert('You can only search by either location or name')
    if (mpResult === '') navigateToFiltered(locationResult)
    if (locationResult === '') {

      const lowerCaseName = mpResult.toLowerCase()
      const namesIndex = namesArray.indexOf(lowerCaseName)
      const id = idArray[namesIndex]
      if (!id) navigateToFiltered(id)
      else return navigateToSearched(id)
    }
  }


  if (!mp) return null
  const namesArray = mp.map((mp) => mp.name.toLowerCase())
  const idArray = mp.map((mp) => mp.id)
  */




  return (
    <div>
      <form /*onSubmit={handleSubmit}*/>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Find your MP" /*onChange={handleChange} */ onChange={e => setSearch(e.target.event)} name="searchMps" />
          </div>

        </div>
        <div className="search-divider"></div>
        {/* 
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="What is your constituency?" onChange={handleChange} name="searchLocation" />
          </div>

        </div>
        */}




        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>



      </form>

    </div>
  )
}

export default Search
