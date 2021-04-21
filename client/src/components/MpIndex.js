/* eslint-disable no-unused-vars, indent */


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Navbar from './Navbar'
import MpCard from './MpCard'

const MpIndex = () => {
  const history = useHistory()

  const [mp, setMp] = useState('')
  console.log(mp, setMp)

  const [tory, setTory] = useState(null)
  const [labour, setLabour] = useState(null)
  const [libdem, setLibdem] = useState(null)
  const [independent, setIndependent] = useState(null)



  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('api/mp/')
      setMp(response.data)
    }
    getData()
  }, [])


  const handleAll = () => {
    setTory(null)
    setLabour(null)
    setLibdem(null)
    setIndependent(null)
  }





  const handleTory = () => {
    if (!tory) {
      setTory(1)
      setLabour(null)
      setLibdem(null)
      setIndependent(null)
    } else {
      setTory(null)
      setLabour(null)
      setLibdem(null)
      setIndependent(null)
    }
  }

  const handleLabour = () => {
    if (!labour) {
      setTory(null)
      setLabour(2)
      setLibdem(null)
      setIndependent(null)
    } else {
      setTory(null)
      setLabour(null)
      setLibdem(null)
      setIndependent(null)
    }
  }

  const handleLibdem = () => {
    if (!libdem) {
      setTory(null)
      setLabour(null)
      setLibdem(3)
      setIndependent(null)
    } else {
      setTory(null)
      setLabour(null)
      setLibdem(null)
      setIndependent(null)
    }
  }

  const handleIndependent = () => {
    if (!independent) {
      setTory(null)
      setLabour(null)
      setLibdem(null)
      setIndependent(4)
    } else {
      setTory(null)
      setLabour(null)
      setLibdem(null)
      setIndependent(null)
    }
  }

  if (!mp) return null

  const isTory = mp.filter((mp) => mp.party[0].id === 1)
  const isLabour = mp.filter((mp) => mp.party[0].id === 2)
  const isLibdem = mp.filter((mp) => mp.party[0].id === 3)
  const isIndependent = mp.filter((mp) => mp.party[0].id === 4)


  return (
    <>
      < Navbar />

      <br />


      <div className="filter-mps">
        <button className="filter-button button" onClick={handleAll} >
          All
        </button>
      </div>


      <div className="filter-mps">
        <button className="filter-button button tory-fill" onClick={handleTory}>
          Tory
        </button>
      </div>

      <div className="filter-mps">
        <button className="filter-button button labour-fill" onClick={handleLabour}>
          Labour
        </button>
      </div>

      <div className="filter-mps">
        <button className="filter-button button libdem-fill" onClick={handleLibdem}>
          Liberal Democrats
        </button>
      </div>

      <div className="filter-mps">
        <button className="filter-button button independent-fill" onClick={handleIndependent}>
          Independent
        </button>
      </div>

      <div>
        {
          (tory ? isTory
            : labour ? isLabour
              : libdem ? isLibdem
                : independent ? isIndependent
                  : mp).map(
                    (mp) => (
                      <MpCard key={mp.id} {...mp} />
                    )
                  )
        }
      </div>
    </>

  )
}

export default MpIndex
