import React, { useState } from 'react'
import VehicleInfo from './VehicleInfo/VehicleInfo'
import './Thumbnail.scss'

const Thumbnail = ({ image: { url, color, alt_description: altDesc, user, description }, selectedFilter }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="thumbnail-container">
      <button
        className={`thumbnail-image ${isOpen && 'open'}`}
        tabIndex="0"
        style={{
          background: `${color} url(${url}?size=1000&effect=${selectedFilter}) no-repeat center center / cover`,
        }}
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
