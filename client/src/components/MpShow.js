import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'

const MpShow = () => {
  const [mp, setMp] = useState('')
  console.log(mp, setMp)

  const { id } = useParams()



  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/mp/${id}`)
      setMp(response.data)
    }
    getData()
  }, [])

  if (!mp) return null
  const { name, image, location } = mp
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="profile-content">
          <div className="profile-img">
            <img src={image} alt="mp" />
            <div className="name">
              <h2>{name}</h2>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <hr className="break" />

      </div>

    </>

  )
}


export default MpShow
