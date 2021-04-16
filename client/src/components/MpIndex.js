import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from './Navbar'
import MpCard from './MpCard'

const MpIndex = () => {
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
    <>
      < Navbar />

      <br />

      <div>
        {mp &&
          <div>
            {mp.map(mp => (
              <MpCard key={mp.id} {...mp} />
            ))}
          </div>
        }
      </div>
    </>

  )
}

export default MpIndex
