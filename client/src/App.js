import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
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
    <div className="columns">
      <div className="column is-one-quarter-desktop is-one-third-tablet">

        {mp &&
          <div >
            {mp.map(mp => (

              <div className="card" key={mp.name}>
                <div className="card-header">
                  <div key={mp.id} className="card-header-title">{mp.location}</div>
                </div>


              </div>
            ))}
          </div>
        }
      </div>
    </div>

  )
}

export default App