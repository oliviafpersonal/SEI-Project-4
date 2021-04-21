/* eslint-disable no-unused-vars, indent */

import React, { useEffect, useState } from 'react'
import { getPayloadFromToken } from '../components/helpers/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { ImageUploadField } from '../components/ImageUploadField'
import Navbar from '../components/Navbar'

const Profile = () => {
  const [user, setUser] = useState(null)
  console.log(user, setUser)

  const userID = getPayloadFromToken().sub

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${userID}/`)
      setUser(response.data)
    }
    getData()


  }, [])


  if (!user) return null

  const { username, email, photo, comments } = user

  return (
    <>
      <Navbar />
      <div className="main-container">
        {user && (

          <div className="profile-container">
            <div className="columns">
              <div className="column">
                {' '}
                <div className="profile-box">
                  <img
                    className="profile-image"
                    alt="user profile image"
                    src={photo}
                  />

                </div>
              </div>

              <div className="column">
                <div className="username">
                  <h2>{`Hi, i'm ${username}`}</h2>
                  <h2>{`Email ${email}`}</h2>
                </div>

              </div>
            </div>
            
          </div>
        )}
      </div>
    </>

  )

}

export default Profile