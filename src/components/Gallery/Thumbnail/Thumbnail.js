import React, { useState } from 'react'
import VehicleInfo from './VehicleInfo/VehicleInfo'
import './Thumbnail.scss'

const getBgStyles = ({ url, color }) => ({
  background: `url(${url}?size=1000), ${color}`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom right',
})

const Thumbnail = ({ image: { url, color, alt_description: altDesc, user, description } }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="thumbnail-container">
      <button
        className={`thumbnail-image ${isOpen && 'open'}`}
        tabIndex="0"
        style={getBgStyles({ url, color })}
        aria-label={`[${altDesc}]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="overlay" />
        <div className="info">{user && <VehicleInfo user={user} description={description} isOpen={isOpen} />}</div>
      </button>
    </div>
  )
}

export default Thumbnail
