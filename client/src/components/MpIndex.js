import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from './Navbar'

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
      <Navbar />

      <div className="columns">
        <div className="column is-one-quarter-desktop is-one-third-tablet">

          {mp &&
            <div >
              {mp.map(mp => (
                <>

                  <h2>{mp.name}</h2>
                  <div className="card" key={mp.name}>
                    <div className="card-header">
                      <div key={mp.id} className="card-header-title">{mp.location}</div>
                      <img src={mp.image} alt={mp.name} className="img" />
                    </div>


                  </div>
                </>
              ))}
            </div>
          }
        </div>
      </div>
    </>

  )
}

export default MpIndex
