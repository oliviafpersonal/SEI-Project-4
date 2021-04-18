/*eslint-disable no-unused-vars*/

import React, { useEffect, useState } from 'react'
import { getPayloadFromToken } from '../components/helpers/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

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



  return (
    <h1>Profile</h1>

  )

}

export default Profile