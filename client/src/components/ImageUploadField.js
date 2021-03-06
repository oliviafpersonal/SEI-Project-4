/* eslint-disable no-unused-vars, indent */

import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {


  const handleUpload = async (event) => {
    try {
      const data = new FormData()
      data.append('file', event.target.files[0])
      data.append('upload_preset', uploadPreset)
      //setLoading(true)
      const res = await axios.post(uploadUrl, data)
      console.log('response ->', res)
      handleImageUrl(res.data.url)
    } catch (err) {
      return err.message
    }
  }

  return (
    <>
      {value ? (
        <div>
          <img src={value} alt="image" />
        </div>
      ) : (
          <>
            {' '}
            <input className="input" type="file" onChange={handleUpload} />{' '}
          </>
        )}
    </>
  )
}