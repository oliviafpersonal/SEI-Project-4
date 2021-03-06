/* eslint-disable no-unused-vars */

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { getTokenFromLocalStorage } from '../components/helpers/auth'

const Comment = () => {
  const history = useHistory()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    text: '',
    mp: 0,
  })


  const handleChange = (event) => {
    //const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newFormData = {
      text: event.target.value,
      mp: `${id}`,
    }
    console.log(newFormData)
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    console.log(formData)
    try {
      const response = await axios.post('/api/comments/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log(response)
      history.push(`/mps/${id}`)
    } catch (err) {
      console.log(err.message)
    }
  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                onChange={handleChange}
                name="text"
                placeholder="Leave a comment"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="button " type="submit">
          Submit Comment
        </button>

      </form>

    </>
  )
}

export default Comment
