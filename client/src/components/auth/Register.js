import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import { useHistory } from 'react-router'

import { ImageUploadField } from '../ImageUploadField'

const Register = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    photo: '',
  })
  /*
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    })
    */

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      console.log(response)
      history.push('/login')
    } catch (err) {
      console.log(err.response)
      //setErrors(err.response.data.errors)
    }
  }

  const handleImageUrl = url => {
    setFormData({ ...formData, photo: url })
  }


  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="register-columns">
            <form
              className="column is-half is-offset-one-quarter box"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input is-danger"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                {/*errors.username && (
                  <p className="help is-danger">username error</p>
                )*/}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input is-danger"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>





              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input is-danger"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input is-danger"
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                  />
                </div>

                <ImageUploadField
                  value={formData.photo}
                  name='profile'
                  handleImageUrl={handleImageUrl}
                />

              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth">
                  Register Me!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
