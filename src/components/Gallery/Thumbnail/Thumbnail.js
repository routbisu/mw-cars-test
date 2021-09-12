import React from 'react'
import ImageFilter from 'react-image-filter'
import './Thumbnail.scss'

const getBgStyles = ({ url, color }) => ({
  background: `url(${url}?size=300), ${color}`,
  backgroundSize: 'cover',
})

const Thumbnail = ({ image: { url, color, alt_description: altDesc } }) => {
  return (
    <div className="thumbnail-container">
      <div
        className="thumbnail-image"
        role="link"
        tabIndex="0"
        style={getBgStyles({ url, color })}
        aria-label={`[${altDesc}]`}
      >
        <div className="overlay" />
      </div>
    </div>
  )
}

export default Thumbnail
