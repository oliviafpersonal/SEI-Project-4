/* eslint-disable no-unused-vars */


import React from 'react'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Navbar from '../Navbar'

const Labour = () => {

  const isLabour = mp.filter((mp) => mp.party[0].name === 'Labour')

  const [mp, setMp] = useState('')


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('api/mp/')
      setMp(response.data)
    }
    getData()
  }, [])



  return (
    <>
      <Navbar />
      <br />

      <div>
        {mp &&
          <div>
            {mp.filter(mp => (mp.party[0].id === 2)
          </div>
        }
      </div>



    </>
  )
}

export default Labour
