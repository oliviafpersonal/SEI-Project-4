import React, { useEffect, useState } from 'react'
import axios from 'axios'


const MpShow = () => {
  const [mp, setMp] = useState('')
  console.log(mp, setMp)


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('api/mp/')
      setMp(response.data)
    }
    getData()
  }, [])


  return (
    <h1>Show Page</h1>

  )
}

export default MpShow
