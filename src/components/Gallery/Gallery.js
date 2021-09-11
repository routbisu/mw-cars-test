import React from 'react'
import './Gallery.scss'
import Thumbnail from './Thumbnail/Thumbnail'

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images &&
        images.map((image) => <Thumbnail key={image.id} image={image} />)}
    </div>
  )
}

export default Gallery
