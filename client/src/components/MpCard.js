/*eslint-disable no-unused-vars, indent*/
import React from 'react'
import { Link } from 'react-router-dom'

const MpCard = ({ id, name, image, location }) => {
  return (


    <div className="rows">
      <Link to={`/mps/${id}`}>
        <div className="contained">
          <div className="mp-card">
            <h2>{name}</h2>
            <div className="title title--epic">{location}</div>
            <div className="desc">{ }</div>
            <div className="img-fix-size">
              <img src={image} alt="mp" />
            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default MpCard
