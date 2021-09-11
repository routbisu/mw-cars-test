import React from 'react'
import './Thumbnail.scss'

const Thumbnail = ({ image: { url } }) => {
  return (
    <div className="thumbnail-container">
      <div className="thumbnail-image" />
    </div>
  )
}

export default Thumbnail
