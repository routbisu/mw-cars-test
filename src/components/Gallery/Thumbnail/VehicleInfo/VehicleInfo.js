import React from 'react'
import './VehicleInfo.scss'

const VehicleInfo = ({ user: { name, bio, profile_image }, description, isOpen }) => {
  return (
    <div className="vehicle-info-container">
      <div className="profile-section">
        <div
          className="profile-picture"
          style={{ background: `url(${profile_image}?size=100)`, backgroundSize: 'cover' }}
        />
        <div className="user-section">
          <p className="name">{name}</p>
          {isOpen && <p className="bio">{bio}</p>}
        </div>
      </div>
      {isOpen && description && <div className="description-section">{description}</div>}
    </div>
  )
}

export default VehicleInfo
