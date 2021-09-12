import React from 'react'
import './Thumbnail.scss'

const getBgStyles = (url) => ({
  background: `url(${url}?size=300), #000000`,
  backgroundSize: 'cover',
})

const Thumbnail = ({ image: { url } }) => {
  return (
    <div className="thumbnail-container">
      <button className="thumbnail-image" style={getBgStyles(url)}>
        <div className="overlay"></div>
      </button>
    </div>
  )
}

export default Thumbnail
