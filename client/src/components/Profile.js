/*eslint-disable no-unused-vars*/

import React, { useEffect, useState } from 'react'
import { getPayloadFromToken, userIsOwner } from '../components/helpers/auth'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'

const Profile = () => {
  const [user, setUser] = useState(null)

  const userID = getPayloadFromToken



  return (
    <h1>Profile</h1>

  )

}

export default Profile